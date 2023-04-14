<?php

class Foo {}
interface Bar {}

class Baz
{
    public function __construct(
        public Foo&Bar $baz,
    ) {}
}
