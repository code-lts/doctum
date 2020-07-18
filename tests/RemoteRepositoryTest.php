<?php

namespace Doctum\Tests;

use Doctum\RemoteRepository\BitBucketRemoteRepository;
use Doctum\RemoteRepository\GitHubRemoteRepository;
use Doctum\RemoteRepository\GitLabRemoteRepository;
use PHPUnit\Framework\TestCase;

/**
 * @author William Desportes <williamdes@wdes.fr>
 */
class RemoteRepositoryTest extends TestCase
{
    /**
     * Test for BitBucketRemoteRepository class
     */
    public function testBitBucketRemoteRepository(): void
    {
        $repo = new BitBucketRemoteRepository('r/r', './');
        $this->assertEquals('https://bitbucket.org/r/r/src/v2/src/Project.php#Project.php-30', $repo->getFileUrl('v2', 'src/Project.php', 30));
        $this->assertEquals('src/Project.php', $repo->getRelativePath('./src/Project.php'));
        $this->assertEquals('', $repo->getRelativePath('src/Project.php'));
    }

    /**
     * Test for GitHubRemoteRepository class
     */
    public function testGitHubRemoteRepository(): void
    {
        $repo = new GitHubRemoteRepository('r/r', './');
        $this->assertEquals('https://github.com/r/r/blob/v2/src/Project.php#L30', $repo->getFileUrl('v2', 'src/Project.php', 30));
        $this->assertEquals('src/Project.php', $repo->getRelativePath('./src/Project.php'));
        $this->assertEquals('', $repo->getRelativePath('src/Project.php'));
    }

    /**
     * Test for GitLabRemoteRepository class
     */
    public function testGitLabRemoteRepository(): void
    {
        $repo = new GitLabRemoteRepository('r/r', './');
        $this->assertEquals('https://gitlab.com/r/r/blob/v2/src/Project.php#L30', $repo->getFileUrl('v2', 'src/Project.php', 30));
        $this->assertEquals('src/Project.php', $repo->getRelativePath('./src/Project.php'));
        $this->assertEquals('', $repo->getRelativePath('src/Project.php'));
    }

    /**
     * Test for GitLabRemoteRepository class
     */
    public function testGitLabRemoteRepositoryExternal(): void
    {
        $repo = new GitLabRemoteRepository('r/r', './', 'https://salsa.debian.org/');
        $this->assertEquals('https://salsa.debian.org/r/r/blob/v2/src/Project.php#L30', $repo->getFileUrl('v2', 'src/Project.php', 30));
        $this->assertEquals('src/Project.php', $repo->getRelativePath('./src/Project.php'));
        $this->assertEquals('', $repo->getRelativePath('src/Project.php'));
    }
}
