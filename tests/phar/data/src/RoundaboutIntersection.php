<?php

namespace RoundaboutIntersection;

class FooAndBar extends Foo implements Bar {}

class Baz
{
    public Foo&Bar $fooAndBar;

    public function baz(Foo&Bar $baz)
    {
        return;
    }

    public function returnFooAndBar(): Foo&Bar
    {
        return new FooAndBar;
    }
}
