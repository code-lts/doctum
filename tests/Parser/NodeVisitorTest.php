<?php

declare(strict_types = 1);

namespace Doctum\Tests\Parser;

use PhpParser\Node\Name\FullyQualified;
use PhpParser\Node\Name\Relative;
use PhpParser\Node\NullableType;
use PhpParser\Node\Param;
use PhpParser\Node\Stmt\ClassMethod;
use PhpParser\NodeTraverser;
use PhpParser\PrettyPrinter\Standard;
use Doctum\Tests\AbstractTestCase;
use Doctum\Parser\DocBlockParser;
use Doctum\Parser\Filter\TrueFilter;
use Doctum\Parser\NodeVisitor;
use Doctum\Parser\ParserContext;
use Doctum\Project;
use Doctum\Reflection\ClassReflection;
use Doctum\Reflection\FunctionReflection;
use Doctum\Reflection\MethodReflection;
use Doctum\Reflection\ParameterReflection;
use Doctum\Reflection\PropertyReflection;
use Doctum\Store\ArrayStore;
use PhpParser\Node\Expr\Variable;
use PhpParser\Node\Name;

/**
 * @author Tomasz Struczyński <t.struczynski@gmail.com>
 */
class NodeVisitorTest extends AbstractTestCase
{

    /**
     * @dataProvider getMethodTypehints
     */
    #[\PHPUnit\Framework\Attributes\DataProvider('getMethodTypehints')]
    public function testMethodTypehints(ClassReflection $classReflection, ClassMethod $method, array $expectedHints): void
    {
        $parserContext = new ParserContext(new TrueFilter(), new DocBlockParser(), new Standard());
        $parserContext->enterClass($classReflection);
        $traverser = new NodeTraverser();
        $traverser->addVisitor(new NodeVisitor($parserContext));
        $traverser->traverse([$method]);

        $reflMethod = $classReflection->getMethod($method->name->__toString());
        $this->assertNotFalse($reflMethod);

        $this->assertInstanceOf(MethodReflection::class, $reflMethod);
        /** @var MethodReflection $reflMethod */
        $params = $reflMethod->getParameters();
        $this->assertNotFalse($params);
        $this->assertCount(count($expectedHints), $params);
        foreach ($params as $paramKey => $parameter) {
            /** @var ParameterReflection $parameter */
            $this->assertArrayHasKey($paramKey, $expectedHints);
            $hint = $parameter->getHint();
            $this->assertCount(count($expectedHints[$paramKey]), $hint);
            foreach ($expectedHints[$paramKey] as $hintKey => $hintVal) {
                $this->assertEquals($hintVal, (string) $hint[$hintKey]);
            }
        }
    }

    /**
     * @dataProvider getMethodReturnTypeHints
     */
    #[\PHPUnit\Framework\Attributes\DataProvider('getMethodReturnTypeHints')]
    public function testMethodReturnTypeHints(ClassReflection $classReflection, ClassMethod $method, string $expectedReturnType): void
    {
        $parserContext = new ParserContext(new TrueFilter(), new DocBlockParser(), new Standard());
        $parserContext->enterClass($classReflection);
        $traverser = new NodeTraverser();
        $traverser->addVisitor(new NodeVisitor($parserContext));
        $traverser->traverse([$method]);

        $reflMethod = $classReflection->getMethod($method->name->__toString());

        $this->assertInstanceOf(MethodReflection::class, $reflMethod);

        /** @var MethodReflection $reflMethod */
        $this->assertEquals($expectedReturnType, $reflMethod->getHintAsString());
    }

    /**
     * @return array
     */
    public static function getMethodTypehints(): array
    {
        return [
            'primitive' => self::getMethodTypehintsPrimiteveParameters(),
            'class' => self::getMethodTypehintsClassParameters(),
            'subnamespacedclass' => self::getMethodTypehintsSubNamespacedClassParameters(),
            'docblockclass' => self::getMethodTypehintsDocblockClassParameters(),
            'docblockmixedclass' => self::getMethodTypehintsDocblockMixedClassParameters(),
        ];
    }

    /**
     * @return array
     */
    public static function getMethodReturnTypeHints(): array
    {
        return [
            'primitive' => self::getPrimitiveMethodReturnType(),
            'class' => self::getClassMethodReturnType(),
            'nullableType' => self::getNullableMethodReturnType(),
        ];
    }

    private static function getPrimitiveMethodReturnType(): array
    {
        $expectedReturnType = 'string';
        $classReflection    = new ClassReflection('C1', 1);
        $method             = new ClassMethod(
            'testMethod',
            [
                'returnType' => new Name('string'),
            ]
        );

        $classReflection->setMethods([$method]);

        $store = new ArrayStore();
        $store->setClasses([$classReflection]);

        $project = new Project($store);
        $project->loadClass('C1');

        return [
            $classReflection,
            $method,
            $expectedReturnType,
        ];
    }

    private static function getClassMethodReturnType(): array
    {
        $expectedReturnType = 'Class';
        $classReflection    = new ClassReflection('C1', 1);
        $method             = new ClassMethod(
            'testMethod',
            [
            'returnType' => new FullyQualified('Test\\Class'),
            ]
        );

        $classReflection->setMethods([$method]);

        $store = new ArrayStore();
        $store->setClasses([$classReflection]);

        $project = new Project($store);
        $project->loadClass('C1');

        return [
            $classReflection,
            $method,
            $expectedReturnType,
        ];
    }

    private static function getNullableMethodReturnType(): array
    {
        $expectedReturnType = 'Class|null';
        $classReflection    = new ClassReflection('C1', 1);
        $method             = new ClassMethod(
            'testMethod',
            [
                'returnType' => new NullableType(new Name('Test\\Class')),
            ]
        );

        $classReflection->setMethods([$method]);

        $store = new ArrayStore();
        $store->setClasses([$classReflection]);

        $project = new Project($store);
        $project->loadClass('C1');

        return [
            $classReflection,
            $method,
            $expectedReturnType,
        ];
    }

    private static function getMethodTypehintsPrimiteveParameters(): array
    {
        $classReflection = new ClassReflection('C1', 1);
        $method          = new ClassMethod(
            'testMethod',
            [
            'params' => [
                new Param(
                    new Variable('param1'),
                    null,
                    new Name('int')
                ),
                new Param(
                    new Variable('param2'),
                    null,
                    new Name('string')
                ),
            ],
            ]
        );

        $classReflection->setMethods([$method]);
        $store = new ArrayStore();
        $store->setClasses([$classReflection]);

        $project = new Project($store);

        $project->loadClass('C1');

        return [
            $classReflection,
            $method,
            [
                'param1' => ['int'],
                'param2' => ['string'],
            ],
        ];
    }

    private static function getMethodTypehintsClassParameters(): array
    {
        $classReflection      = new ClassReflection('C1', 1);
        $paramClassReflection = new ClassReflection('Test\Class', 1);
        $method               = new ClassMethod(
            'testMethod',
            [
            'params' => [
                new Param(
                    new Variable('param1'),
                    null,
                    new FullyQualified('Test\\Class')
                ),
            ],
            ]
        );

        $classReflection->setMethods([$method]);
        $store = new ArrayStore();
        $store->setClasses([$classReflection, $paramClassReflection]);

        $project = new Project($store);

        $project->loadClass('C1');
        $project->loadClass('Test\\Class');

        return [
            $classReflection,
            $method,
            [
                'param1' => ['Test\Class'],
            ],
        ];
    }

    private static function getMethodTypehintsSubNamespacedClassParameters(): array
    {
        $classReflection      = new ClassReflection('Test\Class', 1);
        $paramClassReflection = new ClassReflection('Test\Sub\Class', 1);
        $method               = new ClassMethod(
            'testMethod',
            [
            'params' => [
                new Param(
                    new Variable('param1'),
                    null,
                    new Relative('Sub\\Class')
                ),
            ],
            ]
        );

        $classReflection->setMethods([$method]);
        $store = new ArrayStore();
        $store->setClasses([$classReflection, $paramClassReflection]);

        $project = new Project($store);

        $project->loadClass('Test\\Class');
        $project->loadClass('Test\\Sub\\Class');

        return [
            $classReflection,
            $method,
            [
                'param1' => ['Sub\Class'],
            ],
        ];
    }

    private static function getMethodTypehintsDocblockClassParameters(): array
    {
        $classReflection      = new ClassReflection('C1', 1);
        $paramClassReflection = new ClassReflection('Test\Class', 1);
        $method               = new ClassMethod(
            'testMethod',
            [
            'params' => [
                new Param(
                    new Variable('param1')
                ),
            ],
            ]
        );
        $method->setDocComment(new \PhpParser\Comment\Doc('/** @param Test\\Class $param1 */'));

        $classReflection->setMethods([$method]);
        $store = new ArrayStore();
        $store->setClasses([$classReflection, $paramClassReflection]);

        $project = new Project($store);

        $project->loadClass('C1');
        $project->loadClass('Test\\Class');

        return [
            $classReflection,
            $method,
            [
                'param1' => ['Test\Class'],
            ],
        ];
    }

    private static function getMethodTypehintsDocblockMixedClassParameters(): array
    {
        $classReflection      = new ClassReflection('C1', 1);
        $paramClassReflection = new ClassReflection('Test\Class', 1);
        $method               = new ClassMethod(
            'testMethod',
            [
            'params' => [
                new Param(
                    new Variable('param1')
                ),
            ],
            ]
        );
        $method->setDocComment(new \PhpParser\Comment\Doc('/** @param Test\\Class|string $param1 */'));

        $classReflection->setMethods([$method]);
        $store = new ArrayStore();
        $store->setClasses([$classReflection, $paramClassReflection]);

        $project = new Project($store);

        $project->loadClass('C1');
        $project->loadClass('Test\\Class');

        return [
            $classReflection,
            $method,
            [
                'param1' => ['Test\Class', 'string'],
            ],
        ];
    }

    /**
     * @see NodeVisitor::updateMethodParametersFromTags
     */
    public function testUpdateMethodParametersFromTags(): void
    {
        $parserContext  = new ParserContext(new TrueFilter(), new DocBlockParser(), new Standard());
        $docBlockParser = new DocBlockParser();
        $docBlockNode   = $docBlockParser->parse(
            '/**' . "\n"
            . '* @param type1 $param1 Description' . "\n"
            . '* @param $param8 Description 4' . "\n"
            . '* @param $param9' . "\n"
            . '* @param foo' . "\n"
            . '* @param type1 $param4 Description 4' . "\n"
            . '**/' . "\n",
            $parserContext
        );

        $visitor  = new NodeVisitor($parserContext);
        $function = new FunctionReflection('fun1', 0);

        $param1 = (new ParameterReflection('param1', 0));
        $param1->setHint('array');
        $function->addParameter($param1);

        $param2 = (new ParameterReflection('param2', 0));
        $function->addParameter($param2);

        $this->assertSame(
            [
                'The "param2" parameter of the method "fun1" is missing a @param tag',
                'The method "fun1" has "5" @param tags but only "2" where expected.',
            ],
            $this->callMethod(
                $visitor,
                'updateMethodParametersFromTags',
                [
                $function,
                $docBlockNode->getTag('param'),
                ]
            )
        );
    }

    /**
     * @see NodeVisitor::updateMethodParametersFromTags
     * @see https://github.com/20Tauri/DoxyDoxygen/issues/135#issuecomment-512090231
     */
    public function testUpdateMethodParametersFromTagsVariadic(): void
    {
        $parserContext  = new ParserContext(new TrueFilter(), new DocBlockParser(), new Standard());
        $docBlockParser = new DocBlockParser();
        $docBlockNode   = $docBlockParser->parse(
            '/**' . "\n"
            . '* @param FooBar|baz|string ...$args' . "\n"
            . '**/' . "\n",
            $parserContext
        );

        $visitor  = new NodeVisitor($parserContext);
        $function = new FunctionReflection('fun1', 0);

        $param1 = (new ParameterReflection('args', 0));
        $function->addParameter($param1);

        $this->assertSame(
            [],
            $this->callMethod(
                $visitor,
                'updateMethodParametersFromTags',
                [
                $function,
                $docBlockNode->getTag('param'),
                ]
            )
        );
    }

    /**
     * @see NodeVisitor::updateMethodParametersFromTags
     */
    public function testUpdateMethodParametersFromInvalidTags(): void
    {
        $parserContext  = new ParserContext(new TrueFilter(), new DocBlockParser(), new Standard());
        $docBlockParser = new DocBlockParser();
        $docBlockNode   = $docBlockParser->parse(
            '/**' . "\n"
            . '* @param type1 $param1 Description' . "\n"
            . '* @param $param8 Description 4' . "\n"
            . '* @param $param9' . "\n"
            . '* @param foo' . "\n"
            . '* @param type1 $param4 Description 4' . "\n"
            . '* @param array[\Illuminate\Notifications\Channels\Notification]  $notification' . "\n"
            . '**/' . "\n",
            $parserContext
        );

        $visitor  = new NodeVisitor($parserContext);
        $function = new FunctionReflection('fun1', 0);

        $param1 = (new ParameterReflection('param1', 0));
        $param1->setHint('array');
        $function->addParameter($param1);

        $param2 = (new ParameterReflection('param2', 0));
        $function->addParameter($param2);

        $this->assertSame(
            [
                'The "param2" parameter of the method "fun1" is missing a @param tag',
                'The method "fun1" has "6" @param tags but only "2" where expected.',
                'The method "fun1" has "1" invalid @param tags.',
                'Invalid @param tag on "fun1": "array[\Illuminate\Notifications\Channels\Notification]  $notification"',
            ],
            $this->callMethod(
                $visitor,
                'updateMethodParametersFromTags',
                [
                $function,
                $docBlockNode->getTag('param'),
                ]
            )
        );
    }

    /**
     * @see NodeVisitor::updateMethodParametersFromTags
     */
    public function testUpdateMethodParametersFromInvalidTagsReport(): void
    {
        $parserContext  = new ParserContext(new TrueFilter(), new DocBlockParser(), new Standard());
        $docBlockParser = new DocBlockParser();
        $docBlockNode   = $docBlockParser->parse(
            '/**' . "\n"
            . '* @param array[\Illuminate\Notifications\Channels\Notification]  $notification' . "\n"
            . '**/' . "\n",
            $parserContext
        );

        $visitor  = new NodeVisitor($parserContext);
        $function = new FunctionReflection('fun1', 0);

        $param1 = (new ParameterReflection('notification', 0));
        $function->addParameter($param1);

        $this->assertSame(
            [
                'The "notification" parameter of the method "fun1" is missing a @param tag',
                'The method "fun1" has "1" invalid @param tags.',
                'Invalid @param tag on "fun1": "array[\Illuminate\Notifications\Channels\Notification]  $notification"',
            ],
            $this->callMethod(
                $visitor,
                'updateMethodParametersFromTags',
                [
                $function,
                $docBlockNode->getTag('param'),
                ]
            )
        );
    }

    /**
     * @see NodeVisitor::addTagFromCommentToMethod
     */
    public function testAddTagFromCommentToMethodInvalidHint(): void
    {
        $parserContext  = new ParserContext(new TrueFilter(), new DocBlockParser(), new Standard());
        $docBlockParser = new DocBlockParser();
        $docBlockNode   = $docBlockParser->parse(
            '/**' . "\n"
            . '* @var \Illuminate\Support\Carbon;' . "\n"
            . '**/' . "\n",
            $parserContext
        );

        $visitor  = new NodeVisitor($parserContext);
        $property = new PropertyReflection('prop1', 0);

        $errors = [];
        $this->callMethod(
            $visitor,
            'addTagFromCommentToMethod',
            [
            'var',
            $docBlockNode,
            $property,
            &$errors,
            ]
        );
        $this->assertSame(
            [
                'The hint on "prop1" at @var is invalid: "\Illuminate\Support\Carbon;"',
            ],
            $errors
        );
    }

    /**
     * @see NodeVisitor::addTagFromCommentToMethod
     */
    public function testAddTagFromCommentToMethodHintVariadic(): void
    {
        $parserContext  = new ParserContext(new TrueFilter(), new DocBlockParser(), new Standard());
        $docBlockParser = new DocBlockParser();
        $docBlockNode   = $docBlockParser->parse(
            '/**' . "\n"
            . '* @var FooBar|baz|string ...$args' . "\n"
            . '**/' . "\n",
            $parserContext
        );

        $visitor  = new NodeVisitor($parserContext);
        $property = new PropertyReflection('args', 0);

        $errors = [];
        $this->callMethod(
            $visitor,
            'addTagFromCommentToMethod',
            [
            'var',
            $docBlockNode,
            $property,
            &$errors,
            ]
        );
        $this->assertSame(
            [],
            $errors
        );
    }

    /**
     * @see NodeVisitor::addTagFromCommentToMethod
     */
    public function testAddTagFromCommentToMethodReturnParam(): void
    {
        $parserContext  = new ParserContext(new TrueFilter(), new DocBlockParser(), new Standard());
        $docBlockParser = new DocBlockParser();
        $docBlockNode   = $docBlockParser->parse(
            '/**' . "\n"
            . '* @return FooBar|baz|string comment' . "\n"
            . '**/' . "\n",
            $parserContext
        );

        $visitor  = new NodeVisitor($parserContext);
        $property = new PropertyReflection('args', 0);

        $errors = [];
        $this->callMethod(
            $visitor,
            'addTagFromCommentToMethod',
            [
                'return',
                $docBlockNode,
                $property,
                &$errors,
            ]
        );
        $this->assertSame('comment', $property->getHintDesc());
        $this->assertSame(
            [],
            $errors
        );
    }

    /**
     * @see NodeVisitor::addTagFromCommentToMethod
     */
    public function testAddTagFromCommentToMethodReturnParamNoComment(): void
    {
        $parserContext  = new ParserContext(new TrueFilter(), new DocBlockParser(), new Standard());
        $docBlockParser = new DocBlockParser();
        $docBlockNode   = $docBlockParser->parse(
            '/**' . "\n"
            . '* @return FooBar|baz|string' . "\n"
            . '**/' . "\n",
            $parserContext
        );

        $visitor  = new NodeVisitor($parserContext);
        $property = new PropertyReflection('args', 0);

        $errors = [];
        $this->callMethod(
            $visitor,
            'addTagFromCommentToMethod',
            [
                'return',
                $docBlockNode,
                $property,
                &$errors,
            ]
        );
        $this->assertSame('', $property->getHintDesc());
        $this->assertSame(
            [],
            $errors
        );
    }

    /**
     * @see NodeVisitor::addTagFromCommentToMethod
     */
    public function testAddTagFromCommentToMethodReturnParamTooMuchVarTags(): void
    {
        $parserContext  = new ParserContext(new TrueFilter(), new DocBlockParser(), new Standard());
        $docBlockParser = new DocBlockParser();
        $docBlockNode   = $docBlockParser->parse(
            '/**' . "\n"
            . '* @var string' . "\n"
            . '* @var FooBar|baz|string' . "\n"
            . '**/' . "\n",
            $parserContext
        );

        $visitor  = new NodeVisitor($parserContext);
        $property = new PropertyReflection('myProperty', 0);

        $errors = [];
        $this->callMethod(
            $visitor,
            'addTagFromCommentToMethod',
            [
                'var',
                $docBlockNode,
                $property,
                &$errors,
            ]
        );
        $this->assertSame('', $property->getHintDesc());
        $this->assertSame(
            [
                'Too much @var tags on "myProperty" at @var found: 2 @var tags',
            ],
            $errors
        );
    }

    /**
     * @see NodeVisitor::addTagFromCommentToMethod
     */
    public function testAddTagFromCommentToMethodReturnParamTooMuchReturnTags(): void
    {
        $parserContext  = new ParserContext(new TrueFilter(), new DocBlockParser(), new Standard());
        $docBlockParser = new DocBlockParser();
        $docBlockNode   = $docBlockParser->parse(
            '/**' . "\n"
            . '* @return string' . "\n"
            . '* @return FooBar|baz|string' . "\n"
            . '**/' . "\n",
            $parserContext
        );

        $visitor  = new NodeVisitor($parserContext);
        $property = new FunctionReflection('functionName', 0);

        $errors = [];
        $this->callMethod(
            $visitor,
            'addTagFromCommentToMethod',
            [
                'return',
                $docBlockNode,
                $property,
                &$errors,
            ]
        );
        $this->assertSame('', $property->getHintDesc());
        $this->assertSame(
            [
                'Too much @return tags on "functionName" at @return found: 2 @return tags',
            ],
            $errors
        );
    }

    /**
     * @see NodeVisitor::getParsedSeeEntry
     */
    public function testGetParsedSeeEntry(): void
    {
        $parserContext = new ParserContext(new TrueFilter(), new DocBlockParser(), new Standard());
        $visitor       = new NodeVisitor($parserContext);

        $result = $this->callMethod(
            $visitor,
            'getParsedSeeEntry',
            [
                'https://foo.tld',
                '',
            ]
        );
        $this->assertSame(
            [
                'https://foo.tld',
                '',
                false,
                false,
                'https://foo.tld',
            ],
            $result
        );

        $result = $this->callMethod(
            $visitor,
            'getParsedSeeEntry',
            [
                'Class::method()',
                '',
            ]
        );
        $this->assertSame(
            [
                'Class::method()',
                '',
                'Class',
                'method',
                false,
            ],
            $result
        );

        $result = $this->callMethod(
            $visitor,
            'getParsedSeeEntry',
            [
                'FooClass',
                '',
            ]
        );
        $this->assertSame(
            [
                'FooClass',
                '',
                'FooClass',
                false,
                false,
            ],
            $result
        );
    }

    /**
     * @see NodeVisitor::resolveSee
     */
    public function testResolveSee(): void
    {
        $parserContext = new ParserContext(new TrueFilter(), new DocBlockParser(), new Standard());
        $visitor       = new NodeVisitor($parserContext);

        $result = $this->callMethod(
            $visitor,
            'resolveSee',
            [
                [
                    'Net_Sample::$foo, Net_Other::someMethod()',
                    'https://example.com,      http://foo.bar.tld/folder/',
                ],
            ]
        );
        $this->assertSame(
            [
                [
                    'Net_Sample::$foo',
                    '',
                    'Net_Sample::$foo',
                    false,
                    false,
                ],
                [
                    'Net_Other::someMethod()',
                    '',
                    'Net_Other',
                    'someMethod',
                    false,
                ],
                [
                    'https://example.com',
                    '',
                    false,
                    false,
                    'https://example.com',
                ],
                [
                    'http://foo.bar.tld/folder/',
                    '',
                    false,
                    false,
                    'http://foo.bar.tld/folder/',
                ],
            ],
            $result
        );
    }

}
