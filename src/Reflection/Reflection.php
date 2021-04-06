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

abstract class Reflection
{
    public const MODIFIER_PUBLIC            = 1;
    public const MODIFIER_PROTECTED         = 2;
    public const MODIFIER_PRIVATE           = 4;
    public const MODIFIER_STATIC            = 8;
    public const MODIFIER_ABSTRACT          = 16;
    public const MODIFIER_FINAL             = 32;
    protected const VISIBILITY_MODIFER_MASK = 7; // 1 | 2 | 4

    /** @var string */
    protected $name;
    /** @var int */
    protected $line;
    /** @var string */
    protected $shortDesc;
    /** @var string */
    protected $longDesc;
    /** @var string|null|array */
    protected $hint;
    /** @var string */
    protected $hintDesc;
    /** @var array<string,array> */
    protected $tags;
    /** @var string|null */
    protected $docComment;
    /** @var array[] */
    protected $see = [];
    /** @var string[] */
    protected $errors = [];

    public function __construct(string $name, $line)
    {
        $this->name = $name;
        $this->line = $line;
        $this->tags = [];
    }

    /**
     * @return self|null
     */
    abstract public function getClass();

    public function getName(): string
    {
        return $this->name;
    }

    public function setName(string $name): void
    {
        $this->name = $name;
    }

    /**
     * @return int
     */
    public function getLine()
    {
        return $this->line;
    }

    /**
     * @param int $line
     */
    public function setLine($line): void
    {
        $this->line = $line;
    }

    /**
     * @return string
     */
    public function getShortDesc()
    {
        return $this->shortDesc;
    }

    /**
     * @param string $shortDesc
     * @return void
     */
    public function setShortDesc($shortDesc)
    {
        $this->shortDesc = $shortDesc;
    }

    /**
     * @return string
     */
    public function getLongDesc()
    {
        return $this->longDesc;
    }

    /**
     * @param string $longDesc
     * @return void
     */
    public function setLongDesc($longDesc)
    {
        $this->longDesc = $longDesc;
    }

    /**
     * @return HintReflection[]
     */
    public function getHint()
    {
        if (! is_array($this->hint)) {
            return [];
        }

        $hints   = [];
        $project = $this->getClass()->getProject();
        foreach ($this->hint as $hint) {
            $hints[] = new HintReflection(Project::isPhpTypeHint($hint[0]) ? $hint[0] : $project->getClass($hint[0]), $hint[1]);
        }

        return $hints;
    }

    /**
     * @return string
     * @example string|int
     */
    public function getHintAsString()
    {
        $str = [];
        foreach ($this->getHint() as $hint) {
            $str[] = ($hint->isClass() ? $hint->getName()->getShortName() : $hint->getName()) . ($hint->isArray() ? '[]' : '');
        }

        return implode('|', $str);
    }

    public function hasHint(): bool
    {
        return $this->hint ? true : false;
    }

    /**
     * @param string|array|null $hint
     * @return void
     */
    public function setHint($hint)
    {
        $this->hint = $hint;
    }

    /**
     * @return string|array|null
     */
    public function getRawHint()
    {
        return $this->hint;
    }

    /**
     * @return void
     */
    public function setHintDesc($desc)
    {
        $this->hintDesc = $desc;
    }

    /**
     * @return string
     */
    public function getHintDesc()
    {
        return $this->hintDesc;
    }

    /**
     * @param array<string,array> $tags
     * @return void
     */
    public function setTags(array $tags): void
    {
        $this->tags = $tags;
    }

    /**
     * @return array<string,array>
     */
    public function getTags($name)
    {
        return $this->tags[$name] ?? [];
    }

    /**
     * @return array<string,array>
     */
    public function getDeprecated()
    {
        return $this->getTags('deprecated');
    }

    /**
     * @return array<string,array>
     */
    public function getTodo()
    {
        return $this->getTags('todo');
    }

    /**
     * not serialized as it is only useful when parsing
     * @param string|null $comment
     * @return void
     */
    public function setDocComment($comment)
    {
        $this->docComment = $comment;
    }

    /**
     * @return string|null
     */
    public function getDocComment()
    {
        return $this->docComment;
    }

    /**
     * @return array[]
     */
    public function getSee()
    {
        $see = [];
        /** @var Project $project */
        $project = $this->getClass()->getProject();

        foreach ($this->see as $seeElem) {
            if ($seeElem[3]) {
                $seeElem = $this->prepareMethodSee($seeElem);
            } elseif ($seeElem[2]) {
                $seeElem[2] = Project::isPhpTypeHint($seeElem[2]) ? $seeElem[2] : $project->getClass($seeElem[2]);
            }

            $see[] = $seeElem;
        }

        return $see;
    }

    /**
     * @param array[] $see
     * @return void
     */
    public function setSee(array $see)
    {
        $this->see = $see;
    }

    /**
     * @param array<int,MethodReflection|ClassReflection|false> $seeElem
     * @return array<int,MethodReflection|ClassReflection|false>
     */
    private function prepareMethodSee(array $seeElem): array
    {
        /** @var Project $project */
        $project = $this->getClass()->getProject();

        $class  = $project->getClass($seeElem[2]);
        $method = $class->getMethod($seeElem[3]);

        if ($method) {
            $seeElem[2] = false;
            $seeElem[3] = $method;
        } else {
            $seeElem[2] = false;
            $seeElem[3] = false;
        }

        return $seeElem;
    }

    /**
     * @return string[]
     */
    public function getErrors(): array
    {
        return $this->errors;
    }

    /**
     * @param string[] $errors
     */
    public function setErrors(array $errors): void
    {
        $this->errors = $errors;
    }

    /**
     * @param array<string,mixed> $array
     * @return self
     */
    abstract public static function fromArray(Project $project, array $array);

}
