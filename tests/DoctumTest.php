<?php

namespace Doctum\Tests;

use PHPUnit\Framework\TestCase;
use Doctum\Doctum;
use Doctum\Project;
use Symfony\Component\Finder\Finder;
use Doctum\Version\GitVersionCollection;
use Doctum\RemoteRepository\GitHubRemoteRepository;
use Doctum\Store\JsonStore;
use Doctum\Version\Version;
use LogicException;

/**
 * @author William Desportes <williamdes@wdes.fr>
 */
class DoctumTest extends TestCase
{

    public function testBasicGitIntegration(): void
    {
        $dir      = __DIR__;
        $iterator = Finder::create()
            ->files()
            ->name('*.php')
            ->exclude('stubs')
            ->exclude('database')
            ->exclude('bootstrap')
            ->exclude('storage')
            ->in($dir);

        $versions = GitVersionCollection::create($dir)
                ->add('master', 'Main Branch');

        $doctum  = new Doctum(
            $iterator,
            [
                'title' => 'API',
                'versions' => $versions,
                'build_dir' => __DIR__ . '/build/%version%',
                'cache_dir' => __DIR__ . '/cache/%version%',
                'default_opened_level' => 2,
                'remote_repository' => new GitHubRemoteRepository('RepoName', dirname($dir)),
            ]
        );
        $project = $doctum->getProject();
        $this->assertInstanceOf(Project::class, $project);
        $this->assertEquals(
            [
                new Version(
                    'master',
                    'Main Branch'
                )
            ],
            $project->getVersions()
        );
    }

    public function testBasicNoGitIntegration(): void
    {
        $dir      = __DIR__;
        $iterator = Finder::create()
            ->files()
            ->name('*.php')
            ->exclude('stubs')
            ->exclude('database')
            ->exclude('bootstrap')
            ->exclude('storage')
            ->in($dir);

        $doctum  = new Doctum(
            $iterator,
            [
                'title' => 'API',
                'build_dir' => __DIR__ . '/build/%version%',
                'cache_dir' => __DIR__ . '/cache/%version%',
                'default_opened_level' => 2,
                'remote_repository' => new GitHubRemoteRepository('RepoName', dirname($dir)),
            ]
        );
        $project = $doctum->getProject();
        $this->assertInstanceOf(Project::class, $project);
        $this->assertEquals(
            [
                new Version(
                    'main',
                    'main'
                )
            ],
            $project->getVersions()
        );
    }

    public function testBasicNoGitCustomNameIntegration(): void
    {
        $dir      = __DIR__;
        $iterator = Finder::create()
            ->files()
            ->name('*.php')
            ->exclude('stubs')
            ->exclude('database')
            ->exclude('bootstrap')
            ->exclude('storage')
            ->in($dir);

        $doctum  = new Doctum(
            $iterator,
            [
                'title' => 'API',
                'version' => 'blob-blob-says-the-fish',
                'build_dir' => __DIR__ . '/build/%version%',
                'cache_dir' => __DIR__ . '/cache/%version%',
                'default_opened_level' => 2,
                'remote_repository' => new GitHubRemoteRepository('RepoName', dirname($dir)),
            ]
        );
        $project = $doctum->getProject();
        $this->assertInstanceOf(Project::class, $project);
        $this->assertEquals(
            [
            new Version(
                'blob-blob-says-the-fish',
                'blob-blob-says-the-fish'
            )
            ],
            $project->getVersions()
        );
    }

    public function testBasicGitIntegrationMissingCacheDir(): void
    {
        $dir      = __DIR__;
        $iterator = Finder::create()
            ->files()
            ->name('*.php')
            ->exclude('stubs')
            ->exclude('database')
            ->exclude('bootstrap')
            ->exclude('storage')
            ->in($dir);

        $versions = GitVersionCollection::create($dir)
            ->add('master', 'Main Branch')
            ->add('blob', 'Fish Branch');

        $doctum = new Doctum(
            $iterator,
            [
                'title' => 'API',
                'versions' => $versions,
                'build_dir' => __DIR__ . '/build/%version%',
                'default_opened_level' => 2,
                'remote_repository' => new GitHubRemoteRepository('RepoName', dirname($dir)),
            ]
        );
        $this->expectExceptionMessage(
            'The "cache_dir" setting must have the "%version%" placeholder as the project has more than one version.'
        );
        $this->expectException(LogicException::class);
        $doctum->getProject();
    }

    public function testBasicGitIntegrationMissingBuildDir(): void
    {
        $dir      = __DIR__;
        $iterator = Finder::create()
            ->files()
            ->name('*.php')
            ->exclude('stubs')
            ->exclude('database')
            ->exclude('bootstrap')
            ->exclude('storage')
            ->in($dir);

        $versions = GitVersionCollection::create($dir)
            ->add('master', 'Main Branch')
            ->add('blob', 'Fish Branch');

        $doctum = new Doctum(
            $iterator,
            [
                'title' => 'API',
                'versions' => $versions,
                'cache_dir' => __DIR__ . '/cache/%version%',
                'default_opened_level' => 2,
                'remote_repository' => new GitHubRemoteRepository('RepoName', dirname($dir)),
            ]
        );
        $this->expectExceptionMessage(
            'The "build_dir" setting must have the "%version%" placeholder as the project has more than one version.'
        );
        $this->expectException(LogicException::class);
        $doctum->getProject();
    }

    public function testCliOnlyVersion(): void
    {
        $dir      = __DIR__;
        $iterator = Finder::create()
            ->files()
            ->name('*.php')
            ->exclude('stubs')
            ->exclude('database')
            ->exclude('bootstrap')
            ->exclude('storage')
            ->in($dir);

        $doctum = new Doctum(
            $iterator,
            [
                'remote_repository' => new GitHubRemoteRepository('RepoName', dirname($dir)),
            ]
        );
        $doctum->setVersion('fouBar');
        $project = $doctum->getProject();
        $this->assertInstanceOf(Project::class, $project);
        $this->assertEquals(
            [
            new Version(
                'fouBar',
                'fouBar'
            )
            ],
            $project->getVersions()
        );
    }

    public function testAdvancedHackyIntegration(): void
    {
        $dir      = __DIR__;
        $iterator = Finder::create()
            ->files()
            ->name('*.php')
            ->exclude('stubs')
            ->exclude('database')
            ->exclude('bootstrap')
            ->exclude('storage')
            ->in($dir);

        $doctum     = new Doctum(
            $iterator,
            [
                'title' => 'API',
                'version' => 'blob-blob-says-the-fish',
                'build_dir' => __DIR__ . '/build/%version%',
                'cache_dir' => __DIR__ . '/cache/%version%',
                'default_opened_level' => 2,
                'remote_repository' => new GitHubRemoteRepository('RepoName', dirname($dir)),
            ]
        );
        $jsonStore1 = new JsonStore();
        $jsonStore2 = new JsonStore();
        unset($doctum['store']);
        $doctum['store'] = static function () use (&$jsonStore1) {
            return $jsonStore1;
        };
        $project         = $doctum->getProject();
        $this->assertInstanceOf(Project::class, $project);
        $this->assertEquals(
            [
            new Version(
                'blob-blob-says-the-fish',
                'blob-blob-says-the-fish'
            )
            ],
            $project->getVersions()
        );
        // Check this did work as expected by checking references
        $this->assertTrue(isset($doctum['store']));
        $this->assertSame($jsonStore1, $doctum['store']);
        $this->assertNotSame($jsonStore2, $doctum['store']);
    }

}
