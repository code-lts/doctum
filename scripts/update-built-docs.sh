#!/bin/sh
set -eu

doDocsUpdate() {
    # Change branch
    git checkout gh-pages > /dev/null

    FOLDER_NAME="$1"
    SOURCE_URL="$2"
    BUILD_DIR="./api-docs/$FOLDER_NAME"
    SOURCE_DIR="./api-docs/sources/$FOLDER_NAME"

    echo "Starting to work on: $FOLDER_NAME"
    echo "Source-url: $SOURCE_URL"
    echo "Source: $BUILD_DIR"
    echo "Build: $SOURCE_DIR"

    # Create the folders if not exists
    if [ ! -d "$BUILD_DIR" ]; then
        mkdir "$BUILD_DIR"
    fi

    rm -rfd "$SOURCE_DIR"

    if [ ! -d "$SOURCE_DIR" ]; then
        mkdir "$SOURCE_DIR"
    fi

    # Download, extract and move
    curl -# -L -o $FOLDER_NAME.tar.gz "$SOURCE_URL"

    tar xzvf $FOLDER_NAME.tar.gz --strip-components=1 -C "$SOURCE_DIR" && rm $FOLDER_NAME.tar.gz

    du -sh "$SOURCE_DIR"

    # Try as hard as possible to cleanup the dir
    git ls-files "$BUILD_DIR" | xargs -r -n 1 rm
    # kept non variable by security
    rm -rfd "$BUILD_DIR"

    # Render
    ./releases/dev/doctum.phar update --no-ansi --no-progress --ignore-parse-errors -v api-docs/doctum-php-$FOLDER_NAME.php --force

    # Local source folder cleanup
    rm -rfd $SOURCE_DIR

    # Push the changes, but not if empty
    git add -A "$BUILD_DIR"
    git diff-index --quiet HEAD || git commit -m "Api documentations update ($(date --utc))" -m "#apidocs" && git push

    git status

    git checkout - > /dev/null

    # Local folder cleanup
    rm -rfd ./api-docs/$FOLDER_NAME

    echo "Ended working on: $BUILD_DIR"
}

doDocsUpdate "phpstorm-stubs" "https://github.com/JetBrains/phpstorm-stubs/archive/refs/heads/master.tar.gz"
doDocsUpdate "mangopay2-php-sdk" "https://github.com/Mangopay/mangopay2-php-sdk/archive/refs/heads/master.tar.gz"
doDocsUpdate "tcpdf" "https://github.com/tecnickcom/TCPDF/archive/refs/heads/main.tar.gz"
doDocsUpdate "DirectoryTree-ImapEngine" "https://github.com/DirectoryTree/ImapEngine/archive/refs/heads/master.tar.gz"
doDocsUpdate "phpunit" "https://github.com/sebastianbergmann/phpunit/archive/refs/heads/main.tar.gz"
