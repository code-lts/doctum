#!/usr/bin/env php
<?php

declare(strict_types=1);

// phpcs:disable PSR12.Files.FileHeader.IncorrectOrder
/**
 * @license http://unlicense.org/UNLICENSE The UNLICENSE
 * @author William Desportes <williamdes@wdes.fr>
 */

$options = getopt(
    "",
    [
        "po-dir:",
        "po-template:",
        "json-mapping::",
    ]
);

if (! isset($options["po-dir"]) && ! isset($options["po-template"])) {
    echo "usage: update-po-files.php --po-dir po/directory --po-template path/to/file.pot" . PHP_EOL;
    exit(1);
}

if (! (is_dir($options["po-dir"]) || is_link($options["po-dir"]) )) {
    echo $options["po-dir"] . " is not a directory." . PHP_EOL;
    exit(1);
}

if (! is_file($options["po-template"])) {
    echo $options["po-template"] . " is not a file." . PHP_EOL;
    exit(1);
}

if (isset($options["json-mapping"])) {
    if (! is_file($options["json-mapping"])) {
        echo $options["json-mapping"] . " is not a file." . PHP_EOL;
        exit(1);
    }
}

$poDirectory = realpath($options["po-dir"]) . DIRECTORY_SEPARATOR;
$poTemplate  = $options["po-template"];
$template    = file_get_contents($poTemplate);

$mappings               = new stdClass();
$mappings->mappings     = [];
$mappings->replacements = [];

if (isset($options["json-mapping"])) {
    $mappings = json_decode(file_get_contents($options["json-mapping"]));
}


foreach ($mappings->replacements as $replacement) {
    $template = str_replace($replacement->from, $replacement->to, $template);
}

$parts         = explode('msgid ', $template);
$license_block = str_replace(", fuzzy", "", $parts[0]);

file_put_contents($poTemplate, $template);

/**
 * Update the copyright header of a po file
 *
 * @param string $po_file The po file path
 * @return void
 */
function poupdate(string $po_file): void
{
    global $mappings, $license_block;
    $pot_contents = file_get_contents($po_file);

    $parts        = explode('msgid ', $pot_contents);
    $pot_contents = str_replace($parts[0], $license_block, $pot_contents);

    // Replace filename by name
    $pot_contents = preg_replace_callback(
        '@([0-9a-f]{2}\/[0-9a-f]*.php):([0-9]*)@',
        function ($matchs) use ($mappings) {
            $line    = intval($matchs[2]);
            $replace = $mappings->mappings->{$matchs[1]};
            foreach ($replace->debugInfo as $cacheLineNumber => $iii) {
                if ($line >= $cacheLineNumber) {
                    return $replace->fileName . ':' . $iii;
                }
            }
            return $replace->fileName . ':0';
        },
        $pot_contents
    );
    file_put_contents($po_file, $pot_contents);
}

echo "PoDir: " . $poDirectory . "\r\n";
foreach (glob($poDirectory . "*.po") as $file) {
    exec("msgmerge --quiet --previous -U $file " . $poTemplate);
    echo "File: $file\r\n";
    poupdate($file);
}
poupdate($poTemplate);
