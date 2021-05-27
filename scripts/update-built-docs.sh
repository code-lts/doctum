#!/bin/sh
set -e

# Change branch
git checkout gh-pages > /dev/null

doDocsUpdate() {
    FOLDER_NAME="$1"
    SOURCE_URL="$2"

    # Create the folders if not exists
    if [ ! -d ./api-docs/$FOLDER_NAME ]; then
        mkdir ./api-docs/$FOLDER_NAME
    fi

    rm -rf ./api-docs/sources/$FOLDER_NAME

    if [ ! -d ./api-docs/sources/$FOLDER_NAME ]; then
        mkdir ./api-docs/sources/$FOLDER_NAME
    fi

    # Download, extract and move
    curl -# -L -o $FOLDER_NAME.tar.gz "$SOURCE_URL"

    tar xzvf $FOLDER_NAME.tar.gz --strip-components=1 -C ./api-docs/sources/$FOLDER_NAME && rm $FOLDER_NAME.tar.gz

    du -sh ./api-docs/sources/$FOLDER_NAME

    # Try as hard as possible to cleanup the dir
    git ls-files ./api-docs/$FOLDER_NAME/ | xargs -r -n 1 rm
    rm -rfd ./api-docs/$FOLDER_NAME/*

    # Render
    ./releases/latest/doctum.phar update --no-ansi --no-progress --ignore-parse-errors -v api-docs/doctum-php-$FOLDER_NAME.php --force

    # Local folder cleanup
    rm -rf ./api-docs/sources/$FOLDER_NAME/

    # Push the changes, but not if empty
    git add -A ./api-docs/$FOLDER_NAME
    git diff-index --quiet HEAD || git commit -m "Api documentations update ($(date --utc))" -m "#apidocs" && git push

    git status

    git checkout - > /dev/null

    # Local folder cleanup
    rm -rf ./api-docs/$FOLDER_NAME

}

doDocsUpdate "phpstorm-stubs" "https://github.com/JetBrains/phpstorm-stubs/archive/refs/heads/master.tar.gz"
doDocsUpdate "mangopay2-php-sdk" "https://github.com/Mangopay/mangopay2-php-sdk/archive/refs/heads/master.tar.gz"
