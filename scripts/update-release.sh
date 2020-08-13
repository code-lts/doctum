#!/bin/bash
##
# @license http://unlicense.org/UNLICENSE The UNLICENSE
# @author William Desportes <williamdes@wdes.fr>
##

set +e

VERSION="$(cat ./build/VERSION)"
PHAR_COMMIT="$(git rev-parse --verify HEAD)"

git checkout gh-pages

rm -rf releases/latest
mv build ./releases/latest
git add -A ./releases/latest/*
git commit -S -m "Update latest release" -m "version: ${VERSION}" -m "#latest" -m "Commit: ${PHAR_COMMIT}"

if [ ! -d ./releases/${VERSION}/ ]; then
    mkdir ./releases/${VERSION}/
    cp -rp ./releases/latest/* ./releases/${VERSION}/
    git add -A ./releases/${VERSION}/
    git commit -S -m "Release ${VERSION}" -m "version: ${VERSION}" -m "Commit: ${PHAR_COMMIT}"
else
    rm -rf ./releases/${VERSION}/*
    cp -rp ./releases/latest/* ./releases/${VERSION}/
    git add -A ./releases/${VERSION}/
    git commit -S -m "Update version ${VERSION}" -m "version: ${VERSION}" -m "Commit: ${PHAR_COMMIT}"
fi

rm -rf build/*

git checkout -