<?php

/*
 * This file is part of the Doctum utility.
 *
 * (c) Fabien Potencier <fabien@symfony.com>
 *
 * This source file is subject to the MIT license that is bundled
 * with this source code in the file LICENSE.
 */

namespace Doctum\Tests\Parser\ClassVisitor;

use PHPUnit\Framework\TestCase;
use Doctum\Parser\ClassVisitor\PropertyClassVisitor;
use Doctum\Parser\ParserContext;
use Doctum\Reflection\ClassReflection;

class PropertyClassVisitorTest extends TestCase
{
    /**
     * @requires PHP <8
     */
    public function testAddsProperties()
    {
        $class = $this->getMockBuilder(ClassReflection::class)
            ->setMethods(['getTags'])
            ->setConstructorArgs(['Mock', 1])
            ->getMock();

        $property = [
            [
                [],
                'animal',
                'Your favourite animal',
            ],
            [
                [
                    'string',
                    null,
                ],
                'color',
                'Your favourite color',
            ],
            [
                [],
                'enigma',
                null,
            ],
        ];
        $class->expects($this->any())->method('getTags')->with($this->equalTo('property'))->will($this->returnValue($property));

        $context = $this->getMockBuilder(ParserContext::class)->disableOriginalConstructor()->getMock();

        $visitor = new PropertyClassVisitor($context);
        $visitor->visit($class);

        $this->assertArrayHasKey('color', $class->getProperties());
        $this->assertArrayHasKey('animal', $class->getProperties());
        $this->assertArrayHasKey('enigma', $class->getProperties());
    }
}
