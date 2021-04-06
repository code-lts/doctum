<?php declare(strict_types=1);

namespace Models;

/**
 * Desc
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
}
