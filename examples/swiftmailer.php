<?php

use Doctum\Doctum;
use Doctum\Version\GitVersionCollection;
use Symfony\Component\Finder\Finder;

$iterator = Finder::create()
    ->files()
    ->name('*.php')
    ->in($dir = '/path/to/swiftmailer/lib/classes')
;

$versions = GitVersionCollection::create($dir)
    ->addFromTags(function ($version) {
        return preg_match('/^v?4\.\d+\.\d+$/', $version);
    })
    ->add('master', 'master branch')
;

return new Doctum($iterator, [
    'theme'                => 'default',
    'versions'             => $versions,
    'title'                => 'Swiftmailer API',
    'build_dir'            => __DIR__ . '/../build/swiftmailer/%version%',
    'cache_dir'            => __DIR__ . '/../cache/swiftmailer/%version%',
    'default_opened_level' => 1,
]);
