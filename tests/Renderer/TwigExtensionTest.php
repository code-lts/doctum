<?php

declare(strict_types = 1);

namespace Doctum\Tests\Renderer;

use Doctum\Reflection\FunctionReflection;
use Doctum\Renderer\TwigExtension;
use Doctum\Tests\AbstractTestCase;

class TwigExtensionTest extends AbstractTestCase
{

    /**
     * @return array[]
     */
    public function dataProviderParseDesc(): array
    {
        return [
            [
                '<p>text</p>',
                '<p>text</p>'
            ],
            [
                '<p><p>text</p></p>',
                '<p><p>text</p></p>'
            ],
            [
                '# H1' . "\n"
                . 'Some text' . "\n"
                . '## H2' . "\n"
                . 'Some text h2' . "\n",
                '<h1>H1</h1>' . "\n"
                . '<p>Some text</p>' . "\n"
                . '<h2>H2</h2>' . "\n"
                . '<p>Some text h2</p>',
            ],
            [
                '# H1' . "\n"
                . 'Some text' . "\n"
                . '## H2' . "\n"
                . 'Some text h2' . "\n"
                . '[malicious link](https://example.com)' . "\n",
                '<h1>H1</h1>' . "\n"
                . '<p>Some text</p>' . "\n"
                . '<h2>H2</h2>' . "\n"
                . '<p>Some text h2' . "\n"
                . '<a href="https://example.com">malicious link</a></p>',
            ],
            [
                '# H1' . "\n"
                . 'Some text' . "\n"
                . '## H2' . "\n"
                . 'Some text h2' . "\n"
                . '[malicious link](https://example.com)' . "\n"
                . '<script>alert(1);</script>' . "\n",
                '<h1>H1</h1>' . "\n"
                . '<p>Some text</p>' . "\n"
                . '<h2>H2</h2>' . "\n"
                . '<p>Some text h2' . "\n"
                . '<a href="https://example.com">malicious link</a></p>' . "\n"
                . '<script>alert(1);</script>',
            ],
            [
                '<b>PDO::prepare</b> returns a'
                    . '<b>PDOStatement</b> object.' . "\n"
                    . 'If the database server cannot successfully prepare the statement,' . "\n"
                    . '<b>PDO::prepare</b> returns <b>FALSE</b> or emits' . "\n"
                    . '<b>PDOException</b> (depending on error handling).' . "\n"
                    . '</p>' . "\n"
                    . '<p>' . "\n"
                    . 'Emulated prepared statements does not communicate with the database server' . "\n"
                    . 'so <b>PDO::prepare</b> does not check the statement.',
                '<p><b>PDO::prepare</b> returns a'
                    . '<b>PDOStatement</b> object.' . "\n"
                    . 'If the database server cannot successfully prepare the statement,' . "\n"
                    . '<b>PDO::prepare</b> returns <b>FALSE</b> or emits' . "\n"
                    . '<b>PDOException</b> (depending on error handling).' . "\n"
                    . '</p></p>' . "\n"
                    . '<p>' . "\n"
                    . 'Emulated prepared statements does not communicate with the database server' . "\n"
                    . 'so <b>PDO::prepare</b> does not check the statement.'
            ]
        ];
    }

    /**
     * @dataProvider dataProviderParseDesc
     */
    public function testParseDesc(string $intput, string $expectedOutput): void
    {
        $extension = new TwigExtension();
        $this->assertSame(
            $expectedOutput,
            $extension->parseDesc(
                [],
                $intput,
                new FunctionReflection('', 0)
            )
        );
    }

}
