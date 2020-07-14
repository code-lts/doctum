<?php
$srcRoot = __DIR__ . '/..';
$buildRoot = __DIR__ . '/../build';

$phar = new Phar(
    $buildRoot . "/doctum.phar",
    FilesystemIterator::CURRENT_AS_FILEINFO | FilesystemIterator::KEY_AS_FILENAME,
    "doctum.phar"
);
$phar->buildFromDirectory($srcRoot,'/.php$/');

$phar->setStub($phar->createDefaultStub(__DIR__ . "/../bin/doctum.php"));

/*{
    files: {
        {
            name: relativepath
            sha256: rrgreogkeorgkerogkerogkerogkeorgk
        },...
    },
    sha256: fiefoeofkeofk (du phar)
} manifest.json */