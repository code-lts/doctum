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
    [[ ${VERSION} =~ ^[0-9]+\.[0-9]+ ]] && VERSION_RANGE="${BASH_REMATCH[0]}"
    [[ ${VERSION} =~ ^[0-9]+\.[0-9]+\.[0-9]+-dev$ ]] && VERSION_MATCH_DEV="${BASH_REMATCH[0]}"

    if [ ! -z "${VERSION_MATCH_DEV}" ]; then
        echo "Releasing a development version.";
        # Append -dev to the range
        VERSION_RANGE="${VERSION_RANGE}-dev"
    else
        echo "Releasing a normal version.";
    fi
}

get_version ./bin/doctum.php
echo "${VERSION}" > ./build/VERSION
echo "${VERSION_RANGE}" > ./build/VERSION_RANGE

echo "Release for : ${VERSION}"

GPG_KEY=${GPG_KEY:-C4D91FDFCEF6B4A3C653FD7890A0EF1B8251A889}

if [ "${RELEASE_OPTIONS}" = "rebuild" ]; then
    echo "Rebuild deps"
    rm composer.lock
    curl -O "https://doctum.long-term.support/releases/${VERSION}/composer.lock"
    ${COMPOSER_BIN:-composer} install --no-dev --quiet
else
    echo "Remove dev-deps"
    ${COMPOSER_BIN:-composer} update --no-dev --quiet
fi

echo "Generate phar"
php -dphar.readonly=0 ./scripts/phar-generator-script.php
chmod +x ./build/doctum.phar
echo "Update deps"
${COMPOSER_BIN:-composer} update --quiet
echo "Copy build files"
cp CHANGELOG.md ./build/
cp composer.lock ./build/
cd ./build/
sha256sum doctum.phar > ./doctum.phar.sha256
sha256sum * > ./files.sha256
gpg --detach-sig --local-user "${GPG_KEY}" --armor doctum.phar
gpg --detach-sig --local-user "${GPG_KEY}" --armor doctum.phar.sha256
gpg --detach-sig --local-user "${GPG_KEY}" --armor files.sha256
echo "Lint"
php -l doctum.phar
echo "Check fingerprints"
sha256sum --strict --check *.sha256
echo "Version before build: ${VERSION}"
VERSION_BEFORE="${VERSION}"
get_version "php doctum.phar"
echo "Version after build: ${VERSION}"
if [ "${VERSION_BEFORE}" = "${VERSION}" ]; then
    echo "Done."
    exit 0;
else
    echo "Versions do not match."
    exit 1;
fi
