#!/bin/sh

set -e

ROOT="$(realpath "$(dirname $0)/../")"

echo "Running in: ${ROOT}"

recreateSetup() {
    git archive HEAD --output=./doctum-repository-composer-package-auto-test.tar
    cd "${TEMP_FOLDER}"
    tar -xf "${ROOT}/doctum-repository-composer-package-auto-test.tar" --directory "${TEMP_FOLDER_REPO}"
    rm "${ROOT}/doctum-repository-composer-package-auto-test.tar"
    cp "${ROOT}/tests/phar/data/doctum-absolute.conf.php" "${TEMP_FOLDER}/doctum-absolute.conf.php"
    mkdir "${TEMP_FOLDER}/src"
    cp -rp "${ROOT}/tests/phar/data/src/" "${TEMP_FOLDER}/src"
    printf '{
        "repositories": [
            {
                "type": "path",
                "url": "%s",
                "options": {
                    "versions": {
                        "code-lts/doctum": "5.x-dev"
                    },
                    "symlink": false
                }
            }
        ],
        "minimum-stability": "dev",
        "require": {
            "code-lts/doctum": "5.x-dev"
        }
    }' "${TEMP_FOLDER_REPO}" > "${TEMP_FOLDER}/composer.json"
    composer update ${COMPOSER_CLI_OPTIONS}
    rm -rf "${TEMP_FOLDER_REPO}"
    cd - > /dev/null
}

cleanWorkspace() {
    rm -r "${TEMP_FOLDER}/build"
    rm -r "${TEMP_FOLDER}/cache"
}

checkRender() {
    if [ ! -f "${TEMP_FOLDER}/build/html/index.html" ]; then
        echo "Missing file ${TEMP_FOLDER}/build/html/index.html"
        exit 1
    fi
}

checkPackage() {
    if [ -d "${TEMP_FOLDER}/vendor/code-lts/doctum/.github" ]; then
        echo "Found folder ${TEMP_FOLDER}/vendor/code-lts/doctum/.github"
        exit 1
    fi

    if [ -d "${TEMP_FOLDER}/vendor/code-lts/doctum/tests" ]; then
        echo "Found folder ${TEMP_FOLDER}/vendor/code-lts/doctum/tests"
        exit 1
    fi

    if [ ! -d "${TEMP_FOLDER}/vendor/code-lts/doctum/bin" ]; then
        echo "Missing folder ${TEMP_FOLDER}/vendor/code-lts/doctum/bin"
        exit 1
    fi
}

TEMP_FOLDER="$(mktemp -d /tmp/doctum-composer-package-auto-test.XXXXXXXXX)"
TEMP_FOLDER_REPO="$(mktemp -d /tmp/doctum-composer-package-auto-test-repo.XXXXXXXXX)"

echo "Using temp folder: ${TEMP_FOLDER}"
echo "Using temp repo folder: ${TEMP_FOLDER_REPO}"

recreateSetup

cd "${TEMP_FOLDER}"

echo "Moved to: $PWD"

checkPackage

echo "Running parse"
"${TEMP_FOLDER}/vendor/bin/doctum.php" parse -v --ignore-parse-errors --no-progress --no-ansi --force ./doctum-absolute.conf.php

echo "Running render"
"${TEMP_FOLDER}/vendor/bin/doctum.php" render -v --ignore-parse-errors --no-progress --no-ansi --force ./doctum-absolute.conf.php

checkRender
cleanWorkspace

echo "Running update"
"${TEMP_FOLDER}/vendor/bin/doctum.php" update -v --ignore-parse-errors --no-progress --no-ansi --force ./doctum-absolute.conf.php

checkRender
cleanWorkspace

cd - > /dev/null

rm -rf "${TEMP_FOLDER}"
