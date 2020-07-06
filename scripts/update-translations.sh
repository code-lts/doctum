#!/bin/bash

ME="$(realpath $(dirname $0))"
ROOTDIR="$(realpath $(dirname $0)/../)"

rm -rf $ROOTDIR/build/twigcache
mkdir -p $ROOTDIR/build/twigcache

$ME/generate-twig-cache.php \
    --twig-cache-dir="$ROOTDIR/build/twigcache" \
    --twig-templates-dir="$ROOTDIR/src/Resources/themes/default" \
    --twig-templates-po-files="src/Resources/themes/default" \
    --json-mapping="$ROOTDIR/locale/replace.json" \
    --title="Doctum" \
    --copyright="William Desportes <williamdes@wdes.fr>" \
    --package-version="1.0.0"
sh $ME/generate-pot.sh $ROOTDIR/build/twigcache $ROOTDIR/locale Doctum.pot
$ME/update-po-files.php \
    --po-dir="$ROOTDIR/locale" \
    --po-template="$ROOTDIR/locale/Doctum.pot" \
    --json-mapping="$ROOTDIR/locale/replace.json"
rm -rf $ROOTDIR/build/twigcache
rm $ROOTDIR/locale/replace.json

msgfmt --directory="$ROOTDIR/locale" --check -o "$ROOTDIR/locale/fr.mo" "$ROOTDIR/locale/fr.po"
msgfmt --directory="$ROOTDIR/locale" --check -o "$ROOTDIR/locale/en.mo" "$ROOTDIR/locale/en.po"
