<?php

/*
 * This file is part of the Doctum utility.
 *
 * (c) Fabien Potencier <fabien@symfony.com>
 *
 * This source file is subject to the MIT license that is bundled
 * with this source code in the file LICENSE.
 */

namespace Doctum;

use PhpParser\NodeTraverser;
use PhpParser\NodeVisitor\NameResolver;
use PhpParser\ParserFactory;
use PhpParser\PrettyPrinter\Standard as PrettyPrinter;
use Pimple\Container;
use Doctum\Parser\ClassTraverser;
use Doctum\Parser\ClassVisitor;
use Doctum\Parser\CodeParser;
use Doctum\Parser\DocBlockParser;
use Doctum\Parser\Filter\DefaultFilter;
use Doctum\Parser\NodeVisitor;
use Doctum\Parser\Parser;
use Doctum\Parser\ParserContext;
use Doctum\RemoteRepository\AbstractRemoteRepository;
use Doctum\Renderer\Renderer;
use Doctum\Renderer\ThemeSet;
use Doctum\Renderer\TwigExtension;
use Doctum\Store\JsonStore;
use Doctum\Version\SingleVersionCollection;
use Doctum\Version\Version;
use Twig\Environment;
use Twig\Loader\FilesystemLoader;
use Wdes\phpI18nL10n\Twig\Extension\I18n as I18nExtension;
use Wdes\phpI18nL10n\plugins\MoReader;
use Wdes\phpI18nL10n\Launcher;

class Doctum extends Container
{
    public const VERSION_MAJOR = 5;
    public const VERSION_MINOR = 0;
    public const VERSION_PATCH = 1;
    public const IS_DEV = false;

    //@phpstan-ignore-next-line
    public const VERSION = self::VERSION_MAJOR . '.' . self::VERSION_MINOR . '.' . self::VERSION_PATCH . (self::IS_DEV ? '-dev' : '');

    public function __construct($iterator = null, array $config = [])
    {
        parent::__construct();

        $sc = $this;

        if (null !== $iterator) {
            $this['files'] = $iterator;
        }

        $this['_versions'] = function ($sc) {
            $versions = $sc['versions'] ?? $sc['version'];

            if (is_string($versions)) {
                $versions = new Version($versions);
            }

            if ($versions instanceof Version) {
                $versions = new SingleVersionCollection($versions);
            }

            return $versions;
        };

        $this['project'] = function ($sc) {
            $project = new Project($sc['store'], $sc['_versions'], [
                'build_dir' => $sc['build_dir'],
                'cache_dir' => $sc['cache_dir'],
                'remote_repository' => $sc['remote_repository'],
                'include_parent_data' => $sc['include_parent_data'],
                'default_opened_level' => $sc['default_opened_level'],
                'theme' => $sc['theme'],
                'title' => $sc['title'],
                'source_url' => $sc['source_url'],
                'source_dir' => $sc['source_dir'],
                'insert_todos' => $sc['insert_todos'],
                'sort_class_properties' => $sc['sort_class_properties'],
                'sort_class_methods' => $sc['sort_class_methods'],
                'sort_class_constants' => $sc['sort_class_constants'],
                'sort_class_traits' => $sc['sort_class_traits'],
                'sort_class_interfaces' => $sc['sort_class_interfaces'],
            ]);
            $project->setRenderer($sc['renderer']);
            $project->setParser($sc['parser']);

            return $project;
        };

        $this['parser'] = function ($sc) {
            return new Parser($sc['files'], $sc['store'], $sc['code_parser'], $sc['traverser']);
        };

        $this['indexer'] = function () {
            return new Indexer();
        };

        $this['tree'] = function () {
            return new Tree();
        };

        $this['parser_context'] = function ($sc) {
            return new ParserContext($sc['filter'], $sc['docblock_parser'], $sc['pretty_printer']);
        };

        $this['docblock_parser'] = function () {
            return new DocBlockParser();
        };

        $this['php_parser'] = function () {
            return (new ParserFactory())->create(ParserFactory::PREFER_PHP7);
        };

        $this['php_traverser'] = function ($sc) {
            $traverser = new NodeTraverser();
            $traverser->addVisitor(new NameResolver());
            $traverser->addVisitor(new NodeVisitor($sc['parser_context']));

            return $traverser;
        };

        $this['code_parser'] = function ($sc) {
            return new CodeParser($sc['parser_context'], $sc['php_parser'], $sc['php_traverser']);
        };

        $this['pretty_printer'] = function () {
            return new PrettyPrinter();
        };

        $this['filter'] = function () {
            return new DefaultFilter();
        };

        $this['store'] = function () {
            return new JsonStore();
        };

        $this['renderer'] = function ($sc) {
            return new Renderer($sc['twig'], $sc['themes'], $sc['tree'], $sc['indexer']);
        };

        $this['traverser'] = function ($sc) {
            $visitors = [
                new ClassVisitor\InheritdocClassVisitor(),
                new ClassVisitor\MethodClassVisitor(),
                new ClassVisitor\PropertyClassVisitor($sc['parser_context']),
            ];

            if ($sc['remote_repository'] instanceof AbstractRemoteRepository) {
                $visitors[] = new ClassVisitor\ViewSourceClassVisitor($sc['remote_repository']);
            }

            return new ClassTraverser($visitors);
        };

        $this['themes'] = function ($sc) {
            $templates = $sc['template_dirs'];
            $templates[] = __DIR__ . '/Resources/themes';

            return new ThemeSet($templates);
        };

        $this['twig'] = function () use ($config) {
            $dataDir  = __DIR__ . '/../locale/';
            $moReader = new MoReader(
                ['localeDir' => $dataDir]
            );
            $moReader->readFile($dataDir . ($config['language'] ?? 'en' ) . '.mo');
            Launcher::$plugin = $moReader;
            $twig = new Environment(new FilesystemLoader(['/']), [
                'strict_variables' => true,
                'debug' => true,
                'auto_reload' => true,
                'cache' => false,
            ]);
            $twig->addExtension(new TwigExtension());
            $twig->addExtension(new I18nExtension());

            return $twig;
        };

        $this['theme'] = 'default';
        $this['title'] = 'API';
        $this['version'] = 'main';
        $this['template_dirs'] = [];
        $this['build_dir'] = getcwd() . '/build';
        $this['cache_dir'] = getcwd() . '/cache';
        $this['remote_repository'] = null;
        $this['source_dir'] = '';
        $this['source_url'] = '';
        $this['default_opened_level'] = 2;
        $this['insert_todos'] = false;
        $this['sort_class_properties'] = false;
        $this['sort_class_methods'] = false;
        $this['sort_class_constants'] = false;
        $this['sort_class_traits'] = false;
        $this['sort_class_interfaces'] = false;

        // include parent properties and methods on class pages
        $this['include_parent_data'] = true;

        foreach ($config as $key => $value) {
            $this[$key] = $value;
        }
    }
}
