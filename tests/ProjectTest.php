<?php

declare(strict_types = 1);

namespace Doctum\Tests;

use Doctum\Project;
use Doctum\Reflection\ClassReflection;
use Doctum\Store\ArrayStore;
use Doctum\Version\Version;

class ProjectTest extends AbstractTestCase
{

    public function testSwitchVersion(): void
    {
        // Dummy store and classes
        $class1 = new ClassReflection('C1', 1);
        $class2 = new ClassReflection('C21\\C2', 1);
        $class3 = new ClassReflection('C31\\C32\\C3', 1);
        $class2->setNamespace('C21');
        $class3->setNamespace('C31\\C32');
        $store = new ArrayStore();
        $store->setClasses([$class1, $class2, $class3]);
        $project = new Project($store);

        // Load version 1
        $project->switchVersion(new Version('1'), null, true);

        $project->loadClass('C1');
        $project->loadClass('C21\\C2');

        $this->assertEquals(
            [
                'C1' => $class1,
                'C21\\C2' => $class2,
            ],
            $project->getProjectClasses()
        );

        // Load version 2
        $project->switchVersion(new Version('2'), null, true);
        $project->loadClass($class2->__toString());
        $project->loadClass($class3->__toString());

        $this->assertEquals(
            [
                'C21\\C2' => $class2,
                'C31\\C32\\C3' => $class3,
            ],
            $project->getProjectClasses()
        );
    }

    public function testHasFooterLink(): void
    {
        $project = self::getProject();

        $this->assertFalse($project->hasFooterLink());

        $project = self::getProject(
            [
            'footer_link' => [
                'href'        => 'https://github.com/code-lts/doctum',
                'rel'         => 'noreferrer noopener',
                'target'      => '_blank',
                'before_text' => 'You can edit the configuration',
                'link_text'   => 'on this', // Required if the href key is set
                'after_text'  => 'repository',
            ],
            ]
        );

        $this->assertTrue($project->hasFooterLink());

        $project = self::getProject(
            [
            'footer_link'          => [],
            ]
        );

        $this->assertTrue($project->hasFooterLink());

        $project = self::getProject(
            [
            'footer_link'          => null,
            ]
        );

        $this->assertFalse($project->hasFooterLink());

        $project = self::getProject(
            [
            'footer_link'          => 'https://example.com',
            ]
        );

        $this->assertFalse($project->hasFooterLink());
    }

    public function testGetFooterLink(): void
    {
        $project = self::getProject();

        $this->assertSame(
            $project->getFooterLink(),
            [
            'href' => '',
            'target' => '',
            'rel' => '',
            'before_text' => '',
            'link_text' => '',
            'after_text' => '',
            ]
        );

        $project = self::getProject(
            [
            'footer_link' => [
                'href'        => 'https://github.com/code-lts/doctum',
                'rel'         => 'noreferrer noopener',
                'target'      => '_blank',
                'before_text' => 'You can edit the configuration',
                'link_text'   => 'on this', // Required if the href key is set
                'after_text'  => 'repository',
            ],
            ]
        );

        $this->assertSame(
            $project->getFooterLink(),
            [
            'href'        => 'https://github.com/code-lts/doctum',
            'target'      => '_blank',
            'rel'         => 'noreferrer noopener',
            'before_text' => 'You can edit the configuration',
            'link_text'   => 'on this',
            'after_text'  => 'repository',
            ]
        );
    }

    public function testGetBaseUrl(): void
    {
        $project = self::getProject();

        $this->assertNull(
            $project->getBaseUrl()
        );

        $project = self::getProject(
            [
            'base_url' => 'https://github.com/code-lts/doctum',
            ]
        );

        $this->assertSame(
            'https://github.com/code-lts/doctum',
            $project->getBaseUrl()
        );

        $project = self::getProject(
            [
            'base_url' => 'https://github.com/code-lts/doctum/',
            ]
        );

        $this->assertSame(
            'https://github.com/code-lts/doctum',
            $project->getBaseUrl()
        );

        $project = self::getProject(
            [
            'base_url' => 'https://github.com/code-lts/doctum//',
            ]
        );

        $this->assertSame(
            'https://github.com/code-lts/doctum',
            $project->getBaseUrl()
        );
    }

}
