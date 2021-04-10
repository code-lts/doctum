#!/bin/bash
##
# @license http://unlicense.org/UNLICENSE The UNLICENSE
# @author William Desportes <williamdes@wdes.fr>
##

if ! command -v jq &> /dev/null
then
    echo "jq could not be found"
    exit 1
fi

set -e

git checkout -q gh-pages > /dev/null

# Only normal releases
FOUND_PHARS="$(find ./releases/ -type f -name 'VERSION' -not -path '*-dev/*' -not -path '*/dev/*' -not -path '*/latest/*' | sort -n)"

VERSION_COMPAT='{}'

for file in $FOUND_PHARS; do
    VERSION="$(cat "$file")"
    COMPOSER_JSON="$(git show "v${VERSION}:./composer.json")"
    REQUIRED_VERSION="$(printf '%s' "${COMPOSER_JSON}" | jq -r .require.php)"
    VERSION_COMPAT="$(echo "${VERSION_COMPAT} {\"${VERSION}\": \"${REQUIRED_VERSION}\"}" | jq -s add)"
done

printf '%s' "${VERSION_COMPAT}" | jq -r

git checkout -q - > /dev/null

