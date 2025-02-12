<?php

declare(strict_types = 1);

namespace Doctum\Tests\Reflection;

use Doctum\Reflection\ClassReflection;
use Doctum\Reflection\LazyClassReflection;
use Doctum\Reflection\MethodReflection;
use Doctum\Tests\AbstractTestCase;

class MethodReflectionTest extends AbstractTestCase
{

    public function testSetGetModifiers(): void
    {
        $method = new MethodReflection('foo', 0);
        $method->setModifiers(0);
        $this->assertTrue($method->isPublic());

        $method->setModifiers(MethodReflection::MODIFIER_PUBLIC);
        $this->assertTrue($method->isPublic());

        $method->setModifiers(MethodReflection::MODIFIER_PROTECTED);
        $this->assertTrue($method->isProtected());

        $method->setModifiers(MethodReflection::MODIFIER_PRIVATE);
        $this->assertTrue($method->isPrivate());

        $method->setModifiers(MethodReflection::MODIFIER_ABSTRACT);
        $this->assertTrue($method->isPublic());
        $this->assertTrue($method->isAbstract());
    }

    public function testGetExceptions(): void
    {
        $method          = new MethodReflection('foo', 0);
        $inputExceptions = [
            [
                '\\Illuminate\\Database\\Eloquent\\ModelNotFoundException',
                '',
            ],
            '\\Drupal\\Component\\Plugin\\Exception\\InvalidPluginDefinitionException',
        ];

        $method->setExceptions($inputExceptions);

        $class = new ClassReflection('FooClass', 0);
        $class->setProject(self::getProject());
        $method->setClass($class);
        $exceptions = $method->getExceptions();
        $this->assertArrayHasKey(0, $exceptions);
        $this->assertInstanceOf(LazyClassReflection::class, $exceptions[0][0]);
        $exceptions[0][0] = (string) $exceptions[0][0];// Force cast the class to a string (testing purpose)
        $this->assertArrayHasKey(1, $exceptions);
        $this->assertInstanceOf(LazyClassReflection::class, $exceptions[1][0]);
        $exceptions[1][0] = (string) $exceptions[1][0];// Force cast the class to a string (testing purpose)
        $this->assertEquals(
            [
                [
                    'Illuminate\\Database\\Eloquent\\ModelNotFoundException',
                    '',
                ],
                [
                    'Drupal\\Component\\Plugin\\Exception\\InvalidPluginDefinitionException',
                    '',
                ],
            ],
            $exceptions
        );
        $this->assertEquals($inputExceptions, $method->getRawExceptions());
    }

}
