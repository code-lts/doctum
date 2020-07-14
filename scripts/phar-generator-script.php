<?php

declare(strict_types=1);

$srcRoot = __DIR__ . '/..';
$buildRoot = __DIR__ . '/../build';

if (file_exists($buildRoot . '/doctum.phar')) {
    echo 'The phar file should not exist' . PHP_EOL;
    exit(1);
}

$phar = new Phar(
    $buildRoot . '/doctum.phar',
    FilesystemIterator::CURRENT_AS_FILEINFO | FilesystemIterator::KEY_AS_FILENAME,
    'doctum.phar'
);

$pharFilesList = $phar->buildFromDirectory($srcRoot, '/(src|bin|vendor)\/.*\.php$/');
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
