<?php

declare(strict_types = 1);

namespace Doctum\Tests\Renderer;

use Doctum\Renderer\Diff;
use Doctum\Tests\AbstractTestCase;

class DiffTest extends AbstractTestCase
{

    public function testIsPhpClass(): void
    {
        $project = self::getProject();
        $diff    = new Diff($project, '');
        $this->assertFalse($diff->isEmpty());
        $this->assertEmpty($diff->getModifiedNamespaces());
        $this->assertEmpty($diff->getRemovedNamespaces());
        $this->assertEmpty($diff->getModifiedClasses());
        $this->assertEmpty($diff->getRemovedClasses());
        $this->assertFalse($diff->isAlreadyRendered());
        $file = tempnam(sys_get_temp_dir(), 'doctumTestFile');
        $file = $file === false ? '' : $file;
        $this->assertFileExists($file);
        $project = self::getProject();
        $diff    = new Diff($project, $file);
        $this->assertFalse($diff->isEmpty());
        $this->assertEmpty($diff->getModifiedNamespaces());
        $this->assertEmpty($diff->getRemovedNamespaces());
        $this->assertEmpty($diff->getModifiedClasses());
        $this->assertEmpty($diff->getRemovedClasses());
        $this->assertFalse($diff->isAlreadyRendered());
        $diff->save();
        $this->assertFileExists($file);
        $diff = new Diff($project, $file);
        $this->assertTrue($diff->isEmpty());
        $this->assertEmpty($diff->getModifiedNamespaces());
        $this->assertEmpty($diff->getRemovedNamespaces());
        $this->assertEmpty($diff->getModifiedClasses());
        $this->assertEmpty($diff->getRemovedClasses());
        $this->assertTrue($diff->isAlreadyRendered());
        $this->assertFileExists($file);
        unlink($file);
        $this->assertFileDoesNotExist($file);
    }

}
