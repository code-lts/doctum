#!/usr/bin/env php
<?php

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
