<?php

/*
 * This file is part of the Doctum utility.
 *
 * (c) Fabien Potencier <fabien@symfony.com>
 *
 * This source file is subject to the MIT license that is bundled
 * with this source code in the file LICENSE.
 */

namespace Doctum\Renderer;

use Doctum\Project;

class Index implements \Serializable
{
    protected $classes;
    protected $versions;
    protected $namespaces;

    public function __construct(Project $project = null)
    {
        $this->classes = [];
        if (null !== $project) {
            foreach ($project->getProjectClasses() as $class) {
                $this->classes[$class->getName()] = $class->getHash();
            }
        }

        $this->versions = [];
        if (null !== $project) {
            foreach ($project->getVersions() as $version) {
                $this->versions[] = (string) $version;
            }
        }

        $this->namespaces = [];
        if (null !== $project) {
            $this->namespaces = $project->getNamespaces();
        }
    }

    public function getVersions()
    {
        return $this->versions;
    }

    public function getClasses()
    {
        return $this->classes;
    }

    public function getNamespaces()
    {
        return $this->namespaces;
    }

    public function getHash($class)
    {
        return $this->classes[$class] ?? false;
    }

    public function serialize()
    {
        return serialize([$this->classes, $this->versions, $this->namespaces]);
    }

    public function unserialize($data)
    {
        list($this->classes, $this->versions, $this->namespaces) = unserialize($data);
    }
}
