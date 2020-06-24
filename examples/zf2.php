<?php

use Doctum\Doctum;
use Symfony\Component\Finder\Finder;

$iterator = Finder::create()
    ->files()
    ->name('*.php')
    ->in('/path/to/zf2/library')
;

return new Doctum($iterator, [
    'title'               => 'ZF2 API (for master)',
    'theme'               => 'default',
    'build_dir'           => __DIR__ . '/../build/zf2',
    'cache_dir'           => __DIR__ . '/../cache/zf2',
    'include_parent_data' => false,
]);
