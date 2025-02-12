<?php

declare(strict_types = 1);

namespace Doctum\Tests;

use Doctum\Project;
use Doctum\Store\ArrayStore;
use PHPUnit\Framework\TestCase;

/**
 * @author William Desportes <williamdes@wdes.fr>
 */
abstract class AbstractTestCase extends TestCase
{

    /**
     * @param array<string,mixed> $config
     */
    protected static function getProject(array $config = []): Project
    {
        $store = new ArrayStore();
        return new Project($store, null, $config);
    }

    protected function getTestConfigFilePath(): string
    {
        return __DIR__ . DIRECTORY_SEPARATOR . 'data' . DIRECTORY_SEPARATOR . 'doctum.php';
    }

    /**
     * Call a non accessible method
     *
     * @param object  $obj
     * @param string  $name
     * @param mixed[] $args
     * @return mixed
     */
    public static function callMethod($obj, string $name, array $args)
    {
        $class  = new \ReflectionClass($obj);
        $method = $class->getMethod($name);
        $method->setAccessible(true);
        return $method->invokeArgs($obj, $args);
    }

}
