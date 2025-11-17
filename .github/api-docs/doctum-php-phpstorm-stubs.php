<?php

use Doctum\Doctum;
use Doctum\RemoteRepository\GitHubRemoteRepository;
use Symfony\Component\Finder\Finder;

$rootDir = __DIR__ . '/';
$sourceRootDir = $rootDir . 'sources/phpstorm-stubs';

$iterator = Finder::create()
    ->files()
    ->name('*.php')
    ->in($sourceRootDir);

return new Doctum($iterator, [
    'title'                => 'PHP Jetbrains phpstorm-stubs',
    'build_dir'            => $rootDir . '/phpstorm-stubs',
    'cache_dir'            => $rootDir . '/cache',
    'source_dir'           => $rootDir,
    'version'              => 'master',// For remote links to work
    'remote_repository'    => new GitHubRemoteRepository('JetBrains/phpstorm-stubs', $sourceRootDir),
    'footer_link'          => [
        'href'        => 'https://github.com/JetBrains/phpstorm-stubs#readme',
        'rel'         => 'noreferrer noopener',
        'target'      => '_blank',
        'before_text' => 'This documentation is built using',
        'link_text'   => 'phpstorm-stubs',
        'after_text'  => 'from JetBrains.',
    ],
]);
