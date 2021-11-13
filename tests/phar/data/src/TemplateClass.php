<?php

/**
 * @template T
 */
class MyContainer
{
    /** @var T */
    private $value;

    /** @param T $value */
    public function __construct($value)
    {
        $this->value = $value;
    }

    /** @return T */
    public function getValue()
    {
        return $this->value;
    }

    /** @return array<T> */
    public function getValueAsArray()
    {
        return [$this->value];
    }

    /** @return MyContainer<array<int,int>> */
    public function getContainerOfInts()
    {
        // doc block used so phpstan let's us do what we want
        /** @var array<int,int> */
        $data = [
            1, 2, 3
        ];
        return new MyContainer($data);
    }

    /**
     * @template T
     * @param T $a
     * @return T
     */
    function foo($a)
    {
        return $a;
    }

    /**
     * @template T of \Exception
     * @param T $exception
     * @return T
     */
    function fooEx($exception)
    {
    }

    /**
     * @template T
     * @param class-string<T> $className
     * @param int $id
     * @return T|null
     */
    function findEntity(string $className, int $id)
    {
    }

    /**
     * @phpstan-template T of \Exception
     *
     * @param \Exception $param
     * @return \Exception
     *
     * @phpstan-param T $param
     * @phpstan-return T
     */
    function foo3($param) { }

}
$data = [
    'a',
    'b',
];
$c = new MyContainer($data);
foreach ($c->getValue() as $key => $val) {
    if (is_string($val)) {
        // valid, always true
    }
    if (is_array($val)) {
        // invalid, code never enters
    }
}
foreach ($c->getValueAsArray()[0] as $key => $val) {
    if (is_string($val)) {
        // valid, always true
    }
    if (is_array($val)) {
        // invalid, code never enters
    }
}
foreach ($c->getContainerOfInts()->getValue() as $key => $val) {
    if (is_string($val)) {
        // invalid, code never enters
    }
    if (is_array($val)) {
        // invalid, code never enters
    }
    if (is_int($val)) {
        // valid, always true
    }
}
class Collection {
    function add($v): void {

    }

    /**
     * @throws \InvalidArgumentException.
     * @throws \Drupal\Component\Plugin\Exception\InvalidPluginDefinitionException.
     */
    function del($k): void
    {

    }
}

/**
 * @implements Collection<Dog>
 */
class DogCollection implements Collection
{
}

/**
 * @template T
 * @implements Collection<T>
 */
class PersistentCollection implements Collection
{
}

class Cat {}
class Foo {
    /**
     * @param Collection<Dog> $dogs
     */
    function foo(Collection $dogs)
    {
        // Dog expected, Cat given
        $dogs->add(new Cat());
    }
}
class Bar {}

/**
 * @return \Generator<int, string, Foo, Bar>
 */
function foo(): \Generator
{
	yield 'foo' => new Foo(); // wrong key and value
	$send = yield 1 => 'foo'; // correct
	// $send is Foo

	if (rand(0, 1)) {
		return $send; // wrong
	}

	return new Bar(); // correct
}

$generator = foo();
$generator->send(1); // wrong, expects Foo
$generator->getReturn(); // Bar
