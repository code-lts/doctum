#!/bin/sh

set -e

ROOT="$(realpath "$(dirname $0)/../")"

echo "Running in: ${ROOT}"

cleanWorkspace() {
    rm -rf tests/phar/data/build
    rm -rf tests/phar/data/cache
}

cleanWorkspace

TEMP_FOLDER="$(mktemp -d /tmp/doctum-resume-parse-test.XXXXXXXXX)"

echo "Using temp folder: ${TEMP_FOLDER}"

echo "Running parse"
./bin/doctum.php parse -v --ignore-parse-errors --no-progress --no-ansi --force tests/phar/data/doctum-absolute.conf.php

echo "Running render"
./bin/doctum.php render -v --ignore-parse-errors --no-progress --no-ansi --force tests/phar/data/doctum-absolute.conf.php

echo "Moving files to: ${TEMP_FOLDER}"

mv tests/phar/data/build ${TEMP_FOLDER}
mv tests/phar/data/cache ${TEMP_FOLDER}

cleanWorkspace

echo "Running update"
./bin/doctum.php update -v --ignore-parse-errors --no-progress --no-ansi --force tests/phar/data/doctum-absolute.conf.php

echo "Comparing cache"
diff --unified --color=always --minimal --suppress-common-lines --recursive tests/phar/data/cache/ "${TEMP_FOLDER}/cache/"
if [ $? -eq 0 ]; then
    echo "The cache directories where the same"
fi

echo "Comparing build"
diff --unified --color=always --minimal --suppress-common-lines --recursive tests/phar/data/build/ "${TEMP_FOLDER}/build/"
if [ $? -eq 0 ]; then
    echo "The build directories where the same"
fi

rm -rf "${TEMP_FOLDER}"