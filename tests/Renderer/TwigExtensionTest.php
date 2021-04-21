<?php

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
            ],
            [
                'Collects rows for insert into a database until the buffer size is reached.' . "\n"
                . ' Then flushes the buffer to the database and starts over again.' . "\n"
                . '' . "\n"
                . ' Benefits over collecting a (possibly huge) insert array and then using' . "\n"
                . ' $db->sql_multi_insert() include:' . "\n"
                . '' . "\n"
                . '  - Going over max packet size of the database connection is usually prevented' . "\n"
                . '    because the data is submitted in batches.' . "\n"
                . '' . "\n"
                . '  - Reaching database connection timeout is usually prevented because' . "\n"
                . '    submission of batches talks to the database every now and then.' . "\n"
                . '' . "\n"
                . '  - Usage of less PHP memory because data no longer needed is discarded on' . "\n"
                . '    buffer flush.' . "\n"
                . '' . "\n"
                . ' Attention:' . "\n"
                . ' Please note that users of this class have to call flush() to flush the' . "\n"
                . ' remaining rows to the database after their batch insert operation is' . "\n"
                . ' finished.' . "\n"
                . '' . "\n"
                . ' Usage:' . "\n"
                . ' <code>' . "\n"
                . '	$buffer = new \phpbb\db\sql_insert_buffer($db, \'test_table\', 1234);' . "\n"
                . '' . "\n"
                . '	while (do_stuff())' . "\n"
                . '	{' . "\n"
                . '		$buffer->insert(array(' . "\n"
                . '			\'column1\' => \'value1\',' . "\n"
                . '			\'column2\' => \'value2\',' . "\n"
                . '		));' . "\n"
                . '	}' . "\n"
                . '' . "\n"
                . '	$buffer->flush();' . "\n"
                . ' </code>' . "\n",
                '<p>Collects rows for insert into a database until the buffer size is reached.' . "\n"
                . 'Then flushes the buffer to the database and starts over again.</p>' . "\n"
                . ''
                . '<p>Benefits over collecting a (possibly huge) insert array and then using' . "\n"
                . '$db-&gt;sql_multi_insert() include:</p>' . "\n"
                . '<ul>' . "\n"
                . '<li>' . "\n"
                . '<p>Going over max packet size of the database connection is usually prevented' . "\n"
                . 'because the data is submitted in batches.</p>' . "\n"
                . '</li>' . "\n"
                . '<li>' . "\n"
                . '<p>Reaching database connection timeout is usually prevented because' . "\n"
                . 'submission of batches talks to the database every now and then.</p>' . "\n"
                . '</li>' . "\n"
                . '<li>' . "\n"
                . '<p>Usage of less PHP memory because data no longer needed is discarded on' . "\n"
                . 'buffer flush.</p>' . "\n"
                . ''
                . '<p>Attention:' . "\n"
                . 'Please note that users of this class have to call flush() to flush the' . "\n"
                . 'remaining rows to the database after their batch insert operation is' . "\n"
                . 'finished.</p>' . "\n"
                . ''
                . '<p>Usage:</p>' . "\n"
                . '<pre><code>'
                . '$buffer = new \phpbb\db\sql_insert_buffer($db, \'test_table\', 1234);' . "\n"
                . '' . "\n"
                . 'while (do_stuff())' . "\n"
                . '{' . "\n"
                . '    $buffer-&gt;insert(array(' . "\n"
                . '        \'column1\' =&gt; \'value1\',' . "\n"
                . '        \'column2\' =&gt; \'value2\',' . "\n"
                . '    ));' . "\n"
                . '}' . "\n"
                . '' . "\n"
                . '$buffer-&gt;flush();</code></pre>' . "\n"
                . '</li>' . "\n"
                . '</ul>'
            ],
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
