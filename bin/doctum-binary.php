<?php

if (PHP_MAJOR_VERSION <= 7 && PHP_MINOR_VERSION < 1) {
    echo 'You need to use PHP 7.1 or above to run Doctum.' . PHP_EOL;
    echo 'Current detected version: (' . PHP_MAJOR_VERSION . '.' . PHP_MINOR_VERSION . ') (' . PHP_VERSION_ID . ').' . PHP_EOL;
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
