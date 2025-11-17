<?php

use Doctum\Doctum;
use Doctum\RemoteRepository\GitHubRemoteRepository;
use Symfony\Component\Finder\Finder;

$rootDir = __DIR__ . '/';
$sourceRootDir = $rootDir . 'sources/DirectoryTree-ImapEngine';

$iterator = Finder::create()
    ->files()
    ->name('*.php')
    ->path('src')
    ->in($sourceRootDir);

return new Doctum($iterator, [
    'title'                => 'DirectoryTree/ImapEngine',
    'build_dir'            => $rootDir . '/DirectoryTree-ImapEngine',
    'cache_dir'            => $rootDir . '/cache',
    'source_dir'           => $rootDir,
    'version'              => 'master',// For remote links to work
    'remote_repository'    => new GitHubRemoteRepository('DirectoryTree/ImapEngine', $sourceRootDir),
    'footer_link'          => [
        'href'        => 'https://github.com/DirectoryTree/ImapEngine#readme',
        'rel'         => 'noreferrer noopener',
        'target'      => '_blank',
        'before_text' => 'This documentation is built for the',
        'link_text'   => 'DirectoryTree/ImapEngine',
        'after_text'  => 'project.',
    ],
]);
