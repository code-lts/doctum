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
use Doctum\Parser\ClassVisitor\MethodClassVisitor;
use Doctum\Reflection\ClassReflection;

class MethodClassVisitorTest extends TestCase
{
    /**
     * @requires PHP <8
     */
    public function testAddsMethods()
    {
        $class = $this->getMockBuilder(ClassReflection::class)
            ->setMethods(['getTags'])
            ->setConstructorArgs(['Mock', 1])
            ->getMock();
        $property = [
            explode(' ', 'string askQuestion() Ask 3 questions'),
        ];
        $class->expects($this->any())
                ->method('getTags')
                ->with($this->equalTo('method'))
                ->will($this->returnValue($property));

        $visitor = new MethodClassVisitor();
        $visitor->visit($class);

        $this->assertArrayHasKey('askQuestion', $class->getMethods());
    }
}
