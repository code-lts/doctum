<?php

use Doctum\Doctum;
use Symfony\Component\Finder\Finder;

$iterator = Finder::create()
  ->files()
  ->name("*.php")
  ->in(['src']);

return new Doctum($iterator, [
  'theme'     => 'default',
  'title'     => 'API Documentation',
  'build_dir' => __DIR__ . '/build/html',
  'cache_dir' => __DIR__ . '/cache/html',
]);
