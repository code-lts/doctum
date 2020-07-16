<?php

declare(strict_types=1);

$srcRoot = __DIR__ . '/..';
$buildRoot = __DIR__ . '/../build';

if (file_exists($buildRoot . '/doctum.phar')) {
    echo 'The phar file should not exist' . PHP_EOL;
    exit(1);
}

if (! is_dir($buildRoot)) {
    mkdir($buildRoot);
}

$phar = new Phar(
    $buildRoot . '/doctum.phar',
    FilesystemIterator::CURRENT_AS_FILEINFO | FilesystemIterator::KEY_AS_FILENAME,
    'doctum.phar'
);

// Include src/*
// Include vendor/*.php
// Exclude vendor/*/*/tests
// Exclude vendor/*/*/test
// Include bin/*.php
// Exclude a lot of useless files
// Exclude src/Resources/themes/default/data

$pharFilesList = $phar->buildFromDirectory($srcRoot, '/((?!vendor\/[0-9A-Za-z-]+\/[0-9A-Za-z-]+\/(tests|test|CHANGELOG|\.travis\.yml|.*\.md|.*\.rst|\.editorconfig|phpunit\.xml|Makefile|phpbench\.json|\.php_cs\.dist|phive\.xml|phpstan\.neon|phpcs\.xml\.dist|phpunit\.xml\.dist|\.scrutinizer\.yml|drupal_test\.sh|\.gitattributes|\.gitignore|psalm\.xml|\.dependabot|\.github|psalm\.xml))(bin|vendor)\/.*)|((?!src\/Resources\/themes\/default\/data)src\/.*)$/');

$phar->setStub($phar->createDefaultStub(__DIR__ . '/../bin/doctum.php'));
$phar->setSignatureAlgorithm(Phar::SHA256);

$files = array_map(
    function (string $fileRelativePath) use ($pharFilesList) {
        return [
            'name' => $fileRelativePath,
            'sha256' => hash_file('sha256', $pharFilesList[$fileRelativePath]),
        ];
    },
    array_keys($pharFilesList)
);

$manifest = [
    'files' => $files,
    'phar' => [
        'sha256' => $phar->getSignature()['hash'],
        'numberOfFiles' => $phar->count(),
    ]
];

file_put_contents($buildRoot . '/manifest.json', json_encode($manifest, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES));
