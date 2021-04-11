#!/bin/sh
set -e

# Change branch
git checkout gh-pages > /dev/null

# Create the folders if not exists
if [ ! -d ./api-docs/phpstorm-stubs ]; then
    mkdir ./api-docs/phpstorm-stubs
fi

if [ ! -d ./api-docs/sources/phpstorm-stubs ]; then
    mkdir ./api-docs/sources/phpstorm-stubs
fi

# Download, extract and move
curl -L -s -o phpstorm-stubs.zip https://github.com/JetBrains/phpstorm-stubs/archive/refs/heads/master.zip
unzip -q -d ./api-docs/sources/phpstorm-stubs ./phpstorm-stubs.zip && rm ./phpstorm-stubs.zip

# Try as hard as possible to cleanup the dir
git ls-files ./api-docs/phpstorm-stubs/ | xargs -r -n 1 rm
rm -rfd ./api-docs/phpstorm-stubs/*

# Render
./releases/latest/doctum.phar update --no-ansi --no-progress --ignore-parse-errors -v api-docs/doctum-php-phpstorm-stubs.php --force

# Push the changes, but not if empty
git add -A ./api-docs/phpstorm-stubs
git diff-index --quiet HEAD || git commit -m "Api documentations update ($(date --utc))" -m "#apidocs" && git push

git checkout - > /dev/null

# Local folder cleanup
rm -rf ./api-docs/sources/phpstorm-stubs/
rm -rf ./api-docs/phpstorm-stubs
