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

class PropertyReflection extends Reflection
{
    protected $class;
    protected $modifiers;
    protected $default;
    /** @var bool */
    protected $isReadOnly = false;
    /** @var bool */
    protected $isWriteOnly = false;

    public function __toString()
    {
        return $this->class . '::$' . $this->name;
    }

    public function setModifiers($modifiers)
    {
        // if no modifiers, property is public
        if (0 === ($modifiers & self::VISIBILITY_MODIFER_MASK)) {
            $modifiers |= self::MODIFIER_PUBLIC;
        }

        $this->modifiers = $modifiers;
    }

    public function setReadOnly(bool $isReadOnly): void
    {
        $this->isReadOnly = $isReadOnly;
    }

    public function setWriteOnly(bool $isWriteOnly): void
    {
        $this->isWriteOnly = $isWriteOnly;
    }

    public function isReadOnly(): bool
    {
        return $this->isReadOnly;
    }

    public function isWriteOnly(): bool
    {
        return $this->isWriteOnly;
    }

    public function isPublic(): bool
    {
        return self::MODIFIER_PUBLIC === (self::MODIFIER_PUBLIC & $this->modifiers);
    }

    public function isProtected(): bool
    {
        return self::MODIFIER_PROTECTED === (self::MODIFIER_PROTECTED & $this->modifiers);
    }

    public function isPrivate(): bool
    {
        return self::MODIFIER_PRIVATE === (self::MODIFIER_PRIVATE & $this->modifiers);
    }

    public function isStatic(): bool
    {
        return self::MODIFIER_STATIC === (self::MODIFIER_STATIC & $this->modifiers);
    }

    public function isFinal(): bool
    {
        return self::MODIFIER_FINAL === (self::MODIFIER_FINAL & $this->modifiers);
    }

    public function setDefault($default): void
    {
        $this->default = $default;
    }

    public function getDefault()
    {
        return $this->default;
    }

    public function getClass()
    {
        return $this->class;
    }

    public function setClass(ClassReflection $class): void
    {
        $this->class = $class;
    }

    /**
     * @return array<string,mixed>
     */
    public function toArray()
    {
        return [
            'name' => $this->name,
            'line' => $this->line,
            'short_desc' => $this->shortDesc,
            'long_desc' => $this->longDesc,
            'hint' => $this->hint,
            'hint_desc' => $this->hintDesc,
            'tags' => $this->tags,
            'modifiers' => $this->modifiers,
            'default' => $this->default,
            'errors' => $this->errors,
        ];
    }

    /**
     * @return self
     */
    public static function fromArray(Project $project, array $array)
    {
        $property            = new self($array['name'], $array['line']);
        $property->shortDesc = $array['short_desc'];
        $property->longDesc  = $array['long_desc'];
        $property->hint      = $array['hint'];
        $property->hintDesc  = $array['hint_desc'];
        $property->tags      = $array['tags'];
        $property->modifiers = $array['modifiers'];
        $property->default   = $array['default'];
        $property->errors    = $array['errors'];

        return $property;
    }

}
