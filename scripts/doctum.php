<?php

use Doctum\Doctum;
use Doctum\RemoteRepository\GitHubRemoteRepository;
use Symfony\Component\Finder\Finder;

$dir      = (string) realpath(__DIR__ . '/../src');
$iterator = Finder::create()
    ->files()
    ->name('*.php')
    ->in($dir);

return new Doctum(
    $iterator,
    [
    'title'                => 'Doctum',
    'build_dir'            => '/tmp/doctum-build',
    'cache_dir'            => '/tmp/doctum-cache',
    'remote_repository'    => new GitHubRemoteRepository('code-lts/doctum', realpath($dir . '/../')),
    ]
);
