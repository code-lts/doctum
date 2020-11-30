<?php

namespace Doctum\Tests;

use PHPUnit\Framework\TestCase;
use Doctum\Doctum;
use Doctum\Project;
use Symfony\Component\Finder\Finder;
use Doctum\Version\GitVersionCollection;
use Doctum\RemoteRepository\GitHubRemoteRepository;
use Doctum\Version\Version;

/**
 * @author William Desportes <williamdes@wdes.fr>
 */
class DoctumTest extends TestCase
{

    public function testBasicGitIntegration(): void
    {
        $iterator = Finder::create()
                ->files()
                ->name('*.php')
                ->exclude('stubs')
                ->exclude('database')
                ->exclude('bootstrap')
                ->exclude('storage')
                ->in($dir = __DIR__);

        $versions = GitVersionCollection::create($dir)
                ->add('master', 'Main Branch');

        $doctum = new Doctum($iterator, [
                'title' => 'API',
                'versions' => $versions,
                'build_dir' => __DIR__ . '/build/%version%',
                'cache_dir' => __DIR__ . '/cache/%version%',
                'default_opened_level' => 2,
                'remote_repository' => new GitHubRemoteRepository('RepoName', dirname($dir)),
        ]);
        $project = $doctum->getProject();
        $this->assertInstanceOf(Project::class, $project);
        $this->assertEquals([
            new Version(
                'master',
                'Main Branch',
            )
        ], $project->getVersions());
    }

    public function testBasicNoGitIntegration(): void
    {
        $iterator = Finder::create()
                ->files()
                ->name('*.php')
                ->exclude('stubs')
                ->exclude('database')
                ->exclude('bootstrap')
                ->exclude('storage')
                ->in($dir = __DIR__);

        $doctum = new Doctum($iterator, [
                'title' => 'API',
                'build_dir' => __DIR__ . '/build/%version%',
                'cache_dir' => __DIR__ . '/cache/%version%',
                'default_opened_level' => 2,
                'remote_repository' => new GitHubRemoteRepository('RepoName', dirname($dir)),
        ]);
        $project = $doctum->getProject();
        $this->assertInstanceOf(Project::class, $project);
        $this->assertEquals([
            new Version(
                'main',
                'main',
            )
        ], $project->getVersions());
    }

    public function testBasicNoGitCustomNameIntegration(): void
    {
        $iterator = Finder::create()
                ->files()
                ->name('*.php')
                ->exclude('stubs')
                ->exclude('database')
                ->exclude('bootstrap')
                ->exclude('storage')
                ->in($dir = __DIR__);

        $doctum = new Doctum($iterator, [
                'title' => 'API',
                'version' => 'blob-blob-says-the-fish',
                'build_dir' => __DIR__ . '/build/%version%',
                'cache_dir' => __DIR__ . '/cache/%version%',
                'default_opened_level' => 2,
                'remote_repository' => new GitHubRemoteRepository('RepoName', dirname($dir)),
        ]);
        $project = $doctum->getProject();
        $this->assertInstanceOf(Project::class, $project);
        $this->assertEquals([
            new Version(
                'blob-blob-says-the-fish',
                'blob-blob-says-the-fish',
            )
        ], $project->getVersions());
    }
}
