<?php

declare(strict_types = 1);

use Doctum\Doctum;
use Symfony\Component\Finder\Finder;

$rootDir  = __DIR__ . '/src';
$iterator = Finder::create()
    ->files()
    ->sortByName()
    ->name('*.php')
    ->in($rootDir);

return new Doctum(
    $iterator,
    [
        'theme'     => 'default',
        'title'     => 'API Documentation',
        'build_dir' => __DIR__ . '/build/html',
        'cache_dir' => __DIR__ . '/cache/html',
        'insert_todos' => true,
        'language' => 'fr',
        'base_url' => 'http://8.1.local/@code-lts/doctum/tests/phar/data/build/html/',
        'favicon'  => 'https://williamdes.eu/assets/logo/williamdes_x64.png',
    ]
);
