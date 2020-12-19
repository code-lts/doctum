<?php

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
use Doctum\Store\ArrayStore;
use PhpParser\Node\Expr\Variable;

/**
 * @author Tomasz Struczyński <t.struczynski@gmail.com>
 */
class NodeVisitorTest extends AbstractTestCase
{
    /**
     * @dataProvider getMethodTypehints
     */
    public function testMethodTypehints(ClassReflection $classReflection, ClassMethod $method, array $expectedHints): void
    {
        $parserContext = new ParserContext(new TrueFilter(), new DocBlockParser(), new Standard());
        $parserContext->enterClass($classReflection);
        $traverser = new NodeTraverser();
        $traverser->addVisitor(new NodeVisitor($parserContext));
        $traverser->traverse([$method]);

        /** @var MethodReflection $method */
        $reflMethod = $classReflection->getMethod($method->name->__toString());

        $this->assertCount(count($expectedHints), $reflMethod->getParameters());
        foreach ($reflMethod->getParameters() as $paramKey => $parameter) {
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
    public function testMethodReturnTypeHints(ClassReflection $classReflection, ClassMethod $method, string $expectedReturnType): void
    {
        $parserContext = new ParserContext(new TrueFilter(), new DocBlockParser(), new Standard());
        $parserContext->enterClass($classReflection);
        $traverser = new NodeTraverser();
        $traverser->addVisitor(new NodeVisitor($parserContext));
        $traverser->traverse([$method]);

        /** @var MethodReflection $method */
        $reflMethod = $classReflection->getMethod($method->name->__toString());

        $this->assertEquals($expectedReturnType, $reflMethod->getHintAsString());
    }

    /**
     * @return array
     */
    public function getMethodTypehints(): array
    {
        return [
            'primitive' => $this->getMethodTypehintsPrimiteveParameters(),
            'class' => $this->getMethodTypehintsClassParameters(),
            'subnamespacedclass' => $this->getMethodTypehintsSubNamespacedClassParameters(),
            'docblockclass' => $this->getMethodTypehintsDocblockClassParameters(),
            'docblockmixedclass' => $this->getMethodTypehintsDocblockMixedClassParameters(),
        ];
    }

    /**
     * @return array
     */
    public function getMethodReturnTypeHints(): array
    {
        return [
            'primitive' => $this->getPrimitiveMethodReturnType(),
            'class' => $this->getClassMethodReturnType(),
            'nullableType' => $this->getNullableMethodReturnType(),
        ];
    }

    private function getPrimitiveMethodReturnType(): array
    {
        $expectedReturnType = 'string';
        $classReflection = new ClassReflection('C1', 1);
        $method = new ClassMethod('testMethod', [
            'returnType' => 'string'
        ]);

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

    private function getClassMethodReturnType(): array
    {
        $expectedReturnType = 'Class';
        $classReflection = new ClassReflection('C1', 1);
        $method = new ClassMethod('testMethod', [
            'returnType' => new FullyQualified('Test\\Class'),
        ]);

        $classReflection->setMethods([$method]);

        $store = new ArrayStore();
        $store->setClasses([$classReflection]);

        $project = new Project($store);
        $project->loadClass('C1');

        return [
            $classReflection,
            $method,
            $expectedReturnType
        ];
    }

    private function getNullableMethodReturnType(): array
    {
        $expectedReturnType = 'Class|null';
        $classReflection = new ClassReflection('C1', 1);
        $method = new ClassMethod('testMethod', [
            'returnType' => new NullableType('Test\\Class'),
        ]);

        $classReflection->setMethods([$method]);

        $store = new ArrayStore();
        $store->setClasses([$classReflection]);

        $project = new Project($store);
        $project->loadClass('C1');

        return [
            $classReflection,
            $method,
            $expectedReturnType
        ];
    }


    private function getMethodTypehintsPrimiteveParameters(): array
    {
        $classReflection = new ClassReflection('C1', 1);
        $method = new ClassMethod('testMethod', [
            'params' => [
                new Param(
                    new Variable('param1'),
                    null,
                    'int'
                ),
                new Param(
                    new Variable('param2'),
                    null,
                    'string'
                ),
            ],
        ]);

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

    private function getMethodTypehintsClassParameters(): array
    {
        $classReflection = new ClassReflection('C1', 1);
        $paramClassReflection = new ClassReflection("Test\Class", 1);
        $method = new ClassMethod('testMethod', [
            'params' => [
                new Param(
                    new Variable('param1'),
                    null,
                    new FullyQualified('Test\\Class')
                ),
            ],
        ]);

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

    private function getMethodTypehintsSubNamespacedClassParameters(): array
    {
        $classReflection = new ClassReflection("Test\Class", 1);
        $paramClassReflection = new ClassReflection("Test\Sub\Class", 1);
        $method = new ClassMethod('testMethod', [
            'params' => [
                new Param(
                    new Variable('param1'),
                    null,
                    new Relative('Sub\\Class')
                ),
            ],
        ]);

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

    private function getMethodTypehintsDocblockClassParameters(): array
    {
        $classReflection = new ClassReflection('C1', 1);
        $paramClassReflection = new ClassReflection("Test\Class", 1);
        $method = new ClassMethod('testMethod', [
            'params' => [
                new Param(
                    new Variable('param1')
                ),
            ],
        ]);
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

    private function getMethodTypehintsDocblockMixedClassParameters(): array
    {
        $classReflection = new ClassReflection('C1', 1);
        $paramClassReflection = new ClassReflection("Test\Class", 1);
        $method = new ClassMethod('testMethod', [
            'params' => [
                new Param(
                    new Variable('param1')
                ),
            ],
        ]);
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
        $docBlockParser = new DocBlockParser();
        $docBlockNode = $docBlockParser->parse(
            '/**' . "\n"
            . '* @param type1 $param1 Description' . "\n"
            . '* @param $param8 Description 4' . "\n"
            . '* @param $param9' . "\n"
            . '* @param foo' . "\n"
            . '* @param type1 $param4 Description 4' . "\n"
            . '**/' . "\n"
        );
        $parserContext = new ParserContext(new TrueFilter(), new DocBlockParser(), new Standard());
        $visitor = new NodeVisitor($parserContext);
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
            $this->callMethod($visitor, 'updateMethodParametersFromTags', [
                $function,
                $docBlockNode->getTag('param')
            ])
        );
    }

    /**
     * @see NodeVisitor::updateMethodParametersFromTags
     */
    public function testUpdateMethodParametersFromInvalidTags(): void
    {
        $docBlockParser = new DocBlockParser();
        $docBlockNode = $docBlockParser->parse(
            '/**' . "\n"
            . '* @param type1 $param1 Description' . "\n"
            . '* @param $param8 Description 4' . "\n"
            . '* @param $param9' . "\n"
            . '* @param foo' . "\n"
            . '* @param type1 $param4 Description 4' . "\n"
            . '* @param array[\Illuminate\Notifications\Channels\Notification]  $notification' . "\n"
            . '**/' . "\n"
        );
        $parserContext = new ParserContext(new TrueFilter(), new DocBlockParser(), new Standard());
        $visitor = new NodeVisitor($parserContext);
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
            $this->callMethod($visitor, 'updateMethodParametersFromTags', [
                $function,
                $docBlockNode->getTag('param')
            ])
        );
    }

    /**
     * @see NodeVisitor::updateMethodParametersFromTags
     */
    public function testUpdateMethodParametersFromInvalidTagsReport(): void
    {
        $docBlockParser = new DocBlockParser();
        $docBlockNode = $docBlockParser->parse(
            '/**' . "\n"
            . '* @param array[\Illuminate\Notifications\Channels\Notification]  $notification' . "\n"
            . '**/' . "\n"
        );
        $parserContext = new ParserContext(new TrueFilter(), new DocBlockParser(), new Standard());
        $visitor = new NodeVisitor($parserContext);
        $function = new FunctionReflection('fun1', 0);

        $param1 = (new ParameterReflection('notification', 0));
        $function->addParameter($param1);

        $this->assertSame(
            [
                'The "notification" parameter of the method "fun1" is missing a @param tag',
                'The method "fun1" has "1" invalid @param tags.',
                'Invalid @param tag on "fun1": "array[\Illuminate\Notifications\Channels\Notification]  $notification"',
            ],
            $this->callMethod($visitor, 'updateMethodParametersFromTags', [
                $function,
                $docBlockNode->getTag('param')
            ])
        );
    }
}
