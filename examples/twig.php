<?php

declare(strict_types = 1);

use Doctum\Version\GitVersionCollection;
use Doctum\Doctum;

$dir = '/Users/fabien/Code/github/twigphp/Twig/lib';

$versions = GitVersionCollection::create($dir)
    ->addFromTags('v1.*')
    ->add('master', 'master branch');

return new Doctum($dir, [
    'theme'                => 'default',
    'title'                => 'Twig 1.6 API',
    'build_dir'            => __DIR__ . '/../build/twig/%version%',
    'cache_dir'            => __DIR__ . '/../cache/twig/%version%',
    'default_opened_level' => 1,
    'versions' => $versions,
    ]
);
