<?php

declare(strict_types = 1);

use Doctum\Doctum;
use Symfony\Component\Finder\Finder;

$rootDir  = __DIR__ . '/src';
$iterator = Finder::create()
    ->files()
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
    ]
);
