#!/bin/sh

set -e

if [ -z "${SKIP_INSTALL}" ]; then
    apk add --no-cache --update php7 composer php7-tokenizer php7-dom php7-xml php7-xmlwriter php7-simplexml
fi

$(dirname $0)/tests.sh
