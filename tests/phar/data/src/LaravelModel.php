<?php declare(strict_types=1);

namespace Models;

/**
 * Desc
 *
 * @method static self ISO8859_1()
 * @method static self ISO8859_2()
 * @method string getString()
 * @method void setInteger(int $integer)
 * @method setString(int $integer)
 * @method setArgs(array $args = [])
 * @method setArgsOld(array $args = array())
 * @method setAll(array ...$args)
 * @method setAllSlim(...$args)
 * @method setEmpty($args)
 * @method setUnk($integ, $var2, string $val3)
 * @method static string staticGetter()
 *
 * @method static Foo myStaticMethod(int $integ, LaravelModel $model, self $mySelf, array ...$arrVaria)
 * @method static Foo myStaticMethodWithDocs(int $integ, LaravelModel $model, self $mySelf, array ...$arrVaria) A cute description
 * @method static Foo myStaticMethodArrayBreaks(array $a1 = [], array $a2 = array(), ?array $a3 = null, $a4 = false, array ...$arrVaria)
 * @method static Foo myStaticMethodArrayBreaks2(array $a1 = [], array $a2 = array(), ?array $a3 = null, $a4 = false, ...$arrVaria)
 *
 * @property int $myIntProperty
 * @property-read int $myIntPropertyRead
 * @property-write int $myIntPropertyWrite
 *
 * @deprecated v3
 *
 * @todo Bééé Oui
 *
 * @internal This is an internal class
 * @internal Another reason
 *
 * @readonly All the class is readonly
 *
 * @mixin Foo
 * @mixin LaravelModel
 * @mixin Foo
 *
 * @since 1.0.0
 */
class LaravelModel
{
    /**
     * abou
     *
     * blob blob
     * @internal is int
     * @deprecated v1
     * @since v1
     */
    public const MY_CONST = 'foobar';

    /**
     * @var string
     */
    protected $protectedProp;

    /**
     * @var string
     * @since v1
     * @deprecated v2
     */
    protected $deprecatedProp;

    /**
     * @var string
     * @deprecated v2
     * @readonly
     */
    protected $deprecatedPropRead;

    /**
     * @var string
     * @deprecated v2
     * @writeonly
     */
    protected $deprecatedPropWrite;

    /**
     * @var string
     * @readonly
     */
    protected $normalPropRead;

    /**
     * @var string
     * @writeonly
     */
    protected $normalPropWrite;

    /**
     * @var string
     */
    protected $normalProp;

    /**
     * @var string
     * @internal Internal
     */
    protected $normalInternalProp;

    /**
     * @var string
     * @internal Internal
     * @readonly
     */
    protected $normalInternalReadOnlyProp;

    /**
     * @var string
     * @internal Internal
     * @writeonly
     */
    protected $normalInternalWriteOnlyProp;

    /**
     * @var string
     * @internal Internal
     * @readonly
     * @deprecated v32
     */
    protected $normalInternalReadOnlyDeprecatedProp;

    /**
     * @var string
     * @todo I forgot about it
     */
    protected $somethingTodo;

    /**
     * @var Foo
     */
    protected $model;

    /**
     * @var string
     * @example https://example.com
     */
    protected $uri;

    /**
     * What does the cow say ?
     *
     * @example moo
     */
    public function cowsay(): string
    {
        return 'moo';
    }

    /**
     * @todo lambs
     * @deprecated use a drone
     * @since ever
     */
    public function shepherd(): void
    {

    }

    /**
     * @internal another reason explained here
     * @since ever
     * @internal secret soup
     */
    public function doInternalLogic(): void
    {

    }

    public function publicMethod(): void
    {

    }

    /**
     * @public
     */
    function publicMethodOld(): void
    {

    }

    /**
     * @public
     * @see Net_Sample::$foo, Net_Other::someMethod(), https://example.com, Foo
     */
    function trueSetAll(array ...$params): void
    {

    }

    public static function staticTrueSetAll(array ...$params): void
    {

    }

    /**
     * Filter the list to include items with these characteristics
     *
     * @example $list->filter('Name', 'bob'); // only bob in list
     * @example $list->filter('Name', array('aziz', 'bob'); // aziz and bob in list
     * @example $list->filter(array('Name'=>'bob, 'Age'=>21)); // bob or someone with Age 21
     * @example $list->filter(array('Name'=>'bob, 'Age'=>array(21, 43))); // bob or anyone with Age 21 or 43
     */
    public function adb()
    {
        return [];
    }

    /**
     * Return a copy of this list which contains items matching any of these characteristics.
     *
     * See {@link filter()}
     * @example // only bob in the list
     *          $list = $list->filterAny('Name', 'bob');
     *          // SQL: WHERE "Name" = 'bob'
     * @example // azis or bob in the list
     *          $list = $list->filterAny('Name', array('aziz', 'bob');
     *          // SQL: WHERE ("Name" IN ('aziz','bob'))
     * @example // bob or anyone aged 21 in the list
     *          $list = $list->filterAny(array('Name'=>'bob, 'Age'=>21));
     *          // SQL: WHERE ("Name" = 'bob' OR "Age" = '21')
     * @example // bob or anyone aged 21 or 43 in the list
     *          $list = $list->filterAny(array('Name'=>'bob, 'Age'=>array(21, 43)));
     *          // SQL: WHERE ("Name" = 'bob' OR ("Age" IN ('21', '43'))
     * @example // all bobs, phils or anyone aged 21 or 43 in the list
     *          $list = $list->filterAny(array('Name'=>array('bob','phil'), 'Age'=>array(21, 43)));
     *          // SQL: WHERE (("Name" IN ('bob', 'phil')) OR ("Age" IN ('21', '43'))
     *
     * @see Foo
     *
     * @return Foo
     */
    public function zzd()
    {
        return [];
    }
}
