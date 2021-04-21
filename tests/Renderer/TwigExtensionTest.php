<?php

declare(strict_types = 1);

namespace Doctum\Tests\Renderer;

use Doctum\Reflection\ClassReflection;
use Doctum\Reflection\FunctionReflection;
use Doctum\Reflection\MethodReflection;
use Doctum\Reflection\Reflection;
use Doctum\Renderer\TwigExtension;
use Doctum\Tests\AbstractTestCase;

class TwigExtensionTest extends AbstractTestCase
{

    /**
     * @return array[]
     */
    public function dataProviderParseDesc(): array
    {
        $project = $this->getProject();
        $ref1    = new FunctionReflection('my_function', 0);
        $ref1->setProject($project);
        return [
            [
                '',
                ''
            ],
            [
                '<p>text</p>',
                '<p>text</p>'
            ],
            [
                '<p><p>text</p></p>',
                '<p><p>text</p></p>'
            ],
            [
                'Constructor. Set DB Object and set {@link $return_statements return_statements}.',
                '<p>Constructor. Set DB Object and set $return_statements return_statements.</p>'
            ],
            [
                'Constructor. Set DB Object and set {@link $return_statements return_statements}',
                '<p>Constructor. Set DB Object and set $return_statements return_statements</p>'
            ],
            [
                'Hi {@link \PDO}',
                '<p>Hi \PDO</p>'
            ],
            [
                'Hi {@link https://doctum.long-term.support}',
                '<p>Hi <a href="https://doctum.long-term.support">https://doctum.long-term.support</a></p>'
            ],
            [
                'Hi {@link \PDO}',
                '<p>Hi <a href="https://www.php.net/PDO">PDO</a></p>',
                $ref1
            ],
            [
                '@see \PDO',
                '<p>\PDO</p>'
            ],
            [
                '@see \PDO',
                '<p><a href="https://www.php.net/PDO">PDO</a></p>',
                $ref1
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
    public function testParseDesc(string $intput, string $expectedOutput, ?Reflection $ref = null): void
    {
        $extension = new TwigExtension();
        $this->assertSame(
            $expectedOutput,
            $extension->parseDesc(
                [],
                $intput,
                $ref === null ? new FunctionReflection('', 0) : $ref
            )
        );
    }

    /**
     * @return array[]
     */
    public function dataProviderTransformContentsIntoLinks(): array
    {
        $project = $this->getProject();
        $ref     = new FunctionReflection('', 0);
        $ref->setProject($project);
        $ref2 = new FunctionReflection('my_function', 0);
        $ref2->setProject($project);
        $ref3 = new ClassReflection('my_class_name', 0);
        $ref3->setProject($project);
        $ref4 = new ClassReflection('my_class', 0);
        $ref4->addMethod(new MethodReflection('myMethod', 0));
        $ref4->setProject($project);
        $project->addClass($ref4);
        return [
            [
                'https://doctum.long-term.support',
                'https://doctum.long-term.support',
                $ref
            ],
            [
                '\PDO',
                '[PDO](https://www.php.net/PDO)',
                $ref
            ],
            [
                'PDO',
                '[PDO](https://www.php.net/PDO)',
                $ref
            ],
            [
                '\Foo::methodName',
                '\Foo::methodName',
                $ref
            ],
            [
                'my_function',
                'my_function',
                $ref2
            ],
            [
                'my_class_name',
                'my_class_name',
                $ref3
            ],
            [
                'my_class',
                '[my_class](my_class.html)',
                $ref3
            ],
            [
                'my_class::myMethod',
                '[my_class::myMethod](my_class.html#method_myMethod)',
                $ref3
            ],
            [
                'myMethod',
                'myMethod',
                $ref3
            ],
            [
                'myMethod',
                '[myMethod](my_class.html#method_myMethod)',
                $ref4
            ],
            [
                'my_class::myMethod',
                'my_class::myMethod',
                new MethodReflection('myMethod', 0)
            ],
            [
                'my_class',
                'my_class',
                new ClassReflection('my_class', 0)
            ],
            [
                '$return_statements return_statements.',
                '$return_statements return_statements.',
                new ClassReflection('my_class', 0)
            ],
            [
                '$return_statements return_statements',
                '$return_statements return_statements',
                new ClassReflection('my_class', 0)
            ],
        ];
    }

    /**
     * @dataProvider dataProviderTransformContentsIntoLinks
     */
    public function testTransformContentsIntoLinks(string $intput, string $expectedOutput, Reflection $refl): void
    {
        $extension = new TwigExtension();
        $this->assertSame(
            $expectedOutput,
            $extension->transformContentsIntoLinks(
                $intput,
                $refl
            )
        );
    }

}
