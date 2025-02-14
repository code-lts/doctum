<?php

declare(strict_types = 1);

/*
 * This file is part of the Doctum utility.
 *
 * (c) Fabien Potencier <fabien@symfony.com>
 *
 * This source file is subject to the MIT license that is bundled
 * with this source code in the file LICENSE.
 */

namespace Doctum\Tests\Parser;

use PHPUnit\Framework\TestCase;
use Doctum\Parser\ParserContext;
use Doctum\Parser\DocBlockParser;
use Doctum\Parser\Filter\TrueFilter;
use Doctum\Parser\Node\DocBlockNode;
use PhpParser\PrettyPrinter\Standard;

class DocBlockParserTest extends TestCase
{
    private const NAMESPACE = '\\Foobar\\';
    private const ALIASES   = [
        'SingleClass' => '\\Foo\\Bar\\Baz',
        'SingleClass2' => '\\Foo\\Bar\\SingleClass2',
        'SomeClass' => '\\Foo\\SomeClass',
    ];

    /**
     * @dataProvider getParseTests
     */
    #[\PHPUnit\Framework\Attributes\DataProvider('getParseTests')]
    public function testParse(string $comment, array $expected): void
    {
        $parser   = new DocBlockParser();
        $expected = isset($expected['pure']) ? $expected['pure'] : $expected[0];
        $this->assertEquals($this->createDocblock($expected), $parser->parse($comment, $this->getContextMock()));
    }

    /**
     * @dataProvider getParseTests
     */
    #[\PHPUnit\Framework\Attributes\DataProvider('getParseTests')]
    public function testParseWithNamespace(string $comment, array $expected): void
    {
        $parser   = new DocBlockParser();
        $expected = isset($expected['namespace']) ? $expected['namespace'] : $expected[0];
        $this->assertEquals($this->createDocblock($expected), $parser->parse($comment, $this->getContextMock(self::NAMESPACE)));
    }

    /**
     * @dataProvider getParseTests
     */
    #[\PHPUnit\Framework\Attributes\DataProvider('getParseTests')]
    public function testParseWithAliases(string $comment, array $expected): void
    {
        $parser   = new DocBlockParser();
        $expected = isset($expected['namespaceAndAlias']) ? $expected['namespaceAndAlias'] : $expected[0];
        $this->assertEquals(
            $this->createDocblock($expected),
            $parser->parse(
                $comment,
                $this->getContextMock(self::NAMESPACE, self::ALIASES)
            )
        );
    }

    public static function getParseTests(): array
    {
        return [
            [
                '
                /**
                 */
                ',
                [[]],
            ],
            [
                '
                /**
                 * The short desc.
                 */
                ',
                [['shortdesc' => 'The short desc.']],
            ],
            [
                '/** The short desc. */',
                [['shortdesc' => 'The short desc.']],
            ],
            [
                '
                /**
                 * The short desc on two
                 * lines.
                 */
                ',
                [['shortdesc' => "The short desc on two\nlines."]],
            ],
            [
                '
                /**
                 * The short desc.
                 *
                 * And a long desc.
                 */
                ',
                [['shortdesc' => 'The short desc.', 'longdesc' => 'And a long desc.']],
            ],
            [
                '
                /**
                 * The short desc on two
                 * lines.
                 *
                 * And a long desc on
                 * several lines too.
                 *
                 * With another paragraph.
                 */
                ',
                [['shortdesc' => "The short desc on two\nlines.", 'longdesc' => "And a long desc on\nseveral lines too.\n\nWith another paragraph."]],
            ],
            [
                '
                /**
                 * The short desc with a @tag embedded. And the short desc continues after dot on same line.
                 */
                ',
                [['shortdesc' => 'The short desc with a @tag embedded. And the short desc continues after dot on same line.']],
            ],
            [
                '
                /**
                 * @see http://symfony.com/ This is a link description.
                 */
                ',
                [['tags' => ['see' => [['http://symfony.com/ This is a link description.', 'http://symfony.com/', 'This is a link description.']]]]],
            ],
            [
                '
                /**
                 * @author fabien@example.com
                 */
                ',
                [['tags' => ['author' => 'fabien@example.com']]],
            ],
            [
                '
                /**
                 * @author Fabien <fabien@example.com>
                 * @author Thomas <thomas@example.com>
                 */
                ',
                [['tags' => ['author' => ['Fabien <fabien@example.com>', 'Thomas <thomas@example.com>']]]],
            ],
            [
                '
                /**
                 * @var SingleClass|\MultipleClass[] Property Description
                 */
                ',
                [
                    'pure' => [
                        'tags' => [
                            'var' => [ // Array from found tags.
                                [ // First found tag.
                                    [['\SingleClass', false], ['\MultipleClass', true]], // Array from data types.
                                    'Property Description',
                                ],
                            ],
                        ],
                    ],
                    'namespace' => [
                        'tags' => [
                            'var' => [ // Array from found tags.
                                [ // First found tag.
                                    [[self::NAMESPACE . 'SingleClass', false], ['\MultipleClass', true]], // Array from data types.
                                    'Property Description',
                                ],
                            ],
                        ],
                    ],
                    'namespaceAndAlias' => [
                        'tags' => [
                            'var' => [ // Array from found tags.
                                [ // First found tag.
                                    [[self::ALIASES['SingleClass'], false], ['\MultipleClass', true]], // Array from data types.
                                    'Property Description',
                                ],
                            ],
                        ],
                    ],
                ],
            ],
            [
                '
                /**
                 * @param SingleClass|\MultipleClass[] $paramName Param Description
                 */
                ',
                [
                    'pure' => [
                        'shortDesc' => '',
                        'longDesc' => '',
                        'tags' => [
                            'param' => [ // Array from found tags.
                                [ // First found tag.
                                    [['\SingleClass', false], ['\MultipleClass', true]], // Array from data types.
                                    'paramName',
                                    'Param Description',
                                ],
                            ],
                        ],
                    ],
                    'namespace' => [
                        'shortDesc' => '',
                        'longDesc' => '',
                        'tags' => [
                            'param' => [ // Array from found tags.
                                [ // First found tag.
                                    [[self::NAMESPACE . 'SingleClass', false], ['\MultipleClass', true]], // Array from data types.
                                    'paramName',
                                    'Param Description',
                                ],
                            ],
                        ],
                    ],
                    'namespaceAndAlias' => [
                        'shortDesc' => '',
                        'longDesc' => '',
                        'tags' => [
                            'param' => [ // Array from found tags.
                                [ // First found tag.
                                    [[self::ALIASES['SingleClass'], false], ['\MultipleClass', true]], // Array from data types.
                                    'paramName',
                                    'Param Description',
                                ],
                            ],
                        ],
                    ],
                ],
            ],
            [
                '
                /**
                 * @throws SingleClass1 Exception Description One
                 * @throws SingleClass2 Exception Description Two
                 */
                ',
                [
                    'pure' => [
                        'shortDesc' => '',
                        'longDesc' => '',
                        'tags' => [
                            'throws' => [ // Array from found tags.
                                [ // First found tag.
                                    '\SingleClass1',
                                    'Exception Description One',
                                ],
                                [ // Second found tag.
                                    '\SingleClass2',
                                    'Exception Description Two',
                                ],
                            ],
                        ],
                    ],
                    'namespace' => [
                        'shortDesc' => '',
                        'longDesc' => '',
                        'tags' => [
                            'throws' => [ // Array from found tags.
                                [ // First found tag.
                                    self::NAMESPACE . 'SingleClass1',
                                    'Exception Description One',
                                ],
                                [ // Second found tag.
                                    self::NAMESPACE . 'SingleClass2',
                                    'Exception Description Two',
                                ],
                            ],
                        ],
                    ],
                    'namespaceAndAlias' => [
                        'shortDesc' => '',
                        'longDesc' => '',
                        'tags' => [
                            'throws' => [ // Array from found tags.
                                [ // First found tag.
                                    self::NAMESPACE . 'SingleClass1',
                                    'Exception Description One',
                                ],
                                [ // Second found tag.
                                    self::ALIASES['SingleClass2'],
                                    'Exception Description Two',
                                ],
                            ],
                        ],
                    ],
                ],
            ],
            [
                '
                /**
                 * @throws \InvalidArgumentException.
                 * @throws \Drupal\Component\Plugin\Exception\InvalidPluginDefinitionException.
                 */
                ',
                [
                    [
                        'shortDesc' => '',
                        'longDesc' => '',
                        'tags' => [
                            'throws' => [
                                '\InvalidArgumentException.',
                                '\Drupal\Component\Plugin\Exception\InvalidPluginDefinitionException.',
                            ],
                        ],
                    ],
                ],
            ],
            [
                '
                /**
                 * @return SingleClass|\MultipleClass[] Return Description
                 */
                ',
                [
                    'pure' => [
                        'tags' => [
                            'return' => [ // Array from found tags.
                                [ // First found tag.
                                    [['\SingleClass', false], ['\MultipleClass', true]], // Array from data types.
                                    'Return Description',
                                ],
                            ],
                        ],
                    ],
                    'namespace' => [
                        'tags' => [
                            'return' => [ // Array from found tags.
                                [ // First found tag.
                                    [[self::NAMESPACE . 'SingleClass', false], ['\MultipleClass', true]], // Array from data types.
                                    'Return Description',
                                ],
                            ],
                        ],
                    ],
                    'namespaceAndAlias' => [
                        'tags' => [
                            'return' => [ // Array from found tags.
                                [ // First found tag.
                                    [[self::ALIASES['SingleClass'], false], ['\MultipleClass', true]], // Array from data types.
                                    'Return Description',
                                ],
                            ],
                        ],
                    ],
                ],
            ],
            [
                '
               /**
                * @author Author Name
                * @covers SomeClass::SomeMethod
                * @deprecated 1.0 for ever
                * @todo Something needs to be done
                * @example Description
                * @link http://www.google.com
                * @method void setInteger(integer $integer)
                * @property-read string $myProperty
                * @property string $myProperty
                * @property-write string $myProperty
                * @see SomeClass::SomeMethod This is a description.
                * @since 1.0.1 First time this was introduced.
                * @source 2 1 Check that ensures lazy counting.
                * @uses MyClass::$items to retrieve the count from.
                * @version 1.0.1
                * @unknown any text
                */
               ',
                [
                    'pure' => [
                        'shortDesc' => '',
                        'longDesc' => '',
                        'tags' => [
                            'author' => ['Author Name'],
                            'covers' => ['\SomeClass::SomeMethod'],
                            'deprecated' => ['1.0 for ever'],
                            'todo' => ['Something needs to be done'],
                            'example' => ['Description'],
                            'link' => ['http://www.google.com'],
                            'method' => ['void setInteger(int $integer)'],
                            'property-read' => [   // array of all properties
                                [                  // array of one property
                                    [              // array of all typehints of one property
                                        [          // array of one typehint
                                            'string',   // the typehint
                                            null,       // whether or not the typehint is an array
                                        ],
                                    ],
                                    'myProperty',       // property name
                                    '',                  // property description
                                ],
                            ],
                            'property' => [        // see above
                                [
                                    [
                                        [
                                            'string',
                                            null,
                                        ],
                                    ],
                                    'myProperty',
                                    '',
                                ],
                            ],
                            'property-write' => [  // see above
                                [
                                    [
                                        [
                                            'string',
                                            null,
                                        ],
                                    ],
                                    'myProperty',
                                    '',
                                ],
                            ],
                            'see' => [['\SomeClass::SomeMethod This is a description.', '\SomeClass::SomeMethod', 'This is a description.']],
                            'since' => ['1.0.1 First time this was introduced.'],
                            'source' => ['2 1 Check that ensures lazy counting.'],
                            'uses' => ['\MyClass::$items to retrieve the count from.'],
                            'version' => ['1.0.1'],
                            'unknown' => ['any text'],
                        ],
                    ],
                    'namespace' => [
                        'shortDesc' => '',
                        'longDesc' => '',
                        'tags' => [
                            'author' => ['Author Name'],
                            'covers' => [self::NAMESPACE . 'SomeClass::SomeMethod'],
                            'deprecated' => ['1.0 for ever'],
                            'todo' => ['Something needs to be done'],
                            'example' => ['Description'],
                            'link' => ['http://www.google.com'],
                            'method' => ['void setInteger(int $integer)'],
                            'property-read' => [   // array of all properties
                                [                  // array of one property
                                    [              // array of all typehints of one property
                                        [          // array of one typehint
                                            'string',   // the typehint
                                            null,       // whether or not the typehint is an array
                                        ],
                                    ],
                                    'myProperty',       // property name
                                    '',                  // property description
                                ],
                            ],
                            'property' => [        // see above
                                [
                                    [
                                        [
                                            'string',
                                            null,
                                        ],
                                    ],
                                    'myProperty',
                                    '',
                                ],
                            ],
                            'property-write' => [  // see above
                                [
                                    [
                                        [
                                            'string',
                                            null,
                                        ],
                                    ],
                                    'myProperty',
                                    '',
                                ],
                            ],
                            'see' => [
                                [
                                    self::NAMESPACE . 'SomeClass::SomeMethod This is a description.',
                                    self::NAMESPACE . 'SomeClass::SomeMethod', 'This is a description.',
                                ],
                            ],
                            'since' => ['1.0.1 First time this was introduced.'],
                            'source' => ['2 1 Check that ensures lazy counting.'],
                            'uses' => [self::NAMESPACE . 'MyClass::$items to retrieve the count from.'],
                            'version' => ['1.0.1'],
                            'unknown' => ['any text'],
                        ],
                    ],
                    'namespaceAndAlias' => [
                        'shortDesc' => '',
                        'longDesc' => '',
                        'tags' => [
                            'author' => ['Author Name'],
                            'covers' => [self::ALIASES['SomeClass'] . '::SomeMethod'],
                            'deprecated' => ['1.0 for ever'],
                            'todo' => ['Something needs to be done'],
                            'example' => ['Description'],
                            'link' => ['http://www.google.com'],
                            'method' => ['void setInteger(int $integer)'],
                            'property-read' => [   // array of all properties
                                [                  // array of one property
                                    [              // array of all typehints of one property
                                        [          // array of one typehint
                                            'string',   // the typehint
                                            null,       // whether or not the typehint is an array
                                        ],
                                    ],
                                    'myProperty',       // property name
                                    '',                  // property description
                                ],
                            ],
                            'property' => [        // see above
                                [
                                    [
                                        [
                                            'string',
                                            null,
                                        ],
                                    ],
                                    'myProperty',
                                    '',
                                ],
                            ],
                            'property-write' => [  // see above
                                [
                                    [
                                        [
                                            'string',
                                            null,
                                        ],
                                    ],
                                    'myProperty',
                                    '',
                                ],
                            ],
                            'see' => [[
                                self::ALIASES['SomeClass'] . '::SomeMethod This is a description.',
                                self::ALIASES['SomeClass'] . '::SomeMethod',
                                'This is a description.',
                            ]],
                            'since' => ['1.0.1 First time this was introduced.'],
                            'source' => ['2 1 Check that ensures lazy counting.'],
                            'uses' => [self::NAMESPACE . 'MyClass::$items to retrieve the count from.'],
                            'version' => ['1.0.1'],
                            'unknown' => ['any text'],
                        ],
                    ],
                ],
            ],
            [
                '
              /**
                * Saves the display field for a table.
                *
                * @param string $db    database name
                *
                * @return array<int,string>
                */',
                [[
                    'shortDesc' => 'Saves the display field for a table.',
                    'longDesc' => '',
                    'tags' => [
                        'param' => [
                            [
                                [
                                    [
                                        'string',
                                        false,
                                    ],
                                ],
                                'db',
                                'database name',
                            ],
                        ],
                        'return' => [
                            [
                                [
                                    [
                                        'array<int,string>',
                                        false,
                                    ],
                                ],
                                '',
                            ],
                        ],
                    ],
                ]],
            ],
            [
                '/**
         * Prepares queries for adding users and
         * also create database and return query and message
         *
         * @param boolean $_error               whether user create or not
         * @param string  $real_sql_query       SQL query for add a user
         *
         * @return array, $message
         */',
                [[
                    'shortDesc' => "Prepares queries for adding users and\nalso create database and return query and message",
                    'longDesc' => '',
                    'tags' => [
                        'param' => [
                            [
                                [
                                    [
                                        'bool',
                                        false,
                                    ],
                                ],
                                '_error',
                                'whether user create or not',
                            ],
                            [
                                [
                                    [
                                        'string',
                                        false,
                                    ],
                                ],
                                'real_sql_query',
                                'SQL query for add a user',
                            ],
                        ],
                        'return' => [
                            'array, $message',
                        ],
                    ],
                ]],
            ],
        ];
    }

    /**
     * @param array[] $value
     */
    private function addDocblockForTags(DocBlockNode $docblock, array $value): DocBlockNode
    {
        foreach ($value as $tag => $value) {
            if (!is_array($value)) {
                $value = [$value];
            }
            foreach ($value as $v) {
                $docblock->addTag($tag, $v);
            }
        }
        return $docblock;
    }

    private function createDocblock(array $elements): DocBlockNode
    {
        $docblock = new DocBlockNode();
        foreach ($elements as $key => $value) {
            switch ($key) {
                case 'tags':
                    $docblock = $this->addDocblockForTags($docblock, $value);
                    break;
                case 'errors':
                    foreach ($value as $value) {
                        $docblock->addError($value);
                    }
                    break;
                default:
                    $method = 'set' . $key;
                    $docblock->$method($value);
            }
        }

        return $docblock;
    }

    private function getContextMock(string $namespace = '', array $aliases = []): ParserContext
    {
        $parserContext = new ParserContext(new TrueFilter(), new DocBlockParser(), new Standard());
        $parserContext->enterNamespace($namespace);
        foreach ($aliases as $aliasKey => $alias) {
            $parserContext->addAlias($aliasKey, $alias);
        }
        return $parserContext;
    }

}
