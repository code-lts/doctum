#!/bin/bash
##
# @license http://unlicense.org/UNLICENSE The UNLICENSE
# @author William Desportes <williamdes@wdes.fr>
##

set +e

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
sha256sum ./build/doctum.phar > ./build/doctum.phar.sha256
sha256sum ./build/* > ./build/files.sha256
gpg --detach-sig --local-user "${GPG_KEY}" --armor ./build/doctum.phar
gpg --detach-sig --local-user "${GPG_KEY}" --armor ./build/doctum.phar.sha256
gpg --detach-sig --local-user "${GPG_KEY}" --armor ./build/files.sha256
echo "Lint"
php -l ./build/doctum.phar
echo "Version before build: ${VERSION}"
get_version "php ./build/doctum.phar"
echo "Version after build: ${VERSION}"
echo "Done."