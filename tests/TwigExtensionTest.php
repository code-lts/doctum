<?php

namespace Doctum\Tests;

use Doctum\Project;
use Doctum\Reflection\ClassReflection;
use Doctum\Renderer\TwigExtension;
use Doctum\Store\JsonStore;
use PHPUnit\Framework\TestCase;

/**
 * @author William Desportes <williamdes@wdes.fr>
 */
class TwigExtensionTest extends TestCase
{
    /**
     * Test for abbrClass
     */
    public function testAbbrClassString(): void
    {
        $this->assertEquals('<abbr title="TumDoc\Parse">Parse</abbr>', TwigExtension::abbrClass('TumDoc\\Parse'));
        $this->assertEquals('Parse', TwigExtension::abbrClass('Parse'));
        $this->assertEquals('<abbr title="Parse">Parse</abbr>', TwigExtension::abbrClass('Parse', true));
        $this->assertEquals('array<int,string>[]', TwigExtension::abbrClass('array<int,string>[]'));
        $this->assertEquals(
            '<abbr title="array&lt;int,string&gt;[]">array&lt;int,string&gt;[]</abbr>',
            TwigExtension::abbrClass('array<int,string>[]', true)
        );
    }

    /**
     * Test for abbrClass
     */
    public function testAbbrClassFromClassReflection(): void
    {
        $this->assertEquals(
            '<abbr title="TumDoc\Parse">Parse</abbr>',
            TwigExtension::abbrClass(
                $this->getClassForName('TumDoc\Parse')
            )
        );
        $this->assertEquals(
            '<abbr title="TumDoc\Parse">Parse</abbr>',
            TwigExtension::abbrClass(
                $this->getClassForName('TumDoc\Parse'),
                true
            )
        );
        $this->assertEquals(
            '<abbr title="Parse">Parse</abbr>',
            TwigExtension::abbrClass(
                $this->getClassForName('Parse'),
                true
            )
        );
        $this->assertEquals(
            'stdClass',
            TwigExtension::abbrClass(
                $this->getClassForName('stdClass')
            )
        );
        $this->assertEquals(
            '<abbr title="stdClass">stdClass</abbr>',
            TwigExtension::abbrClass(
                $this->getClassForName('stdClass'),
                true
            )
        );
        $this->assertEquals(
            'stdClass',
            TwigExtension::abbrClass(
                $this->getClassForName('stdClass')
            )
        );
    }

    private function getClassForName(string $className): ClassReflection
    {
        $project = new Project(new JsonStore());
        return ClassReflection::fromArray(
            $project,
            [
                'name' => $className,
                'line' => 4,
                'short_desc' => 'Short desc',
                'long_desc' => 'Long desc',
                'hint' => '',
                'tags' => null,
                'namespace' => '',
                'hash' => null,
                'file' => null,
                'relative_file' => null,
                'modifiers' => null,
                'is_interface' => false,
                'is_trait' => false,
                'aliases' => [],
                'errors' => [],
                'parent' => null,
                'interfaces' => [],
                'constants' => [],
                'traits' => [],
                'methods' => [],
                'properties' => [],
            ]
        );
    }
}
