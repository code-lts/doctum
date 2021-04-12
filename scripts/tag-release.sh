#!/bin/bash
##
# @license http://unlicense.org/UNLICENSE The UNLICENSE
# @author William Desportes <williamdes@wdes.fr>
##

GPG_KEY=${GPG_KEY:-C4D91FDFCEF6B4A3C653FD7890A0EF1B8251A889}

function get_version {
    VERSION=$($1 version)
    [[ ${VERSION} =~ ^[0-9]+\.[0-9]+ ]] && VERSION_RANGE="${BASH_REMATCH[0]}"
    [[ ${VERSION} =~ ^[0-9]+\.[0-9]+\.[0-9]+-dev$ ]] && VERSION_MATCH_DEV="${BASH_REMATCH[0]}"

    if [ ! -z "${VERSION_MATCH_DEV}" ]; then
        echo "Releasing a development version is impossible.";
        exit 1
    else
        echo "Releasing a normal version.";
    fi
}

get_version "${PHP_BIN:-php} ./bin/doctum.php"

echo "Version: ${VERSION}"

git tag --sign --annotate --local-user="${GPG_KEY}" --message="v${VERSION}" "v${VERSION}"
