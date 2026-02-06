<?php

use Doctum\Doctum;
use Doctum\RemoteRepository\GitHubRemoteRepository;
use Symfony\Component\Finder\Finder;
use Doctum\Version\GitVersionCollection;

$rootDir = __DIR__ . '/';
$sourceRootDir = $rootDir . 'sources/Dolibarr';

$iterator = Finder::create()
    ->files()
    ->name('*.php')
    ->exclude('htdocs/includes')
    ->path('htdocs')
    ->in($sourceRootDir);

$versions = GitVersionCollection::create($sourceRootDir)
    ->addFromBranches('*.0');

return new Doctum($iterator, [
    'title'                => 'Dolibarr',
    'build_dir'            => $rootDir . '/Dolibarr/versions/%version%',
    'cache_dir'            => $rootDir . '/cache/%version%',
    'source_dir'           => $rootDir,
    'versions'             => $versions,
    'remote_repository'    => new GitHubRemoteRepository('dolibarr/dolibarr', $sourceRootDir),
    'footer_link'          => [
        'href'        => 'https://github.com/Dolibarr/dolibarr',
        'rel'         => 'noreferrer noopener',
        'target'      => '_blank',
        'before_text' => 'This documentation is built for the',
        'link_text'   => 'Dolibarr',
        'after_text'  => 'project.',
    ],
]);
