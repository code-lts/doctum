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

namespace Doctum\Tests\Parser\ClassVisitor;

use PHPUnit\Framework\TestCase;
use Doctum\Parser\ClassVisitor\MethodClassVisitor;
use Doctum\Reflection\ClassReflection;

class MethodClassVisitorTest extends TestCase
{

    public function testAddsMethods(): void
    {
        $class    = $this->getMockBuilder(ClassReflection::class)
            ->onlyMethods(['getTags'])
            ->setConstructorArgs(['Mock', 1])
            ->getMock();
        $property = [
            explode(' ', 'string askQuestion() Ask 3 questions'),
        ];
        $class->expects($this->any())
            ->method('getTags')
            ->with($this->equalTo('method'))
            ->willReturn($property);

        $visitor = new MethodClassVisitor();
        /** @var ClassReflection $class */
        $visitor->visit($class);

        $this->assertArrayHasKey('askQuestion', $class->getMethods());
    }

}
