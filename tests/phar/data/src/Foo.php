<?php declare(strict_types=1);

namespace Foo;

use Closure;

class Foo
{
    /**
     * @param Closure(string...):void $fn
     * @return void
     */
    function expects_void_variadic(Closure $fn): void {
    }
}
$f = new Foo();
$f->expects_void_variadic(static function (string ...$a) {
});
