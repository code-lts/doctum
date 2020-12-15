#!/bin/bash
##
# @license http://unlicense.org/UNLICENSE The UNLICENSE
# @author William Desportes <williamdes@wdes.fr>
##

set -e

rm -rf ./build
mkdir ./build

RELEASE_OPTIONS="$1"

function get_version {
    VERSION=$($1 --version | cut -d ' ' -f 2 | sed -e 's/^[[:space:]]*//')
    [[ ${VERSION} =~ ^[0-9]+ ]] && VERSION_MAJOR="${BASH_REMATCH[0]}"
    [[ ${VERSION} =~ ^[0-9]+\.[0-9]+ ]] && VERSION_RANGE="${BASH_REMATCH[0]}"
    [[ ${VERSION} =~ ^[0-9]+\.[0-9]+\.[0-9]+-dev$ ]] && VERSION_MATCH_DEV="${BASH_REMATCH[0]}"

    if [ ! -z "${VERSION_MATCH_DEV}" ]; then
        echo "Releasing a development version.";
        # Append -dev to the range
        VERSION_RANGE="${VERSION_RANGE}-dev"
        # Append -dev to the major
        VERSION_MAJOR="${VERSION_MAJOR}-dev"
    else
        echo "Releasing a normal version.";
    fi
}

function backupVendorFolder {
    TEMP_FOLDER="$(mktemp -d /tmp/doctum.XXXXXXXXX)"
    mv ./vendor "${TEMP_FOLDER}"
}

function restoreVendorFolder {
    if [ ! -d ${TEMP_FOLDER} ]; then
        echo 'No backup to restore'
        exit 1;
    fi
    mv "${TEMP_FOLDER}/vendor" ./vendor
    rmdir "${TEMP_FOLDER}"
}

get_version ./bin/doctum.php
echo "${VERSION}" > ./build/VERSION
echo "${VERSION_RANGE}" > ./build/VERSION_RANGE
echo "${VERSION_MAJOR}" > ./build/VERSION_MAJOR

echo "Release for major: ${VERSION_MAJOR}, version range: ${VERSION_RANGE}"
echo "Release for : ${VERSION}"

GPG_KEY=${GPG_KEY:-C4D91FDFCEF6B4A3C653FD7890A0EF1B8251A889}

PHP_VERSION="$(${PHP_BIN:-php} -r "echo PHP_MAJOR_VERSION . '.' . PHP_MINOR_VERSION;")"

if [ "${PHP_VERSION}" = "7.1" ]; then
    echo "PHP version (${PHP_VERSION}) matches the exact version."
else
    echo "Your PHP version (${PHP_VERSION}) does not match the exact version required (7.1). This can make users unable to use the phar file."
    exit 1;
fi

backupVendorFolder

if [ "${RELEASE_OPTIONS}" = "rebuild" ]; then
    echo "Rebuild deps"
    rm composer.lock
    curl -O "https://doctum.long-term.support/releases/${VERSION}/composer.lock"
    ${PHP_BIN:-php} ${COMPOSER_BIN:-composer} install --no-dev --quiet
else
    echo "Remove dev-deps"
    ${PHP_BIN:-php} ${COMPOSER_BIN:-composer} update --no-dev --quiet
fi

echo "Copy composer.lock"
# Copy it now because the dev deps are removed at this stage
cp composer.lock ./build/

echo "Generate phar"
${PHP_BIN:-php} -dphar.readonly=0 ./scripts/phar-generator-script.php
chmod +x ./build/doctum.phar

restoreVendorFolder

echo "Copy build files"
cp CHANGELOG.md ./build/
cd ./build/
sha256sum doctum.phar > ./doctum.phar.sha256
sha256sum * > ./files.sha256
gpg --detach-sig --local-user "${GPG_KEY}" --armor doctum.phar
gpg --detach-sig --local-user "${GPG_KEY}" --armor doctum.phar.sha256
gpg --detach-sig --local-user "${GPG_KEY}" --armor files.sha256
echo "Lint"
${PHP_BIN:-php} -l doctum.phar
echo "Check fingerprints"
sha256sum --strict --check *.sha256
echo "Version before build: ${VERSION}"
VERSION_BEFORE="${VERSION}"
get_version "${PHP_BIN:-php} doctum.phar"
echo "Version after build: ${VERSION}"
if [ "${VERSION_BEFORE}" = "${VERSION}" ]; then
    echo "Done."
    exit 0;
else
    echo "Versions do not match."
    exit 1;
fi
