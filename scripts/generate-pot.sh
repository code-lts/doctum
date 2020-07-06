#!/bin/bash
##
# @license http://unlicense.org/UNLICENSE The UNLICENSE
# @author William Desportes <williamdes@wdes.fr>
##

if [ -z "$1" ] && [ -z "$2" ]; then
    echo "usage: generate-pot.sh search/dir locale/dir project.pot"
    exit 1;
fi

if [ -z "$1" ]; then
    echo "Missing search dir";
    exit 1;
fi

if [ -z "$3" ]; then
    echo "Missing locale dir";
    exit 1;
fi

if [ -z "$3" ]; then
    echo "Missing .pot filename";
    exit 1;
fi

echo "Searching into $1 for *.php, output $3 into $2";

xgettext \
    --force-po --from-code=UTF-8 \
    --default-domain=doctum \
    --copyright-holder="William Desportes" \
    --msgid-bugs-address=williamdes@wdes.fr \
    --from-code=utf-8 \
    --keyword=gettext --keyword=pgettext:1c,2 --keyword=ngettext:1,2 \
    -p $2 \
    --from-code=UTF-8 \
    --add-comments=l10n \
    --add-location -L PHP $(find "$1" \( -name "*.php" \) | sort) \
    -o "$3"
