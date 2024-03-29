<?php

namespace Illuminate\Database\Eloquent;

/**
 * @template TModelClass of Model
 * @source https://github.com/netpok/larastan/blob/master/stubs/EloquentBuilder.stub
 * @license MIT
 * @copyright Nuno Maduro enunomaduro@gmail.com
 *
 * @category laravel
 * @category builder
 */
class Builder
{
    /** @phpstan-return TModelClass */
    public function getModel();

    /**
     * @phpstan-param array<model-property<TModelClass>, mixed> $attributes
     * @phpstan-return TModelClass
     */
    public function create(array $attributes = []);

    /**
     * Create a collection of models from plain arrays.
     *
     * @param  array<mixed>  $items
     * @phpstan-return \Illuminate\Database\Eloquent\Collection<TModelClass>
     */
    public function hydrate(array $items);

    /**
     * Create a collection of models from a raw query.
     *
     * @param  string  $query
     * @param  array<mixed>  $bindings
     * @phpstan-return \Illuminate\Database\Eloquent\Collection<TModelClass>
     */
    public function fromQuery($query, $bindings = []);

    /**
     * Find a model by its primary key.
     *
     * @param  mixed  $id
     * @param  array<int, (model-property<TModelClass>|'*')>|model-property<TModelClass>|'*'  $columns
     * @phpstan-return TModelClass|\Illuminate\Database\Eloquent\Collection<TModelClass>|null
     * @category find
     */
    public function find($id, $columns = ['*']);

    /**
     * Find multiple models by their primary keys.
     *
     * @param  \Illuminate\Contracts\Support\Arrayable|array<mixed>  $ids
     * @param  array<int, (model-property<TModelClass>|'*')>|model-property<TModelClass>|'*'  $columns
     * @phpstan-return \Illuminate\Database\Eloquent\Collection<TModelClass>
     * @category find
     */
    public function findMany($ids, $columns = ['*']);

    /**
     * Find a model by its primary key or throw an exception.
     *
     * @param  mixed  $id
     * @param  array<int, (model-property<TModelClass>|'*')>|model-property<TModelClass>|'*'  $columns
     * @phpstan-return TModelClass|\Illuminate\Database\Eloquent\Collection<TModelClass>
     * @category find
     *
     * @throws \Illuminate\Database\Eloquent\ModelNotFoundException
     */
    public function findOrFail($id, $columns = ['*']);

    /**
     * Find a model by its primary key or return fresh model instance.
     *
     * @param  mixed  $id
     * @param  array<int, (model-property<TModelClass>|'*')>|model-property<TModelClass>|'*'  $columns
     * @phpstan-return TModelClass
     * @category find
     */
    public function findOrNew($id, $columns = ['*']);

    /**
     * Get the first record matching the attributes or instantiate it.
     *
     * @param  array<model-property<TModelClass>, mixed>  $attributes
     * @param  array<model-property<TModelClass>, mixed>  $values
     * @phpstan-return TModelClass
     */
    public function firstOrNew(array $attributes = [], array $values = []);

    /**
     * Get the first record matching the attributes or create it.
     *
     * @param  array<model-property<TModelClass>, mixed>  $attributes
     * @param  array<model-property<TModelClass>, mixed>  $values
     * @phpstan-return TModelClass
     */
    public function firstOrCreate(array $attributes, array $values = []);

    /**
     * Create or update a record matching the attributes, and fill it with values.
     *
     * @param  array<model-property<TModelClass>, mixed>  $attributes
     * @param  array<model-property<TModelClass>, mixed>  $values
     * @phpstan-return TModelClass
     */
    public function updateOrCreate(array $attributes, array $values = []);

    /**
     * @param  array<model-property<TModelClass>, mixed>  $attributes
     * @return \Illuminate\Database\Eloquent\Model|$this
     */
    public function forceCreate(array $attributes);

    /**
     * @param  array<model-property<TModelClass>, mixed>  $values
     * @return int
     */
    public function update(array $values);

    /**
     * Execute the query and get the first result or throw an exception.
     *
     * @param  array<int, (model-property<TModelClass>|'*')>|model-property<TModelClass>|'*'  $columns
     * @phpstan-return TModelClass
     *
     * @throws \Illuminate\Database\Eloquent\ModelNotFoundException
     */
    public function firstOrFail($columns = ['*']);

    /**
     * Execute the query and get the first result or call a callback.
     *
     * @param  \Closure|array<int, (model-property<TModelClass>|'*')>  $columns
     * @param  \Closure|null  $callback
     * @phpstan-return TModelClass|mixed
     */
    public function firstOr($columns = ['*'], \Closure $callback = null);

    /**
     * Execute the query and get the first result or call a callback.
     *
     * @param  \Closure|array<int, (string|'*')>  $columns
     * @param  \Closure|null  $callback
     * @phpstan-return TModelClass|mixed
     */
    public function firstOr2($columns = ['*'], \Closure $callback = null);

    /**
     * Add a basic where clause to the query.
     *
     * @param  \Closure|model-property<TModelClass>|array<model-property<TModelClass>|int, mixed>|\Illuminate\Database\Query\Expression  $column
     * @param  mixed  $operator
     * @param  mixed  $value
     * @param  string  $boolean
     * @return $this
     */
    public function where($column, $operator = null, $value = null, $boolean = 'and');

    /**
     * Add an "or where" clause to the query.
     *
     * @param  \Closure|model-property<TModelClass>|array<model-property<TModelClass>|int, mixed>|\Illuminate\Database\Query\Expression  $column
     * @param  mixed  $operator
     * @param  mixed  $value
     * @return $this
     */
    public function orWhere($column, $operator = null, $value = null);

    /**
     * Add a basic where clause to the query, and return the first result.
     *
     * @param  \Closure|model-property<TModelClass>|array<model-property<TModelClass>|int, mixed>|\Illuminate\Database\Query\Expression  $column
     * @param  mixed  $operator
     * @param  mixed  $value
     * @param  string  $boolean
     * @phpstan-return TModelClass|null
     */
    public function firstWhere($column, $operator = null, $value = null, $boolean = 'and');

    /**
     * Execute the query as a "select" statement.
     *
     * @param  array<int, (model-property<TModelClass>|'*')>|model-property<TModelClass>|'*'  $columns
     * @phpstan-return \Illuminate\Database\Eloquent\Collection<TModelClass>
     */
    public function get($columns = ['*']);

    /**
     * Get the hydrated models without eager loading.
     *
     * @param  array<int, (model-property<TModelClass>|'*')>|model-property<TModelClass>|'*'  $columns
     * @phpstan-return TModelClass[]
     */
    public function getModels($columns = ['*']);

    /**
     * Get a single column's value from the first result of a query.
     *
     * @param  model-property<TModelClass>|\Illuminate\Database\Query\Expression  $column
     * @return mixed
     */
    public function value($column);

    /**
     * Apply the callback's query changes if the given "value" is true.
     *
     * @param mixed  $value
     * @param callable($this, mixed): null|Builder<TModelClass> $callback
     * @param callable($this, mixed): null|Builder<TModelClass>|null  $default
     * @return mixed|$this
     */
    public function when($value, $callback, $default = null);

    /**
     * Apply the callback's query changes if the given "value" is false.
     *
     * @param  mixed  $value
     * @param  callable($this, mixed): null|Builder<TModelClass>  $callback
     * @param  callable($this, mixed): null|Builder<TModelClass>|null  $default
     * @return mixed|$this
     */
    public function unless($value, $callback, $default = null);
}
