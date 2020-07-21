#!/usr/bin/env php
<?php

if (PHP_VERSION_ID < 70100) {
    echo 'You need to use PHP 7.1 to run Doctum.' . PHP_EOL;
    $majorVersion = (int) (PHP_VERSION_ID / 10000);
    $minorVersion = (int) substr((string) PHP_VERSION_ID, -4, 2);
    echo 'Current detected version: (' . $majorVersion . '.' . $minorVersion . ') (' . PHP_VERSION_ID . ').' . PHP_EOL;
    exit(1);
}

// installed via composer?
$composerDir = __DIR__ . '/../../../autoload.php';
if (file_exists($composerDir)) {
    require_once $composerDir;
} else {
    require_once __DIR__ . '/../vendor/autoload.php';
}

use Doctum\Console\Application;

$application = new Application();
$application->run();
