<?php

declare(strict_types = 1);

/*
 * This file is part of the Doctum utility.
 *
 * (c) William Desportes <williamdes@wdes.fr>
 *
 * This source file is subject to the MIT license that is bundled
 * with this source code in the file LICENSE.
 */

namespace Doctum\Tests\Parser;

use Symfony\Component\Finder\Finder;
use Doctum\Tests\AbstractTestCase;
use Doctum\Doctum;

class CodeParserTest extends AbstractTestCase
{

    public function testParseCode(): void
    {
        $dir      = __DIR__ . '/../phar/data';
        $iterator = Finder::create()
            ->files()
            ->name('*.php')
            ->in($dir . '/src');

        $doctum = new Doctum(
            $iterator,
            [
                'build_dir' => $dir . '/build',
                'cache_dir' => $dir . '/cache',
            ]
        );

        $codeParser = $this->callMethod($doctum, 'getCodeParser', []);
        foreach ($iterator as $file) {
            $fileContents = file_get_contents($file->getPathName());
            $this->assertIsString($fileContents);
            //echo 'parsing: ' . $file->getPathName() . PHP_EOL;
            $codeParser->parse($fileContents);
            //var_dump($codeParser->getContext()->getErrors());
        }
    }

}
