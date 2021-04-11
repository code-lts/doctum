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

use Wdes\phpI18nL10n\Launcher;

class Tree
{

    public static function getGlobalNamespacePageName(): string
    {
        return Launcher::gettext('[Global_Namespace]');
    }

    public static function getGlobalNamespaceName(): string
    {
        return Launcher::gettext('[Global Namespace]');
    }

    /**
     * @return array[]
     */
    public function getTree(Project $project)
    {
        $namespaces = [];
        $ns         = $project->getNamespaces();
        foreach ($ns as $namespace) {
            if (false !== $pos = strpos($namespace, '\\')) {
                $namespaces[substr($namespace, 0, $pos)][] = $namespace;
            } else {
                $namespaces[$namespace][] = $namespace;
            }
        }

        return $this->generateClassTreeLevel($project, 1, $namespaces, []);
    }

    /**
     * @param int $level
     * @param array $namespaces
     * @param \Doctum\Reflection\ClassReflection[] $classes
     * @return array[]
     */
    protected function generateClassTreeLevel(Project $project, $level, array $namespaces, array $classes)
    {
        ++$level;

        $tree = [];
        foreach ($namespaces as $namespace => $subnamespaces) {
            // classes
            $cl = $project->getNamespaceAllClasses($namespace);

            // subnamespaces
            $ns = [];
            foreach ($subnamespaces as $subnamespace) {
                $parts = explode('\\', $subnamespace);
                if (!isset($parts[$level - 1])) {
                    continue;
                }

                $ns[implode('\\', array_slice($parts, 0, $level))][] = $subnamespace;
            }

            $parts = explode('\\', $namespace);
            $url   = '';
            $url   = $parts[count($parts) - 1]
                    && $project->hasNamespace($namespace)
                    && (count($subnamespaces) || count($cl)) ? $namespace : '';
            $short = $parts[count($parts) - 1] ? $parts[count($parts) - 1] : self::getGlobalNamespaceName();

            $tree[] = [$short, $url, $this->generateClassTreeLevel($project, $level, $ns, $cl)];
        }

        foreach ($classes as $class) {
            $short = $class->getShortName();

            $tree[] = [$short, $class, []];
        }

        return $tree;
    }

}
