<?php

declare(strict_types = 1);

use Doctum\Doctum;
use Symfony\Component\Finder\Finder;

$iterator = Finder::create()
    ->files()
    ->name('*.php')
    ->in(['src']);

return new Doctum(
    $iterator,
    [
    'theme'     => 'default',
    'title'     => 'API Documentation',
    'build_dir' => 'docs/build/html',
    'cache_dir' => 'docs/cache/html',
    ]
);
