#!/bin/bash
##
# @license http://unlicense.org/UNLICENSE The UNLICENSE
# @author William Desportes <williamdes@wdes.fr>
##

set -e

BUILD_DATE="$(date --rfc-2822)"

XML_CONTENT="$(printf '<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
    <channel>
        <title>Doctum PHAR</title>
        <description>Doctum PHAR releases</description>
        <lastBuildDate>%s</lastBuildDate>
        <link>https://doctum.long-term.support/</link>
' "${BUILD_DATE}" )"

for commitHash in $(git log gh-pages --format=format:"%H"); do
    subject="$(git show ${commitHash} -s --format=format:"%s")"
    body="$(git show ${commitHash} -s --format=format:"%b")"
    if [[ "${body}" == *"version: "* ]]; then
        pubDate="$(git show ${commitHash} -s --format=format:"%cD")"
        subject="$(git show ${commitHash} -s --format=format:"%s")"
        version="$(sed -n 's/^version: \(.*\)$/\1/p' <<< "$(git show ${commitHash} -s --format=format:"%b")")"
        [[ ${version} =~ ^[0-9]+\.[0-9]+\.[0-9]+-dev$ ]] && VERSION_MATCH_DEV="${BASH_REMATCH[0]}" || VERSION_MATCH_DEV=""
        if [ ! -z "${VERSION_MATCH_DEV}" ]; then
            category="dev"
        else
            category="release"
        fi

        description="Version ${version}"

        if [[ ! -z "${VERSION_MATCH_DEV}" ]]; then
            subject="Update dev version ${version}"
            description="Update dev version ${version}"
        fi

        XML_CONTENT+="$(printf '
            <item>
                <title>%s</title>
                <description>%s</description>
                <category>%s</category>
                <pubDate>%s</pubDate>
                <guid>%s</guid>
                <link>https://doctum.long-term.support/releases/%s/doctum.phar</link>
            </item>' "${subject}" "${description}" "${category}" "${pubDate}" "${commitHash}" "${version}")"
    fi
done

XML_CONTENT+='
    </channel>
</rss>
'

printf "${XML_CONTENT}"
