#!/bin/bash
##
# @license http://unlicense.org/UNLICENSE The UNLICENSE
# @author William Desportes <williamdes@wdes.fr>
##

set -e

RSS_FEED="$(./scripts/build-rss.sh)"

git checkout gh-pages

printf "${RSS_FEED}" > releases.rss
git add -A "releases.rss"
git commit -S -m "Update the rss releases feed" -m "#rss"

git checkout -
