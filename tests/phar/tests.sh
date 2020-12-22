#!/bin/sh

# You must be using shunit2 >= 2.1.8

set -e

oneTimeSetUp() {
    SKIP_GPG="yes" $(dirname $0)/../../scripts/make-release.sh
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
    ABSOLUTE_OUTPUT=$(${PHAR_PATH} update --no-progress --no-ansi --force ./doctum-absolute.conf.php 2>&1)
    assertSame "The output must be the same" "${ABSOLUTE_OUTPUT}" "$(cat absolute_1.out)"
    cd - > /dev/null
}

testPharRelativeFiles() {
    cd $(dirname $0)/data/
    RELATIVE_OUTPUT=$(${PHAR_PATH} update --no-progress --no-ansi --force ./doctum-relative.conf.php 2>&1)
    assertSame "The output must be the same" "${RELATIVE_OUTPUT}" "$(cat relative_1.out)"
    cd - > /dev/null
}

testPharConfigDoesNotExist() {
    cd $(dirname $0)/data/
    set +e
    OUTPUT=$(${PHAR_PATH} update --no-progress --no-ansi --force ./doctum-error.conf.php 2>&1)
    OUTPUT=$(echo "${OUTPUT}" | sed 's/ *$//g')
    set -e
    assertSame "The output must be the same" "${OUTPUT}" "$(printf "$(cat error_cli_no_config.out)" "$(pwd)/")"
    cd - > /dev/null
}

# Load shUnit2.
. shunit2
