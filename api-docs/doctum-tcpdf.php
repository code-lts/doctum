<?php

use Doctum\Doctum;
use Doctum\RemoteRepository\GitHubRemoteRepository;
use Symfony\Component\Finder\Finder;

$rootDir = __DIR__ . '/';
$sourceRootDir = $rootDir . 'sources/tcpdf';

$iterator = Finder::create()
    ->files()
    ->name('tcpdf.php')
    ->name('tcpdf_*.php')
    ->in($sourceRootDir);

return new Doctum($iterator, [
    'title'                => 'TCPDF',
    'build_dir'            => $rootDir . '/tcpdf',
    'cache_dir'            => $rootDir . '/cache',
    'source_dir'           => $rootDir,
    'remote_repository'    => new GitHubRemoteRepository('tecnickcom/TCPDF', $sourceRootDir),
    'footer_link'          => [
        'href'        => 'https://github.com/tecnickcom/TCPDF#readme',
        'rel'         => 'noreferrer noopener',
        'target'      => '_blank',
        'before_text' => 'This documentation is built for the',
        'link_text'   => 'TCPDF',
        'after_text'  => 'project.',
    ],
]);
