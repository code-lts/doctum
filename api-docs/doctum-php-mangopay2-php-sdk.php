<?php

use Doctum\Doctum;
use Doctum\RemoteRepository\GitHubRemoteRepository;
use Symfony\Component\Finder\Finder;

$rootDir = __DIR__ . '/';
$sourceRootDir = $rootDir . 'sources/mangopay2-php-sdk';

$iterator = Finder::create()
    ->files()
    ->name('*.php')
    ->in($sourceRootDir);

return new Doctum($iterator, [
    'title'                => 'PHP Jetbrains mangopay2-php-sdk',
    'build_dir'            => $rootDir . '/mangopay2-php-sdk',
    'cache_dir'            => $rootDir . '/cache',
    'source_dir'           => $rootDir,
    'version'              => 'master',// For remote links to work
    'remote_repository'    => new GitHubRemoteRepository('Mangopay/mangopay2-php-sdk', $sourceRootDir),
    'footer_link'          => [
        'href'        => 'https://github.com/JetBrains/mangopay2-php-sdk#readme',
        'rel'         => 'noreferrer noopener',
        'target'      => '_blank',
        'before_text' => 'This documentation is built for the',
        'link_text'   => 'PHP SDK',
        'after_text'  => 'of MangoPay.',
    ],
]);
