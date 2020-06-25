<?php

/*
 * This file is part of the Doctum utility.
 *
 * (c) Fabien Potencier <fabien@symfony.com>
 *
 * This source file is subject to the MIT license that is bundled
 * with this source code in the file LICENSE.
 */

namespace Doctum\Reflection;

use Doctum\Project;

class ConstantReflection extends Reflection
{
    protected $class;

    public function __toString()
    {
        return $this->class . '::' . $this->name;
    }

    public function getClass()
    {
        return $this->class;
    }

    public function setClass(ClassReflection $class)
    {
        $this->class = $class;
    }

    public function toArray()
    {
        return [
            'name' => $this->name,
            'line' => $this->line,
            'short_desc' => $this->shortDesc,
            'long_desc' => $this->longDesc,
        ];
    }

    public static function fromArray(Project $project, $array)
    {
        $constant = new self($array['name'], $array['line']);
        $constant->shortDesc = $array['short_desc'];
        $constant->longDesc = $array['long_desc'];

        return $constant;
    }
}
