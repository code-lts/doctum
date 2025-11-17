<?php

use Doctum\Doctum;
use Doctum\RemoteRepository\GitHubRemoteRepository;
use Symfony\Component\Finder\Finder;

$rootDir = __DIR__ . '/';
$sourceRootDir = $rootDir . 'sources/phpunit';

$iterator = Finder::create()
    ->files()
    ->name('*.php')
    ->path('src')
    ->in($sourceRootDir);

return new Doctum($iterator, [
    'title'                => 'PHPUnit',
    'build_dir'            => $rootDir . '/phpunit',
    'cache_dir'            => $rootDir . '/cache',
    'source_dir'           => $rootDir,
    'version'              => 'main',// For remote links to work
    'remote_repository'    => new GitHubRemoteRepository('sebastianbergmann/phpunit', $sourceRootDir),
    'footer_link'          => [
        'href'        => 'https://phpunit.de/documentation.html',
        'rel'         => 'noreferrer noopener',
        'target'      => '_blank',
        'before_text' => 'This documentation is built for the',
        'link_text'   => 'PHPUnit',
        'after_text'  => 'project.',
    ],
]);
