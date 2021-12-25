<?php

declare(strict_types = 1);

namespace Doctum\Tests;

use PHPUnit\Framework\TestCase;
use Doctum\Project;
use Doctum\Reflection\ClassReflection;
use Doctum\Store\ArrayStore;
use Doctum\Tree;
use Doctum\TreeNode;

/**
 * @author Tomasz Struczyński <t.struczynski@gmail.com>
 */
class TreeTest extends TestCase
{

    public function testNamespaces(): void
    {
        $class1 = new ClassReflection('C1', 1);
        $class2 = new ClassReflection('C2', 1);
        $class3 = new ClassReflection('C3', 1);
        $class2->setNamespace('C21');
        $class3->setNamespace('C31\C32');

        $store = new ArrayStore();
        $store->setClasses([$class1, $class2, $class3]);

        $project = new Project($store);
        $project->loadClass($class1->__toString());
        $project->loadClass($class2->__toString());
        $project->loadClass($class3->__toString());

        $tree = new Tree();

        $generated = $tree->getTree($project);
        $this->assertTrue($generated->hasChildren());
        $this->assertCount(3, $generated->getChildren() ?? []);

        $globalNs = $generated->getChildren()[0] ?? null;
        $this->assertInstanceOf(TreeNode::class, $globalNs);
        $this->assertEquals('[Global Namespace]', $globalNs->getName());
        $this->assertEquals('[Global_Namespace]', $globalNs->getPath());

        $firstNs = $generated->getChildren()[1] ?? null;
        $this->assertInstanceOf(TreeNode::class, $firstNs);
        $this->assertEquals('C21', $firstNs->getName());
        $this->assertEquals('C21', $firstNs->getPath());

        $secondNs = $generated->getChildren()[2] ?? null;
        $this->assertInstanceOf(TreeNode::class, $secondNs);
        $this->assertEquals('C31', $secondNs->getName());
        $this->assertEquals('C31', $secondNs->getPath());
        $this->assertTrue($secondNs->hasChildren());

        $this->assertCount(1, $secondNs->getChildren() ?? []);
        $firstChildOfSecondNs = $secondNs->getChildren()[0] ?? null;
        $this->assertInstanceOf(TreeNode::class, $firstChildOfSecondNs);
        $this->assertEquals('C32', $firstChildOfSecondNs->getName());
        $this->assertEquals('C31\C32', $firstChildOfSecondNs->getPath());
    }

}
