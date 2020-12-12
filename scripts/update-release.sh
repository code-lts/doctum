#!/bin/bash
##
# @license http://unlicense.org/UNLICENSE The UNLICENSE
# @author William Desportes <williamdes@wdes.fr>
##

set -e

VERSION="$(cat ./build/VERSION)"
VERSION_RANGE="$(cat ./build/VERSION_RANGE)"
VERSION_MAJOR="$(cat ./build/VERSION_MAJOR)"
IS_DEV_VERSION="$(echo "${VERSION_RANGE}" | grep -F -q -e '-dev' && echo '1' || echo '0')"
PHAR_COMMIT="$(git rev-parse --verify HEAD)"

git checkout gh-pages

VERSION_ENV="dev"
VERSION_TEXT="#dev"
if [ ${IS_DEV_VERSION} = "0" ]; then
    VERSION_ENV="latest"
    VERSION_TEXT="#normal"
fi

rm -rf releases/${VERSION_ENV}
mv build ./releases/${VERSION_ENV}
git add -A ./releases/${VERSION_ENV}/*

git commit -S -m "Update ${VERSION_ENV} release" -m "version: ${VERSION}" -m "version-env: ${VERSION_ENV}" -m "version-range: ${VERSION_RANGE}" -m "version-major: ${VERSION_MAJOR}" -m "${VERSION_TEXT}" -m "Commit: ${PHAR_COMMIT}"

if [ -L ./releases/${VERSION_MAJOR} ]; then
    # Unlink version env
    unlink ./releases/${VERSION_MAJOR}
fi

if [ -L ./releases/${VERSION_RANGE} ]; then
    # Unlink version env
    unlink ./releases/${VERSION_RANGE}
fi

if [ ! -d ./releases/${VERSION}/ ]; then
    # Create version folder
    mkdir ./releases/${VERSION}/
    # Copy latest/dev to version name (example: latest to 5.1.0)
    cp -rp ./releases/${VERSION_ENV}/* ./releases/${VERSION}/
    # Add to GIT index
    git add -A ./releases/${VERSION}/
    # Link version to version range
    ln -s -r ./releases/${VERSION} ./releases/${VERSION_RANGE}
    ls -lah ./releases/${VERSION_RANGE}
    # Link version to version major
    ln -s -r ./releases/${VERSION} ./releases/${VERSION_MAJOR}
    ls -lah ./releases/${VERSION_MAJOR}
    # Add to GIT index
    git add -A "./releases/${VERSION_RANGE}"
    git add -A "./releases/${VERSION_MAJOR}"
    # Commit the changes
    git commit -S -m "Release ${VERSION}" -m "version: ${VERSION}" -m "version-range: ${VERSION_RANGE}" -m "${VERSION_TEXT}" -m "Commit: ${PHAR_COMMIT}"
else
    # Delete version folder
    rm -rf ./releases/${VERSION}/*
    # Copy latest/dev to version name (example: latest to 5.1.0)
    cp -rp ./releases/${VERSION_ENV}/* ./releases/${VERSION}/
    # Add to GIT index
    git add -A ./releases/${VERSION}/
    # Link latest/dev to version range
    ln -s -r ./releases/${VERSION} ./releases/${VERSION_RANGE}
    ls -lah ./releases/${VERSION_RANGE}
    # Add to GIT index
    git add -A "./releases/${VERSION_RANGE}"
    # Commit the changes
    git commit -S -m "Update version ${VERSION}" -m "version: ${VERSION}" -m "version-range: ${VERSION_RANGE}" -m "${VERSION_TEXT}" -m "Commit: ${PHAR_COMMIT}"
fi

rm -rf build/*

git checkout -
