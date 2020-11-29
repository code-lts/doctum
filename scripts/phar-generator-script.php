<?php

declare(strict_types=1);

namespace Doctum;

use Phar;
use RecursiveDirectoryIterator;
use RecursiveIteratorIterator;
use RecursiveFilterIterator;
use FilesystemIterator;

$srcRoot = realpath(__DIR__ . '/..') . DIRECTORY_SEPARATOR;
$buildRoot = realpath(__DIR__ . '/../build');

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

$iterator = new RecursiveDirectoryIterator($srcRoot);
$iterator->setFlags(RecursiveDirectoryIterator::SKIP_DOTS);
final class PharFilterIterator extends RecursiveFilterIterator
{

    /**
     * @var string[]
     */
    private static $acceptedFiles = [];

    /**
     * @var string[]
     */
    private static $excludedFiles = [];

    /**
     * @var string[]
     */
    private static $excludedFolders = [];

    /**
     * @var string[]
     */
    private static $excludedFilesNames = [
        '.editorconfig',
        'easy-coding-standard.neon',
        '.travis.yml',
        'psalm.xml',
        '.coveralls.yml',
        'appveyor.yml',
        'phpunit.xml',
        'phive.xml',
        'Makefile',
        'phpbench.json',
        '.php_cs.dist',
        'psalm.xml',
        'phpstan.neon',
        'phpstan.neon',
        'phpcs.xml.dist',
        'phpunit.xml.dist',
        '.scrutinizer.yml',
        '.gitattributes',
        '.gitignore',
        '.env',
        'CHANGELOG',
        'README',
        'Readme.php',
        '.php_cs.cache',
        'makefile',
        '.phpunit.result.cache',
        'phpstan.neon.dist',
        'phpstan-baseline.neon',
        'composer.lock',
        'composer.json',
        'phpmd.xml.dist',
        '.travis.php.ini',
    ];

    /**
     * @var string[]
     */
    private static $excludedFilesExtensions = [
        'rst',
        'md',
        'po',
        'pot',
        'm4',
        'c',
        'h',
        'sh',
        'w32',
    ];

    /**
     * @var string[]
     */
    private static $excludedFolderNames = [
        'tests',
        'Tests',
        'test',
        '.dependabot',
        '.github',
        '.circleci',
        'examples',
    ];

    /**
     * @var string[]
     */
    private static $excludedFolderPaths = [
        'src/Resources/themes/default/data',
        'vendor/bin',
        'nikic/php-parser/bin',
        'scripts',
        '.git',
        'build',
    ];

    public function accept()
    {
        global $srcRoot;

        /** @var \SplFileInfo $current */
        $current = $this->current();

        $relativePath = str_replace($srcRoot, '', $current->getPathname());

        if ($current->isDir()) {
            $isExcludedFolderName = in_array($current->getBasename(), static::$excludedFolderNames);
            $isExcludedFolderPath = in_array($relativePath, static::$excludedFolderPaths);

            if ($isExcludedFolderName || $isExcludedFolderPath) {
                static::$excludedFolders[] = $relativePath;
                return false;
            }
            return true;
        }

        $isExcludedFile = in_array($current->getBasename(), static::$excludedFilesNames);
        $isExcludedExtension = in_array($current->getExtension(), static::$excludedFilesExtensions);

        if ($isExcludedFile || $isExcludedExtension) {
            static::$excludedFiles[] = $relativePath;
            return false;
        }


        static::$acceptedFiles[] = $relativePath;

        return true;
    }

    /**
     * @return string[]
     */
    public static function getAcceptedFiles(): array
    {
        return static::$acceptedFiles;
    }

    /**
     * @return string[]
     */
    public static function getExcludedFiles(): array
    {
        return static::$excludedFiles;
    }

    /**
     * @return string[]
     */
    public static function getExcludedFolders(): array
    {
        return static::$excludedFolders;
    }
}

$filter = new PharFilterIterator($iterator);

$pharFilesList = new RecursiveIteratorIterator($filter);

$phar->setStub($phar->createDefaultStub('bin/doctum-binary.php'));
$phar->setSignatureAlgorithm(Phar::SHA256);
$phar->buildFromIterator($pharFilesList, $srcRoot);

$files = array_map(
    function (string $fileRelativePath) {
        return [
            'name' => $fileRelativePath,
            'sha256' => hash_file('sha256', $fileRelativePath),
        ];
    },
    PharFilterIterator::getAcceptedFiles()
);

$manifest = [
    'files' => $files,
    'excludedFiles' => PharFilterIterator::getExcludedFiles(),
    'excludedFolders' => PharFilterIterator::getExcludedFolders(),
    'phar' => [
        'sha256' => $phar->getSignature()['hash'],
        'numberOfFiles' => $phar->count(),
    ]
];

file_put_contents($buildRoot . '/manifest.json', json_encode($manifest, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES));
