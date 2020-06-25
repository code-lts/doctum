<?php

/*
 * This file is part of the Doctum utility.
 *
 * (c) Fabien Potencier <fabien@symfony.com>
 *
 * This source file is subject to the MIT license that is bundled
 * with this source code in the file LICENSE.
 */

namespace Doctum\Parser;

use Doctum\Parser\Filter\FilterInterface;
use Doctum\Reflection\ClassReflection;

class ParserContext
{
    protected $filter;
    protected $docBlockParser;
    protected $prettyPrinter;
    protected $errors;
    protected $namespace;
    protected $aliases;
    protected $class;
    protected $file;
    protected $hash;
    protected $classes;

    public function __construct(FilterInterface $filter, DocBlockParser $docBlockParser, $prettyPrinter)
    {
        $this->filter = $filter;
        $this->docBlockParser = $docBlockParser;
        $this->prettyPrinter = $prettyPrinter;
    }

    public function getFilter()
    {
        return $this->filter;
    }

    /**
     * @return DocBlockParser
     */
    public function getDocBlockParser()
    {
        return $this->docBlockParser;
    }

    public function getPrettyPrinter()
    {
        return $this->prettyPrinter;
    }

    public function addAlias(?string $alias, string $name): void
    {
        $this->aliases[$alias] = $name;
    }

    public function getAliases()
    {
        return $this->aliases;
    }

    public function enterFile($file, $hash): void
    {
        $this->file = $file;
        $this->hash = $hash;
        $this->errors = [];
        $this->classes = [];
    }

    public function leaveFile()
    {
        $this->hash = null;
        $this->file = null;
        $this->errors = [];

        return $this->classes;
    }

    public function getHash()
    {
        return $this->hash;
    }

    public function getFile()
    {
        return $this->file;
    }

    public function addErrors($name, $line, array $errors): void
    {
        foreach ($errors as $error) {
            $this->addError($name, $line, $error);
        }
    }

    public function addError($name, $line, $error): void
    {
        $this->errors[] = sprintf('%s on "%s" in %s:%d', $error, $name, $this->file, $line);
    }

    public function getErrors()
    {
        return $this->errors;
    }

    public function enterClass(ClassReflection $class): void
    {
        $this->class = $class;
    }

    public function leaveClass(): void
    {
        if (null === $this->class) {
            return;
        }

        $this->classes[] = $this->class;
        $this->class = null;
    }

    public function getClass()
    {
        return $this->class;
    }

    public function enterNamespace($namespace): void
    {
        $this->namespace = $namespace;
        $this->aliases = [];
    }

    public function leaveNamespace(): void
    {
        $this->namespace = null;
        $this->aliases = [];
    }

    public function getNamespace()
    {
        return $this->namespace;
    }
}
