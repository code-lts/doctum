#!/bin/sh

# You must be using shunit2 >= 2.1.8

set -e

oneTimeSetUp() {
    SKIP_GPG="yes" SKIP_PUBLISH_QUESTION="yes" $(dirname $0)/../../scripts/make-release.sh
    PHAR_PATH="$(realpath $(dirname $0)/../../build/doctum.phar)"
    echo "Using the phar: ${PHAR_PATH}"
}

testPharVersionCommand() {
    assertContains "version check" "$(${PHAR_PATH} --version)" "Doctum"
    assertContains "version check" "$(${PHAR_PATH} --version)" "by Fabien Potencier and William Desportes"
    assertContains "version check" "$(${PHP_BIN:-php} ${PHAR_PATH} --version)" "Doctum"
    assertContains "version check" "$(${PHP_BIN:-php} ${PHAR_PATH} --version)" "by Fabien Potencier and William Desportes"
}

testPharAbsoluteFiles() {
    cd $(dirname $0)/data/
    ABSOLUTE_OUTPUT=$(COLUMNS=200 ${PHAR_PATH} update --ignore-parse-errors --no-progress --no-ansi --force ./doctum-absolute.conf.php 2>&1)
    # Un-comment to update the test data
    # echo "${ABSOLUTE_OUTPUT}" > absolute_1.out
    assertSame "The output must be the same" "$(cat absolute_1.out)" "${ABSOLUTE_OUTPUT}"
    cd - > /dev/null
}

testPharAbsoluteFilesFrench() {
    cd $(dirname $0)/data/
    ABSOLUTE_OUTPUT=$(COLUMNS=200 ${PHAR_PATH} update --ignore-parse-errors --no-progress --no-ansi --force ./doctum-absolute-fr.conf.php 2>&1)
    # Un-comment to update the test data
    # echo "${ABSOLUTE_OUTPUT}" > absolute_fr_1.out
    assertSame "The output must be the same" "$(cat absolute_fr_1.out)" "${ABSOLUTE_OUTPUT}"
    assertSame "The output must be the same" "Afficher le menu</span" "$(grep -F "Afficher le menu" ./build/html/doc-index.html | cut -d '>' -f 2)"
    cd - > /dev/null
}

testPharRelativeFiles() {
    cd $(dirname $0)/data/
    RELATIVE_OUTPUT=$(COLUMNS=200 ${PHAR_PATH} update --ignore-parse-errors --no-progress --no-ansi --force ./doctum-relative.conf.php 2>&1)
    # Un-comment to update the test data
    # echo "${RELATIVE_OUTPUT}" > relative_1.out
    assertSame "The output must be the same" "$(cat relative_1.out)" "${RELATIVE_OUTPUT}"
    cd - > /dev/null
}

testPharConfigDoesNotExist() {
    cd $(dirname $0)/data/
    set +e
    OUTPUT=$(COLUMNS=200 ${PHAR_PATH} update --no-progress --no-ansi --force ./doctum-error.conf.php 2>&1)
    OUTPUT=$(echo "${OUTPUT}" | sed 's/ *$//g')
    set -e
    assertSame "The output must be the same" "$(printf "$(cat error_cli_no_config.out)" "$(pwd)/")" "${OUTPUT}"
    cd - > /dev/null
}

# Load shUnit2.
. shunit2
