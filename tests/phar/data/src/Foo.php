<?php declare(strict_types=1);

namespace Foo;

use Closure;

class Foo
{
    /**
     * Kwa
     *
     * level 1
     * --------
     *
     * level 1
     * ----------
     * level 1
     * ------------
     *
     *Describe {@link https://doctum.long-term.support } is LTS
     * Describe {@link Foo::expects_void_variadic } function
     * Describe {@link expects_void_variadic } function
     *
     * Describe2 { @link https://doctum.long-term.support } is LTS
     * Describe2 { @link Foo::expects_void_variadic } function
     * Describe2 { @link expects_void_variadic } function
     *
     * 
     * @see expects_void_variadic
     * @see https://doctum.long-term.support
     * @see Foo::expects_void_variadic
     *
     * You need to {@see expects_void_variadic}
     * You need to {@see https://doctum.long-term.support}
     * You need to {@see Foo::expects_void_variadic}
     *
     * 
     * @return void
     */
    function expects_void_variadic(Closure $fn): void {
    }

    /**
      * Text with an inline source tag:
      *
      * <code>
      * function element($pages)
      * {
      *     if (empty($pages))
      *     {
      *         die("<b>ERROR</b>: nothing parsed");
      *     }
      * }
      * </code>
      * displays without a break in the flow
      */
    function element($pages)
    {

        if (empty($pages))
        {
            die("<b>ERROR</b>: nothing parsed");
        }

    }

    /**
     * A
     * B
     * C
     */
    function md(): string
    {

    }

    /**
     * # A
     * ## B
     * ### C
     */
    function md2(): string
    {

    }

    /**
     * # A
     * ## B
     * ### C
     * @return foo|bar|string|mixed|false|true|int|foo|bar|string|mixed|false|true|int
     */
    function longSignature()
    {

    }
}
$f = new Foo();
$f->expects_void_variadic(static function (string ...$a) {
});
