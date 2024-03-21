<?php

if (PHP_VERSION_ID < 70426) {// 70 4 26
    echo 'You need to use PHP 7.4.26 or above to run Doctum.' . PHP_EOL;
    if (PHP_MAJOR_VERSION === 7 && PHP_MINOR_VERSION === 4 && PHP_RELEASE_VERSION < 26) {
        echo 'We decided not having an updated PHP 7.4 was not healthy and has security issues.' . PHP_EOL;
        echo 'You can discuss about that with us on: https://github.com/code-lts/doctum/discussions.' . PHP_EOL;
    }
    echo 'Current detected version: (' . PHP_MAJOR_VERSION . '.' . PHP_MINOR_VERSION . ') (' . PHP_VERSION_ID . ').' . PHP_EOL;
    exit(1);
}

// installed via composer?
$doctumComposerAutoLoadFile = __DIR__ . '/../../../autoload.php';

$doctumComposerAutoLoadFileEnv = getenv('DOCTUM_COMPOSER_AUTOLOAD_FILE');
if (is_string($doctumComposerAutoLoadFileEnv)) {
    $doctumComposerAutoLoadFile = $doctumComposerAutoLoadFileEnv;
}

if (file_exists($doctumComposerAutoLoadFile)) {
    require_once $doctumComposerAutoLoadFile;
} else {
    require_once __DIR__ . '/../vendor/autoload.php';
}

use Doctum\Console\Application;

$application = new Application();
$application->run();
