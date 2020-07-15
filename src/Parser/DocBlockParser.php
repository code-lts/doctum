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

use Doctum\Parser\Node\DocBlockNode;
use phpDocumentor\Reflection\DocBlock;
use phpDocumentor\Reflection\DocBlock\Tags\Param;
use phpDocumentor\Reflection\DocBlock\Tags\PropertyRead;
use phpDocumentor\Reflection\DocBlock\Tags\Property;
use phpDocumentor\Reflection\DocBlock\Tags\PropertyWrite;
use phpDocumentor\Reflection\DocBlock\Tags\Return_;
use phpDocumentor\Reflection\DocBlock\Tags\See;
use phpDocumentor\Reflection\DocBlock\Tags\Throws;
use phpDocumentor\Reflection\DocBlock\Tags\Var_;
use phpDocumentor\Reflection\DocBlock\Tags\InvalidTag;
use phpDocumentor\Reflection\DocBlockFactory;

class DocBlockParser
{
    public function parse(?string $comment): DocBlockNode
    {
        $docBlock = null;
        $errorMessage = '';
        $result = new DocBlockNode();

        if ($comment === null) {
            return $result;
        }

        try {
            $factory  = DocBlockFactory::createInstance();
            $docBlock = $factory->create($comment);
        } catch (\Exception $e) {
            $errorMessage = $e->getMessage();
        }


        if ($errorMessage) {
            $result->addError($errorMessage);

            return $result;
        }

        $result->setShortDesc($docBlock->getSummary());
        $result->setLongDesc($docBlock->getDescription()->__toString());

        foreach ($docBlock->getTags() as $tag) {
            $result->addTag($tag->getName(), $this->parseTag($tag));
        }

        return $result;
    }

    protected function parseTag(DocBlock\Tag $tag)
    {

        $class = get_class($tag);
        switch ($class) {
            case Var_::class:
            case Return_::class:
                /** @var \phpDocumentor\Reflection\DocBlock\Tags\Return_ $tag */
                return [
                    $this->parseHint($tag->getType() ? explode('|', $tag->getType()->__toString()) : []),
                    $tag->getDescription() ? $tag->getDescription()->__toString() : '',
                ];
            case Property::class:
            case PropertyRead::class:
            case PropertyWrite::class:
            case Param::class:
                /** @var \phpDocumentor\Reflection\DocBlock\Tags\Param $tag */
                return [
                    $this->parseHint($tag->getType() ? explode('|', $tag->getType()->__toString()) : []),
                    ltrim($tag->getVariableName(), '$'),
                    $tag->getDescription() ? $tag->getDescription()->__toString() : '',
                ];
            case Throws::class:
                /** @var \phpDocumentor\Reflection\DocBlock\Tags\Throws $tag */
                return [
                    $tag->getType() ? $tag->getType()->__toString() : '',
                    $tag->getDescription() ? $tag->getDescription()->__toString() : '',
                ];
            case See::class:
                // For backwards compatibility, in first cell we store content.
                // In second - only a referer for further parsing.
                // In docblock node we handle this in getOtherTags() method.
                /** @var \phpDocumentor\Reflection\DocBlock\Tags\See $tag */
                return [
                    $tag->__toString(),
                    $tag->getReference()->__toString(),
                    $tag->getDescription() ? $tag->getDescription()->__toString() : '',
                ];
            case InvalidTag::class:
                /** @var \phpDocumentor\Reflection\DocBlock\Tags\InvalidTag $tag */
                return $tag->__toString();
            default:
                return $tag->__toString();
        }
    }

    protected function parseHint(array $rawHints): array
    {
        $hints = [];
        foreach ($rawHints as $hint) {
            if ('[]' == substr($hint, -2)) {
                $hints[] = [substr($hint, 0, -2), true];
            } else {
                $hints[] = [$hint, false];
            }
        }

        return $hints;
    }
}
