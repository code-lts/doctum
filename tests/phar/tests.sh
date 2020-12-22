#!/bin/sh

# You must be using shunit2 >= 2.1.8

set -e

oneTimeSetUp() {
    SKIP_GPG="yes" $(dirname $0)/../../scripts/make-release.sh
    PHAR_PATH="$(dirname $0)/../../build/doctum.phar"
    echo "Using the phar: ${PHAR_PATH}"
}

testPharVersionCommand() {
    assertContains "version check" "$(${PHAR_PATH} --version)" "Doctum"
    assertContains "version check" "$(${PHAR_PATH} --version)" "by Fabien Potencier and William Desportes"
    assertContains "version check" "$(${PHP_BIN:-php} ${PHAR_PATH} --version)" "Doctum"
    assertContains "version check" "$(${PHP_BIN:-php} ${PHAR_PATH} --version)" "by Fabien Potencier and William Desportes"
}

# Load shUnit2.
. shunit2
