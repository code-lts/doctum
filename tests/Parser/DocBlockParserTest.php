<?php

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
use Doctum\Parser\DocBlockParser;
use Doctum\Parser\Node\DocBlockNode;

class DocBlockParserTest extends TestCase
{
    /**
     * @dataProvider getParseTests
     */
    public function testParse($comment, $expected)
    {
        $parser = new DocBlockParser();

        $this->assertEquals($this->createDocblock($expected), $parser->parse($comment));
    }

    /**
     * @dataProvider getParseTestsphp7dot1plus
     * @requires PHP >=7.2
     */
    public function testParse7dot1plus(string $comment, array $expected): void
    {
        $parser = new DocBlockParser();

        $this->assertEquals($this->createDocblock($expected), $parser->parse($comment));
    }

    public function getParseTests()
    {
        return [
            [
                '
                /**
                 */
                ',
                [],
            ],
            [
                '
                /**
                 * The short desc.
                 */
                ',
                ['shortdesc' => 'The short desc.'],
            ],
            [
                '/** The short desc. */',
                ['shortdesc' => 'The short desc.'],
            ],
            [
                '
                /**
                 * The short desc on two
                 * lines.
                 */
                ',
                ['shortdesc' => "The short desc on two\nlines."],
            ],
            [
                '
                /**
                 * The short desc.
                 *
                 * And a long desc.
                 */
                ',
                ['shortdesc' => 'The short desc.', 'longdesc' => 'And a long desc.'],
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
                ['shortdesc' => "The short desc on two\nlines.", 'longdesc' => "And a long desc on\nseveral lines too.\n\nWith another paragraph."],
            ],
            [
                '
                /**
                 * The short desc with a @tag embedded. And the short desc continues after dot on same line.
                 */
                ',
                ['shortdesc' => 'The short desc with a @tag embedded. And the short desc continues after dot on same line.'],
            ],
            [
                '
                /**
                 * @see http://symfony.com/ This is a link description.
                 */
                ',
                ['tags' => ['see' => [['http://symfony.com/ This is a link description.', 'http://symfony.com/', 'This is a link description.']]]],
            ],
            [
                '
                /**
                 * @author fabien@example.com
                 */
                ',
                ['tags' => ['author' => 'fabien@example.com']],
            ],
            [
                '
                /**
                 * @author Fabien <fabien@example.com>
                 * @author Thomas <thomas@example.com>
                 */
                ',
                ['tags' => ['author' => ['Fabien <fabien@example.com>', 'Thomas <thomas@example.com>']]],
            ],
            [
                '
                /**
                 * @var SingleClass|\MultipleClass[] Property Description
                 */
                ',
                [
                    'tags' => [
                        'var' => [ // Array from found tags.
                            [ // First found tag.
                                [['\SingleClass', false], ['\MultipleClass', true]], // Array from data types.
                                'Property Description',
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
            ],
            [
                '
                /**
                 * @throws SingleClass1 Exception Description One
                 * @throws SingleClass2 Exception Description Two
                 */
                ',
                [
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
            ],
            [
                '
                /**
                 * @return SingleClass|\MultipleClass[] Return Description
                 */
                ',
                [
                    'tags' => [
                        'return' => [ // Array from found tags.
                            [ // First found tag.
                                [['\SingleClass', false], ['\MultipleClass', true]], // Array from data types.
                                'Return Description',
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
                    'shortDesc' => '',
                    'longDesc' => '',
                    'tags' => [
                        'author' => ['Author Name'],
                        'covers' => ['\SomeClass::SomeMethod '],
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
                        'version' => ['1.0.1 '],
                        'unknown' => ['any text'],
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
                [
                    'shortDesc' => 'Saves the display field for a table.',
                    'longDesc' => '',
                    'tags' => [
                        'param' => [
                            [
                                [
                                    [
                                        'string',
                                        false
                                    ]
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
                                ''
                            ],
                        ]
                    ],
                ]
            ]
        ];
    }

    public function getParseTestsphp7dot1plus(): array
    {
        return [
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
                [
                    'shortDesc' => "Prepares queries for adding users and\nalso create database and return query and message",
                    'longDesc' => '',
                    'tags' => [
                        'param' => [
                            [
                                [
                                    [
                                        'bool',
                                        false
                                    ]
                                ],
                                '_error',
                                'whether user create or not',
                            ],
                            [
                                [
                                    [
                                        'string',
                                        false
                                    ]
                                ],
                                'real_sql_query',
                                'SQL query for add a user',
                            ],
                        ],
                        'return' => [
                            'array, $message',
                        ]
                    ],
                ],
            ],
        ];
    }

    private function createDocblock(array $elements)
    {
        $docblock = new DocBlockNode();
        foreach ($elements as $key => $value) {
            switch ($key) {
                case 'tags':
                    foreach ($value as $tag => $value) {
                        if (!is_array($value)) {
                            $value = [$value];
                        }
                        foreach ($value as $v) {
                            $docblock->addTag($tag, $v);
                        }
                    }
                    break;
                default:
                    $method = 'set' . $key;
                    $docblock->$method($value);
            }
        }

        return $docblock;
    }
}
