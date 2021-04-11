#!/bin/bash
##
# @license http://unlicense.org/UNLICENSE The UNLICENSE
# @author William Desportes <williamdes@wdes.fr>
##

set -e

VERSIONS_COMPAT="$(./scripts/extract-php-version-constraints.sh)"

git checkout gh-pages

printf '%s\n' "${VERSIONS_COMPAT}" > versions-platform-compatibility.json
# Parsing check
jq -r '.' versions-platform-compatibility.json > /dev/null

# Commit the changes
git add -A "versions-platform-compatibility.json"
git commit -S -m "Update the version compatibility file" -m "#versions-compat"

git checkout -
