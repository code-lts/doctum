#!/bin/bash

##
# @license http://unlicense.org/UNLICENSE The UNLICENSE
# @author William Desportes <williamdes@wdes.fr>
##

set -e

# Example: 5.4.0 or 5.4.0-dev
VERSION="$(cat ./build/VERSION)"
# Example: 5.4-dev or 5.4
VERSION_RANGE="$(cat ./build/VERSION_RANGE)"
# Example: 5 or 5-dev
VERSION_MAJOR="$(cat ./build/VERSION_MAJOR)"
# Example: 0 or 1 depending on the -dev suffix
IS_DEV_VERSION="$(echo "${VERSION_RANGE}" | grep -F -q -e '-dev' && echo '1' || echo '0')"
# Example: 5db49ae740e4d1fd8eb79a9de52c9aefc7906f1f
PHAR_COMMIT="$(git rev-parse --verify HEAD)"
# Manual switch
IS_LTS_MODE="0"

git checkout gh-pages

VERSION_ENV="dev"
VERSION_TEXT="#dev"
VERSION_TEXT_EXTRA=""

if [ ${IS_DEV_VERSION} = "0" ]; then
    VERSION_ENV="latest"
    VERSION_TEXT="#normal"
fi

if [ ${IS_LTS_MODE} = "1" ]; then
    VERSION_TEXT_EXTRA="#lts"
fi

updateLatestFolders() {
    SOURCE_FOLDER="$1"
    # Yes that process could use symlinks but diffs between releases would be not possible
    if [ ! -d ./releases/${VERSION_ENV}/ ]; then
        mkdir ./releases/${VERSION_ENV}
    fi
    if [ ! -d ${SOURCE_FOLDER} ]; then
        printf 'Source folder does not exist: "%s"' "${SOURCE_FOLDER}"
        exit 1
    fi
    # Copy latest/dev to version name (example: latest to 5.1.0)
    cp -rp ${SOURCE_FOLDER}/* ./releases/${VERSION_ENV}/
    git add -A ./releases/${VERSION_ENV}/*

    git commit -S -m "Update ${VERSION_ENV} release" -m "version: ${VERSION}" -m "version-env: ${VERSION_ENV}" -m "version-range: ${VERSION_ENV}" -m "version-major: ${VERSION_MAJOR}" -m "${VERSION_TEXT}" -m "${VERSION_TEXT_EXTRA}" -m "Commit: ${PHAR_COMMIT}"
}

doChangesForRelease() {
    SOURCE_FOLDER="$1"
    COMMIT_TEXT="Update version ${VERSION}"
    if [ ! -d ./releases/${VERSION}/ ]; then
        COMMIT_TEXT="Release ${VERSION}"
    fi
    # Do not update major for LTS releases
    if [ ! -d ./releases/${VERSION}/ ] && [ ${IS_LTS_MODE} = "0" ]; then
        if [ -L ./releases/${VERSION_MAJOR} ]; then
            # Unlink version env
            unlink ./releases/${VERSION_MAJOR}
        fi
        # The release did not exist, so we need to update the major symlink to point to the version
        ln -s -r ./releases/${VERSION} ./releases/${VERSION_MAJOR}
        ls -lah ./releases/${VERSION_MAJOR}
        git add -A "./releases/${VERSION_MAJOR}"
    fi
    # Delete version folder even if it does not exist
    rm -rf ./releases/${VERSION}
    # Move source folder to version folder
    mv "${SOURCE_FOLDER}" ./releases/${VERSION}
    # Add to GIT index
    git add -A ./releases/${VERSION}/
    if [ -L ./releases/${VERSION_RANGE} ]; then
        # Unlink version env
        unlink ./releases/${VERSION_RANGE}
    fi
    # Link version to version range or link latest/dev to version range
    ln -s -r ./releases/${VERSION} ./releases/${VERSION_RANGE}
    ls -lah ./releases/${VERSION_RANGE}
    # Add to GIT index
    git add -A "./releases/${VERSION_RANGE}"
    # Commit the changes
    git commit -S -m "${COMMIT_TEXT}" -m "version: ${VERSION}" -m "version-range: ${VERSION_RANGE}" -m "${VERSION_TEXT}" -m "${VERSION_TEXT_EXTRA}" -m "Commit: ${PHAR_COMMIT}"
}

doChangesForRelease "./build"

echo 'Updating the version named folder'
if [ ${IS_LTS_MODE} = "0" ]; then
    updateLatestFolders "./releases/${VERSION}"
else
    echo 'LTS mode !'
    read -r -p "Make it the latest (${VERSION_ENV}) version ? [Y/n]" response
    response=${response,,} # tolower
    if [[ $response =~ ^(yes|y| ) ]] || [[ -z $response ]]; then
        updateLatestFolders "./releases/${VERSION}"
    fi
fi

rm -rf build/*

git checkout -
