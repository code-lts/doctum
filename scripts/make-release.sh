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

composer update --no-dev
php -dphar.readonly=0 ./scripts/phar-generator-script.php
composer update
cp CHANGELOG.md ./build/
