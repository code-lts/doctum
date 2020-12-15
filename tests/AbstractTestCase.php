<?php

namespace Doctum\Tests;

use Doctum\Project;
use Doctum\Store\ArrayStore;
use PHPUnit\Framework\TestCase;

/**
 * @author William Desportes <williamdes@wdes.fr>
 */
abstract class AbstractTestCase extends TestCase
{
    protected function getProject(): Project
    {
        $store = new ArrayStore();
        return new Project($store);
    }

    protected function getTestConfigFilePath(): string
    {
        return __DIR__ . DIRECTORY_SEPARATOR . 'data' . DIRECTORY_SEPARATOR . 'doctum.php';
    }
}
