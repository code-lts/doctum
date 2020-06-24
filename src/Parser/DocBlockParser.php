<?php

/*
 * This file is part of the Sami utility.
 *
 * (c) Fabien Potencier <fabien@symfony.com>
 *
 * This source file is subject to the MIT license that is bundled
 * with this source code in the file LICENSE.
 */

namespace Doctum\Parser;

use phpDocumentor\Reflection\DocBlock;
use phpDocumentor\Reflection\DocBlock\Tag;
use Doctum\Parser\Node\DocBlockNode;
use phpDocumentor\Reflection\DocBlock\Tag\ParamTag;
use phpDocumentor\Reflection\DocBlock\Tag\PropertyReadTag;
use phpDocumentor\Reflection\DocBlock\Tag\PropertyTag;
use phpDocumentor\Reflection\DocBlock\Tag\PropertyWriteTag;
use phpDocumentor\Reflection\DocBlock\Tag\ReturnTag;
use phpDocumentor\Reflection\DocBlock\Tag\SeeTag;
use phpDocumentor\Reflection\DocBlock\Tag\ThrowsTag;
use phpDocumentor\Reflection\DocBlock\Tag\VarTag;

class DocBlockParser
{
    /**
     * @param mixed         $comment
     * @param ParserContext $context
     *
     * @return DocBlockNode
     */
    public function parse($comment, ParserContext $context)
    {
        $docBlock = null;
        $errorMessage = '';

        try {
            $docBlockContext = new DocBlock\Context($context->getNamespace(), $context->getAliases() ?: []);
            $docBlock = new DocBlock((string) $comment, $docBlockContext);
        } catch (\Exception $e) {
            $errorMessage = $e->getMessage();
        }

        $result = new DocBlockNode();

        if ($errorMessage) {
            $result->addError($errorMessage);

            return $result;
        }

        $result->setShortDesc($docBlock->getShortDescription());
        $result->setLongDesc((string) $docBlock->getLongDescription());

        foreach ($docBlock->getTags() as $tag) {
            $result->addTag($tag->getName(), $this->parseTag($tag));
        }

        return $result;
    }

    public function getTag($string)
    {
        return Tag::createInstance($string);
    }

    protected function parseTag(DocBlock\Tag $tag)
    {
        $class = get_class($tag);
        switch ($class) {
            case VarTag::class:
            case ReturnTag::class:
                /** @var \phpDocumentor\Reflection\DocBlock\Tag\ReturnTag $tag */
                return [
                    $this->parseHint($tag->getTypes()),
                    $tag->getDescription(),
                ];
            case PropertyTag::class:
            case PropertyReadTag::class:
            case PropertyWriteTag::class:
            case ParamTag::class:
                /** @var \phpDocumentor\Reflection\DocBlock\Tag\ParamTag $tag */
                return [
                    $this->parseHint($tag->getTypes()),
                    ltrim($tag->getVariableName(), '$'),
                    $tag->getDescription(),
                ];
            case ThrowsTag::class:
                /** @var \phpDocumentor\Reflection\DocBlock\Tag\ThrowsTag $tag */
                return [
                    $tag->getType(),
                    $tag->getDescription(),
                ];
            case SeeTag::class:
                // For backwards compatibility, in first cell we store content.
                // In second - only a referer for further parsing.
                // In docblock node we handle this in getOtherTags() method.
                /** @var \phpDocumentor\Reflection\DocBlock\Tag\SeeTag $tag */
                return [
                    $tag->getContent(),
                    $tag->getReference(),
                    $tag->getDescription(),
                ];
            default:
                return $tag->getContent();
        }
    }

    protected function parseHint($rawHints)
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
