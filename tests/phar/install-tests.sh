#!/bin/sh

set -e

if [ ! -f ~/v2.1.8.tar.gz ]; then
    wget -O ~/v2.1.8.tar.gz https://github.com/kward/shunit2/archive/refs/tags/v2.1.8.tar.gz;
fi
tar -xvf ~/v2.1.8.tar.gz
sudo mv shunit2-2.1.8/shunit2 /bin/shunit2
rm -rf shunit2-2.1.8
