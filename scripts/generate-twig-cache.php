#!/usr/bin/env php
<?php

declare(strict_types = 1);

// phpcs:disable PSR12.Files.FileHeader.IncorrectOrder
/**
 * @license http://unlicense.org/UNLICENSE The UNLICENSE
 * @author William Desportes <williamdes@wdes.fr>
 */

$options = getopt(
    '',
    [
        'twig-cache-dir:',
        'twig-templates-dir:',
        'twig-templates-po-files:',
        'json-mapping:',
        'title:',
        'copyright:',
        'package-version:',
    ]
);

if (! (is_dir($options['twig-cache-dir']) || is_link($options['twig-cache-dir']) )) {
    echo $options['twig-cache-dir'] . ' is not a directory.' . PHP_EOL;
    exit(1);
} else {
    $options['twig-cache-dir'] = realpath($options['twig-cache-dir']) . DIRECTORY_SEPARATOR;
}

if (! (is_dir($options['twig-templates-dir']) || is_link($options['twig-templates-dir']) )) {
    echo $options['twig-templates-dir'] . ' is not a directory.' . PHP_EOL;
    exit(1);
}

if (empty($options['twig-templates-po-files'])) {
    echo $options['twig-templates-po-files'] . ' is empty.' . PHP_EOL;
    exit(1);
}

if (empty($options['title'])) {
    echo $options['title'] . ' is empty.' . PHP_EOL;
    exit(1);
}

if (empty($options['copyright'])) {
    echo $options['copyright'] . ' is empty.' . PHP_EOL;
    exit(1);
}

if (empty($options['package-version'])) {
    echo $options['package-version'] . ' is empty.' . PHP_EOL;
    exit(1);
}

require_once(__DIR__ . '/../vendor/autoload.php');

use Doctum\Renderer\TwigExtension;
use Wdes\phpI18nL10n\Twig\Extension\I18n as ExtensionI18n;
use Twig\Cache\FilesystemCache;
use Twig\Environment as TwigEnvironment;
use Twig\Loader\FilesystemLoader as TwigLoaderFilesystem;

$shortTempDir = $options['twig-templates-po-files'];
$jsonMaping   = $options['json-mapping'];
$templateDir  = realpath($options['twig-templates-dir']) . DIRECTORY_SEPARATOR;

$loader = new TwigLoaderFilesystem([ $templateDir ]); // Load all templates from the dir
$cache  = new FilesystemCache($options['twig-cache-dir']);
$twig   = new TwigEnvironment(
    $loader,
    [
    'cache' => $cache
    ]
);
$twig->addExtension(new TwigExtension());
$twig->addExtension(new ExtensionI18n());

$mappings               = new stdClass();
$mappings->mappings     = [];
$mappings->replacements = [];

$license = new stdClass();

$license->from            = 'This file is distributed under the same';
$license->from           .= ' license as the PACKAGE package.';
$license->to              = 'This file is distributed under the license http://unlicense.org/UNLICENSE';
$mappings->replacements[] = $license;

$license                  = new stdClass();
$license->from            = 'PACKAGE VERSION';
$license->to              = $options['package-version'];
$mappings->replacements[] = $license;

$firstauthor              = new stdClass();
$firstauthor->from        = 'FIRST AUTHOR <EMAIL@ADDRESS>, YEAR.';
$firstauthor->to          = $options['copyright'];
$mappings->replacements[] = $firstauthor;

$description              = new stdClass();
$description->from        = 'SOME DESCRIPTIVE TITLE';
$description->to          = $options['title'];
$mappings->replacements[] = $description;

$year                     = new stdClass();
$year->from               = '# Copyright (C) YEAR';
$year->to                 = '# Copyright (C) 2018-' . date('Y');
$mappings->replacements[] = $year;

$templates                = new stdClass();
$templates->from          = $options['twig-cache-dir'];
$templates->to            = '';
$mappings->replacements[] = $templates;

// iterate over all templates
$files = new RecursiveIteratorIterator(
    new RecursiveDirectoryIterator($templateDir),
    RecursiveIteratorIterator::LEAVES_ONLY
);
foreach ($files as $file) {
    // force twig to generate cache
    if ($file->isFile() && $file->getExtension() === 'twig') {
        $shortName = str_replace($templateDir, '', $file);
        $template  = $twig->loadTemplate($shortName);
        // Generate line map
        $cacheFile                                 = $cache->generateKey($shortName, $twig->getTemplateClass($shortName));
        $cacheFile                                 = str_replace($options['twig-cache-dir'], '', $cacheFile);
        $mappings->mappings[$cacheFile]            = new stdClass();
        $mappings->mappings[$cacheFile]->fileName  = $shortTempDir . $shortName;
        $mappings->mappings[$cacheFile]->debugInfo = $template->getDebugInfo();
    }
}
file_put_contents($jsonMaping, json_encode($mappings, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES));
