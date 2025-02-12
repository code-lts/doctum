#!/bin/bash
##
# @license http://unlicense.org/UNLICENSE The UNLICENSE
# @author William Desportes <williamdes@wdes.fr>
##

set -e

rm -rf ./build
mkdir ./build

RELEASE_OPTIONS="$1"

function get_version {
    set +e
    VERSION=$($1 version)
    if [ $? -ne 0 ]; then
        printf 'Bad output: "%s"\n' "${VERSION}"
        exit 1
    fi
    set -e
    [[ ${VERSION} =~ ^[0-9]+ ]] && VERSION_MAJOR="${BASH_REMATCH[0]}"
    [[ ${VERSION} =~ ^[0-9]+\.[0-9]+ ]] && VERSION_RANGE="${BASH_REMATCH[0]}"
    [[ ${VERSION} =~ ^[0-9]+\.[0-9]+\.[0-9]+-dev$ ]] && VERSION_MATCH_DEV="${BASH_REMATCH[0]}"

    if [ ! -z "${VERSION_MATCH_DEV}" ]; then
        echo "Releasing a development version.";
        # Append -dev to the range
        VERSION_RANGE="${VERSION_RANGE}-dev"
        # Append -dev to the major
        VERSION_MAJOR="${VERSION_MAJOR}-dev"
    else
        echo "Releasing a normal version.";
    fi
}

function backupVendorFolder {
    TEMP_FOLDER="$(mktemp -d /tmp/doctum.XXXXXXXXX)"
    mv ./vendor "${TEMP_FOLDER}"
}

function restoreVendorFolder {
    if [ ! -d ${TEMP_FOLDER} ]; then
        echo 'No backup to restore'
        exit 1;
    fi
    rm -rf ./vendor
    mv "${TEMP_FOLDER}/vendor" ./vendor
    rmdir "${TEMP_FOLDER}"
}

function loadEnvGitHubToken {
    GITHUB_TOKEN=$(git config github.token || echo '')
    if [ -z "${GITHUB_TOKEN}" ]; then
        echo 'GitHub token is empty. Please run git config --add github.token "123"';
        exit 1;
    fi
}

function generate_post_data {
  cat <<EOF
{
  "tag_name": "v${VERSION}",
  "target_commitish": "$branch",
  "name": "v${VERSION}",
  "body": "### Version ${VERSION}",
  "draft": true,
  "prerelease": false
}
EOF
}

function uploadArtifact {
    FILE_NAME="$1"
    MIME_TYPE="$2"
    ARTIFACT_OUT=$(curl -# -S -s -L \
        -H "Authorization: token ${GITHUB_TOKEN}" \
        -H "Content-Type: ${MIME_TYPE}" \
        --data-binary @${FILE_NAME} \
        "https://uploads.github.com/repos/$user/$repo/releases/$releaseId/assets?name=${FILE_NAME}")
    echo "Uploaded: $(echo $ARTIFACT_OUT | jq -r '.name')."
}

function publishArtifacts {

    if ! command -v jq &> /dev/null
    then
        echo "jq could not be found"
        exit 1
    fi

    if ! command -v git &> /dev/null
    then
        echo "git could not be found"
        exit 1
    fi

    loadEnvGitHubToken
    user=${GH_ORG:-"code-lts"}
    repo=${GH_REPO:-"doctum"}
    echo "Create release ${VERSION} for repo: $user/$repo"
    read -r -p "Are you sure to publish the draft? [Y/n]" response
    response=${response,,} # tolower
    if [[ $response =~ ^(yes|y| ) ]] || [[ -z $response ]]; then
        RELEASE_OUT="$(curl -H "Authorization: token ${GITHUB_TOKEN}" --data "$(generate_post_data)" "https://api.github.com/repos/$user/$repo/releases")"
        echo "Created release: $(echo $RELEASE_OUT | jq -r '.html_url')"
    fi

    echo "Upload artifacts for this release."
    read -r -p "Are you sure to upload artifacts to the draft? [Y/n]" response
    response=${response,,} # tolower
    if [[ $response =~ ^(yes|y| ) ]] || [[ -z $response ]]; then
        releaseId=$(echo $RELEASE_OUT | jq -r '.id')
        uploadArtifact doctum.phar 'application/octet-stream'
        uploadArtifact doctum.phar.asc 'application/pgp-signature'
        uploadArtifact doctum.phar.sha256 'text/plain'
        uploadArtifact doctum.phar.sha256.asc 'application/pgp-signature'
    fi

}

if [ -z "${COMPOSER_BIN}" ]; then
    COMPOSER_BIN=$(command -v composer)
fi

if [ ! -f ./vendor/autoload.php ]; then
    echo "Composer dependencies are missing"
    echo "Updating..."
    ${COMPOSER_BIN} update --quiet ${COMPOSER_OPTIONS:-}
    echo "Done."
fi

get_version "${PHP_BIN:-php} ./bin/doctum.php"

if [ -z "${VERSION}" ] || [ -z "${VERSION_RANGE}" ] || [ -z "${VERSION_MAJOR}" ]; then
    echo 'Could not get the version'
    echo "Output was: ${get_version}"
    exit 1
fi

echo "${VERSION}" > ./build/VERSION
echo "${VERSION_RANGE}" > ./build/VERSION_RANGE
echo "${VERSION_MAJOR}" > ./build/VERSION_MAJOR

echo "Release for major: ${VERSION_MAJOR}, version range: ${VERSION_RANGE}"
echo "Release for : ${VERSION}"

GPG_KEY=${GPG_KEY:-C4D91FDFCEF6B4A3C653FD7890A0EF1B8251A889}

PHP_VERSION_REQUIRED=$(sed -nre '/"php"/ s/.*"\^(([0-9]+\.)*[0-9]+).*/\1/p' composer.json)

if [ -z "${PHP_VERSION_REQUIRED}" ]; then
    echo 'The required php version can not be found'
    exit 1
fi

echo "PHP version required: ${PHP_VERSION_REQUIRED}"

echo "Lock composer php version"
COMPOSER_FILE=$(cat composer.json)
# Example: 5db49ae740e4d1fd8eb79a9de52c9aefc7906f1f
GIT_COMMIT_HASH="$(git rev-parse --verify HEAD)"
COMPOSER_AUTOLOADER_VERSION="$(echo "$VERSION" | tr '.' '_' | tr '-' '_')"
echo "Setting composer php required version to: $PHP_VERSION_REQUIRED"
${COMPOSER_BIN} config platform.php "$PHP_VERSION_REQUIRED"
echo "Setting composer autoload suffix to: ${COMPOSER_AUTOLOADER_VERSION}__${GIT_COMMIT_HASH}"
${COMPOSER_BIN} config autoloader-suffix "${COMPOSER_AUTOLOADER_VERSION}__${GIT_COMMIT_HASH}"

backupVendorFolder

if [ "${RELEASE_OPTIONS}" = "rebuild" ]; then
    echo "Rebuild deps"
    rm composer.lock
    curl -O "https://doctum.long-term.support/releases/${VERSION}/composer.lock"
    ${PHP_BIN:-php} ${COMPOSER_BIN} install --no-dev --prefer-dist --quiet ${COMPOSER_OPTIONS:-}
else
    echo "Remove dev-deps"
    ${PHP_BIN:-php} ${COMPOSER_BIN} update --no-dev --prefer-dist --quiet ${COMPOSER_OPTIONS:-}
fi

echo "Copy composer.lock"
# Copy it now because the dev deps are removed at this stage
cp composer.lock ./build/

echo "Unlock composer php version"
echo "${COMPOSER_FILE}" > composer.json

echo "Generate phar"
${PHP_BIN:-php} -dphar.readonly=0 ./scripts/phar-generator-script.php
chmod +x ./build/doctum.phar

restoreVendorFolder

echo "Copy build files"
cp CHANGELOG.md ./build/
cd ./build/
sha256sum doctum.phar > ./doctum.phar.sha256
sha256sum * > ./files.sha256
if [ -z "${SKIP_GPG}" ]; then
    gpg --detach-sig --local-user "${GPG_KEY}" --armor doctum.phar
    gpg --detach-sig --local-user "${GPG_KEY}" --armor doctum.phar.sha256
    gpg --detach-sig --local-user "${GPG_KEY}" --armor files.sha256
fi
echo "Lint"
${PHP_BIN:-php} -l doctum.phar
echo "Check fingerprints"
sha256sum -w -c *.sha256
echo "Version before build: ${VERSION}"
VERSION_BEFORE="${VERSION}"
get_version "${PHP_BIN:-php} doctum.phar"
echo "Version after build: ${VERSION}"
if [ "${VERSION_BEFORE}" = "${VERSION}" ]; then
    echo "Done."

    if [ -z "${SKIP_PUBLISH_QUESTION}${VERSION_MATCH_DEV}" ]; then
        publishArtifacts
    fi

    exit 0;
else
    echo "Versions do not match."
    exit 1;
fi
