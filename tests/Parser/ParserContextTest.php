<?php

namespace Doctum\Tests\Parser;

use PhpParser\PrettyPrinter\Standard as PrettyPrinter;
use PHPUnit\Framework\TestCase;
use Doctum\Parser\DocBlockParser;
use Doctum\Parser\Filter\TrueFilter;
use Doctum\Parser\ParserContext;
use Doctum\Reflection\ClassReflection;

class ParserContextTest extends TestCase
{
    public function testLeaveClassBeforeEnter()
    {
        $filter = new TrueFilter();
        $docBlockParser = new DocBlockParser();
        $prettyPrinter = new PrettyPrinter();

        $context = new ParserContext($filter, $docBlockParser, $prettyPrinter);
        $class = new ClassReflection('C1', 1);

        $context->enterFile(null, null);

        // Leave a class before entering it
        $context->leaveClass();

        // Genuinely enter and leave a class
        $context->enterClass($class);
        $context->leaveClass();

        $classes = $context->leaveFile();

        $this->assertContainsOnlyInstancesOf(ClassReflection::class, $classes);
    }
}
