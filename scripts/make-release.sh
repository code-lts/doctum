#!/bin/bash
##
# @license http://unlicense.org/UNLICENSE The UNLICENSE
# @author William Desportes <williamdes@wdes.fr>
##

set +e

rm -rf ./build
mkdir ./build

VERSION=$(./bin/doctum.php --version | cut -d ' ' -f 2 | sed -e 's/^[[:space:]]*//')
echo "${VERSION}" > ./build/VERSION

echo "Release for : ${VERSION}"

GPG_KEY=${GPG_KEY:-C4D91FDFCEF6B4A3C653FD7890A0EF1B8251A889}

composer update --no-dev
php -dphar.readonly=0 ./scripts/phar-generator-script.php
composer update
cp CHANGELOG.md ./build/
sha256sum ./build/doctum.phar > ./build/doctum.phar.sha256
sha256sum ./build/* > ./build/files.sha256
gpg --detach-sig --local-user "${GPG_KEY}" --armor ./build/doctum.phar
gpg --detach-sig --local-user "${GPG_KEY}" --armor ./build/doctum.phar.sha256
gpg --detach-sig --local-user "${GPG_KEY}" --armor ./build/files.sha256
