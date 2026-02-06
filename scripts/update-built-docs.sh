#!/bin/sh
set -eu

copyBuildSources() {
    # Change branch
    git checkout gh-pages > /dev/null

    # Remove config files
    rm -v ./api-docs/*.php
    # Remove index file
    rm -v ./api-docs/index.html

    # Restore from main branch
    for file in $(git ls-tree -r --name-only main | grep -F -- ".github/api-docs"); do
        echo "Copying: $file";
        git checkout main -- "$file"
        git restore --staged "$file"
        mv -v "$file" ./api-docs/
    done

    if [ ! -z "$(git status --porcelain)" ]; then
        git status
        git add ./api-docs/*.php ./api-docs/index.html
        git status
        git commit -m "Update api-docs configurations"
        git push
    fi

    # Clean the workspace
    git reset --hard
    git clean -d -f

    git status

    git checkout - > /dev/null
}

doDocsUpdate() {
    # Change branch
    git checkout gh-pages > /dev/null
    # Clean the workspace
    git reset --hard
    git clean -d -f

    FOLDER_NAME="$1"
    SOURCE_URL="$2"
    MODE="${3:-}"
    BUILD_DIR="./api-docs/$FOLDER_NAME"
    SOURCE_DIR="./api-docs/sources/$FOLDER_NAME"

    echo "Starting to work on: $FOLDER_NAME"
    echo "Source-url: $SOURCE_URL"
    echo "Source: $BUILD_DIR"
    echo "Build: $SOURCE_DIR"

    if [ ! -f api-docs/doctum-php-$FOLDER_NAME.php ]; then
        echo "Missing config file: api-docs/doctum-php-$FOLDER_NAME.php"
        exit 1
    fi

    # Create the folders if not exists
    if [ ! -d "$BUILD_DIR" ]; then
        mkdir "$BUILD_DIR"
    fi

    rm -rfd "$SOURCE_DIR"

    if [ "$MODE" != "git" ]; then
        if [ ! -d "$SOURCE_DIR" ]; then
            mkdir "$SOURCE_DIR"
        fi
        # Download, extract and move
        curl -# -L -o $FOLDER_NAME.tar.gz "$SOURCE_URL"
        tar xzvf $FOLDER_NAME.tar.gz --strip-components=1 -C "$SOURCE_DIR" && rm $FOLDER_NAME.tar.gz
    else
        git clone "$SOURCE_URL" "$SOURCE_DIR"
    fi

    du -sh "$SOURCE_DIR"

    # Try as hard as possible to cleanup the dir
    git ls-files "$BUILD_DIR" | xargs -r -n 1 rm
    # kept non variable by security
    rm -rfd "$BUILD_DIR"

    # Render
    ./releases/dev/doctum.phar update --no-ansi --no-progress --ignore-parse-errors -v api-docs/doctum-php-$FOLDER_NAME.php --force

    # Local source folder cleanup
    rm -rfd $SOURCE_DIR

    if [ ! -z "$(git status --porcelain)" ]; then
        # Push the changes, but not if empty
        git add -A "$BUILD_DIR"
        git commit -m "Api documentations update ($(date --utc))" -m "#apidocs"
        git push
    fi

    git status

    git checkout - > /dev/null

    # Local folder cleanup
    rm -rfd ./api-docs/$FOLDER_NAME

    echo "Ended working on: $BUILD_DIR"
}

copyBuildSources

doDocsUpdate "phpstorm-stubs" "https://github.com/JetBrains/phpstorm-stubs/archive/refs/heads/master.tar.gz"
doDocsUpdate "mangopay2-php-sdk" "https://github.com/Mangopay/mangopay2-php-sdk/archive/refs/heads/master.tar.gz"
doDocsUpdate "tcpdf" "https://github.com/tecnickcom/TCPDF/archive/refs/heads/main.tar.gz"
doDocsUpdate "DirectoryTree-ImapEngine" "https://github.com/DirectoryTree/ImapEngine/archive/refs/heads/master.tar.gz"
doDocsUpdate "phpunit" "https://github.com/sebastianbergmann/phpunit/archive/refs/heads/main.tar.gz"
doDocsUpdate "Dolibarr" "https://github.com/Dolibarr/dolibarr.git" "git"
