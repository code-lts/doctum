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

abstract class Reflection
{
    public const MODIFIER_PUBLIC = 1;
    public const MODIFIER_PROTECTED = 2;
    public const MODIFIER_PRIVATE = 4;
    public const MODIFIER_STATIC = 8;
    public const MODIFIER_ABSTRACT = 16;
    public const MODIFIER_FINAL = 32;
    protected const VISIBILITY_MODIFER_MASK = 7; // 1 | 2 | 4

    /** @var string */
    protected $name;
    protected $line;
    protected $shortDesc;
    protected $longDesc;
    protected $hint;
    protected $hintDesc;
    protected $tags;
    protected $docComment;
    protected $see = [];

    public function __construct(string $name, $line)
    {
        $this->name = $name;
        $this->line = $line;
        $this->tags = [];
    }

    abstract public function getClass();

    public function getName(): string
    {
        return $this->name;
    }

    public function setName(string $name): void
    {
        $this->name = $name;
    }

    public function getLine()
    {
        return $this->line;
    }

    public function setLine($line)
    {
        $this->line = $line;
    }

    public function getShortDesc()
    {
        return $this->shortDesc;
    }

    public function setShortDesc($shortDesc)
    {
        $this->shortDesc = $shortDesc;
    }

    public function getLongDesc()
    {
        return $this->longDesc;
    }

    public function setLongDesc($longDesc)
    {
        $this->longDesc = $longDesc;
    }

    public function getHint()
    {
        if (! is_array($this->hint)) {
            return [];
        }

        $hints = [];
        $project = $this->getClass()->getProject();
        foreach ($this->hint as $hint) {
            $hints[] = new HintReflection(Project::isPhpTypeHint($hint[0]) ? $hint[0] : $project->getClass($hint[0]), $hint[1]);
        }

        return $hints;
    }

    public function getHintAsString()
    {
        $str = [];
        foreach ($this->getHint() as $hint) {
            $str[] = ($hint->isClass() ? $hint->getName()->getShortName() : $hint->getName()) . ($hint->isArray() ? '[]' : '');
        }

        return implode('|', $str);
    }

    public function hasHint()
    {
        return $this->hint ? true : false;
    }

    public function setHint($hint)
    {
        $this->hint = $hint;
    }

    public function getRawHint()
    {
        return $this->hint;
    }

    public function setHintDesc($desc)
    {
        $this->hintDesc = $desc;
    }

    public function getHintDesc()
    {
        return $this->hintDesc;
    }

    public function setTags($tags)
    {
        $this->tags = $tags;
    }

    public function getTags($name)
    {
        return $this->tags[$name] ?? [];
    }

    public function getDeprecated()
    {
        return $this->getTags('deprecated');
    }

    public function getTodo()
    {
        return $this->getTags('todo');
    }

    // not serialized as it is only useful when parsing
    public function setDocComment($comment)
    {
        $this->docComment = $comment;
    }

    public function getDocComment()
    {
        return $this->docComment;
    }

    /**
     * @return array
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

    public function setSee(array $see)
    {
        $this->see = $see;
    }

    private function prepareMethodSee(array $seeElem)
    {
        /** @var Project $project */
        $project = $this->getClass()->getProject();

        $class = $project->getClass($seeElem[2]);
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
}
