<?php

declare(strict_types = 1);

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
    public function testGitLabRemoteRepositoryDrupalGitLabSelfHosted(): void
    {
        // Example: https://git.drupalcode.org/project/drupal/-/blob/9.3.0/core/lib/Drupal/Component/ClassFinder/ClassFinderInterface.php#L19

        $repo = new GitLabRemoteRepository('project/drupal', './', 'https://git.drupalcode.org/');
        $this->assertEquals(
            'https://git.drupalcode.org/project/drupal/-/blob/'
            . '9.3.0/core/lib/Drupal/Component/ClassFinder/ClassFinderInterface.php#L19',
            $repo->getFileUrl('9.3.0', 'core/lib/Drupal/Component/ClassFinder/ClassFinderInterface.php', 19)
        );
        $this->assertEquals(
            'core/lib/Drupal/Component/ClassFinder/ClassFinderInterface.php',
            $repo->getRelativePath('./core/lib/Drupal/Component/ClassFinder/ClassFinderInterface.php')
        );
        $this->assertEquals(
            '',
            $repo->getRelativePath(
                'core/lib/Drupal/Component/ClassFinder/ClassFinderInterface.php'
            )
        );
    }

    /**
     * Test for GitLabRemoteRepository class
     */
    public function testGitLabRemoteRepository(): void
    {
        $repo = new GitLabRemoteRepository('r/r', './');
        $this->assertEquals('https://gitlab.com/r/r/-/blob/v2/src/Project.php#L30', $repo->getFileUrl('v2', 'src/Project.php', 30));
        $this->assertEquals('src/Project.php', $repo->getRelativePath('./src/Project.php'));
        $this->assertEquals('', $repo->getRelativePath('src/Project.php'));
        $repo = new GitLabRemoteRepository('r/r', './', null, '/blob/');
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
        $this->assertEquals('https://salsa.debian.org/r/r/-/blob/v2/src/Project.php#L30', $repo->getFileUrl('v2', 'src/Project.php', 30));
        $this->assertEquals('src/Project.php', $repo->getRelativePath('./src/Project.php'));
        $this->assertEquals('', $repo->getRelativePath('src/Project.php'));
        $repo = new GitLabRemoteRepository('r/r', './', 'https://salsa.debian.org/', '/blob/');
        $this->assertEquals('https://salsa.debian.org/r/r/blob/v2/src/Project.php#L30', $repo->getFileUrl('v2', 'src/Project.php', 30));
        $this->assertEquals('src/Project.php', $repo->getRelativePath('./src/Project.php'));
        $this->assertEquals('', $repo->getRelativePath('src/Project.php'));
    }

    /**
     * Test for GitLabRemoteRepository class
     */
    public function testGitLabRemoteRepositoryExternalInTeam(): void
    {
        // Example: https://salsa.debian.org/php-team/pear/php-u2f-php-server/-/blob/debian/latest/src/RegistrationRequest.php#L6
        $repo = new GitLabRemoteRepository('php-team/pear/php-u2f-php-server', './', 'https://salsa.debian.org/');
        $this->assertEquals(
            'https://salsa.debian.org/php-team/pear/php-u2f-php-server/-/blob/debian/latest/src/RegistrationRequest.php#L6',
            $repo->getFileUrl('debian/latest', 'src/RegistrationRequest.php', 6)
        );
        $this->assertEquals('src/RegistrationRequest.php', $repo->getRelativePath('./src/RegistrationRequest.php'));
        $this->assertEquals('', $repo->getRelativePath('src/RegistrationRequest.php'));
    }

}
