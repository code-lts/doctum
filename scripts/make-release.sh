#!/bin/bash
##
# @license http://unlicense.org/UNLICENSE The UNLICENSE
# @author William Desportes <williamdes@wdes.fr>
##

set +e

rm -rf ./build
mkdir ./build

function get_version {
    VERSION=$($1 --version | cut -d ' ' -f 2 | sed -e 's/^[[:space:]]*//')
}

get_version ./bin/doctum.php
echo "${VERSION}" > ./build/VERSION

echo "Release for : ${VERSION}"

GPG_KEY=${GPG_KEY:-C4D91FDFCEF6B4A3C653FD7890A0EF1B8251A889}

echo "Remove dev-deps"
composer update --no-dev --quiet
echo "Generate phar"
php -dphar.readonly=0 ./scripts/phar-generator-script.php
chmod +x ./build/doctum.phar
echo "Update deps"
composer update --quiet
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