<?php

declare(strict_types = 1);

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

class ParameterReflection extends Reflection
{
    protected $function;
    protected $method;
    protected $byRef;
    protected $default;
    protected $variadic;

    public function __toString()
    {
        return $this->method . '#' . $this->name;
    }

    public function getClass()
    {
        return $this->method->getClass();
    }

    public function setByRef($boolean)
    {
        $this->byRef = $boolean;
    }

    public function isByRef()
    {
        return $this->byRef;
    }

    public function setDefault($default)
    {
        $this->default = $default;
    }

    public function getDefault()
    {
        return $this->default;
    }

    public function setVariadic($variadic)
    {
        $this->variadic = $variadic;
    }

    public function getVariadic()
    {
        return $this->variadic;
    }

    public function getMethod()
    {
        return $this->method;
    }

    public function setMethod(MethodReflection $method)
    {
        $this->method = $method;
    }

    public function getFunction()
    {
        return $this->function;
    }

    public function setFunction(FunctionReflection $function)
    {
        $this->function = $function;
    }

    /**
     * @overrides
     */
    public function getHint()
    {
        if (! is_array($this->hint)) {
            return [];
        }

        $hints = [];
        if (isset($this->function)) {
            $project = $this->getFunction()->getProject();
        } else {
            $project = $this->getClass()->getProject();
        }
        foreach ($this->hint as $hint) {
            $hints[] = new HintReflection(Project::isPhpTypeHint($hint[0]) ? $hint[0] : $project->getClass($hint[0]), $hint[1]);
        }

        return $hints;
    }

    public function toArray()
    {
        return [
            'name' => $this->name,
            'line' => $this->line,
            'short_desc' => $this->shortDesc,
            'long_desc' => $this->longDesc,
            'hint' => $this->hint,
            'tags' => $this->tags,
            'modifiers' => $this->modifiers,
            'default' => $this->default,
            'variadic' => $this->variadic,
            'is_by_ref' => $this->byRef,
        ];
    }

    /**
     * @return self
     */
    public static function fromArray(Project $project, array $array)
    {
        $parameter            = new self($array['name'], $array['line']);
        $parameter->shortDesc = $array['short_desc'];
        $parameter->longDesc  = $array['long_desc'];
        $parameter->hint      = $array['hint'];
        $parameter->tags      = $array['tags'];
        $parameter->modifiers = $array['modifiers'];
        $parameter->default   = $array['default'];
        $parameter->variadic  = $array['variadic'];
        $parameter->byRef     = $array['is_by_ref'];

        return $parameter;
    }

}
