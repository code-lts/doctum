<?php

declare(strict_types = 1);

namespace Doctum\Tests\Renderer;

use Doctum\Renderer\Index;
use Doctum\Tests\AbstractTestCase;

class IndexTest extends AbstractTestCase
{

    public function testIndexForProject(): void
    {
        $project = self::getProject();
        $index   = new Index($project);
        $this->assertSame(
            [
            'main',
            ],
            $index->getVersions()
        );
        $this->assertSame([], $index->getClasses());
        $this->assertSame([], $index->getNamespaces());
        $this->assertFalse($index->getHash('foo'));
    }

    public function testIndexNoProject(): void
    {
        $index = new Index();
        $this->assertSame([], $index->getVersions());
        $this->assertSame([], $index->getClasses());
        $this->assertSame([], $index->getNamespaces());
        $this->assertFalse($index->getHash('foo'));
    }

    public function testIndexSerializeAndWakeup(): void
    {
        $index       = new Index();
        $ser         = serialize($index);
        $indexWakeup = unserialize($ser);
        $this->assertEquals($indexWakeup, $index);
    }

    public function testIndexSerializeAndWakeupWithProject(): void
    {
        $project     = self::getProject();
        $index       = new Index($project);
        $ser         = serialize($index);
        $indexWakeup = unserialize($ser);
        $this->assertEquals($indexWakeup, $index);
    }

}
