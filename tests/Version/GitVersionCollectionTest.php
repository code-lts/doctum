<?php

declare(strict_types = 1);

namespace Doctum\Tests\Version;

use Doctum\Tests\AbstractTestCase;
use Doctum\Version\GitVersionCollection;
use Doctum\Version\Version;

class GitVersionCollectionTest extends AbstractTestCase
{

    public function testConstruct(): void
    {
        $o = new GitVersionCollection('');
        $this->assertSame(0, $o->count());
        $this->assertSame([], $o->getVersions());
    }

    public function testSetGitPath(): void
    {
        $o = new GitVersionCollection('');
        $o->setGitPath('');
        $this->assertSame(0, $o->count());
        $this->assertSame([], $o->getVersions());
    }

    public function testConstructAddVersion(): void
    {
        $o = $this->getMockBuilder(GitVersionCollection::class)
            ->onlyMethods(['execute'])
            ->setConstructorArgs([''])
            ->getMock();
        $o->expects($this->exactly(1))
            ->method('execute')
            ->willReturnOnConsecutiveCalls(
                [
                    [
                        'tag',
                    ],
                ]
            )->willReturnOnConsecutiveCalls(
                'RC' . "\n"
                . 'v5.0.0' . "\n"
                . 'v5.0.1' . "\n"
                . 'v5.0.2' . "\n"
                . 'v5.0.3' . "\n"
                . 'v5.1.0' . "\n"
                . 'v5.2.0' . "\n"
                . '' . "\n"
                . 'ALPHA' . "\n"
                . 'v5.2.1' . "\n"
                . 'v5.3.0' . "\n"
                . 'v5.3.1' . "\n"
                . 'v5.3.2' . "\n"
                . 'v5.4.0'
            );
        /** @var GitVersionCollection $o */
        $o->addFromTags();
        $this->assertSame(11, $o->count());
        $this->assertEquals(
            [
                $this->getVersion('v5.0.0'),
                $this->getVersion('v5.0.1'),
                $this->getVersion('v5.0.2'),
                $this->getVersion('v5.0.3'),
                $this->getVersion('v5.1.0'),
                $this->getVersion('v5.2.0'),
                $this->getVersion('v5.2.1'),
                $this->getVersion('v5.3.0'),
                $this->getVersion('v5.3.1'),
                $this->getVersion('v5.3.2'),
                $this->getVersion('v5.4.0'),
            ],
            $o->getVersions()
        );
    }

    public function testConstructAddFromTagsNonSensitiveMatchIgnore(): void
    {
        $o = $this->getMockBuilder(GitVersionCollection::class)
            ->onlyMethods(['execute'])
            ->setConstructorArgs([''])
            ->getMock();
        $o->expects($this->exactly(1))
            ->method('execute')
            ->willReturnOnConsecutiveCalls(
                [
                    [
                        'tag',
                    ],
                ]
            )->willReturnOnConsecutiveCalls(
                'RC' . "\n"
                . 'rc' . "\n"
                . 'v5.0.0' . "\n"
                . 'v5.0.1' . "\n"
                . 'v5.0.1-RC' . "\n"
                . 'rc-v5.0.1' . "\n"
                . 'v5.0.2' . "\n"
                . 'v5.0.3' . "\n"
                . 'v5.1.0' . "\n"
                . 'v5.1.0-beta' . "\n"
                . 'beta-v5.1.0' . "\n"
                . 'v5.2.0' . "\n"
                . '' . "\n"
                . 'ALPHA' . "\n"
                . 'alpha' . "\n"
                . 'v5.2.1' . "\n"
                . 'v5.2.1-alpha1' . "\n"
                . 'v5.3.0' . "\n"
                . 'PR' . "\n"
                . 'pr' . "\n"
                . 'v5.3.1' . "\n"
                . 'v5.3.1-pr2' . "\n"
                . 'v5.3.2' . "\n"
                . 'v5.3.2beta1' . "\n"
                . 'betav5.3.2beta1' . "\n"
                . 'betav5.3.2' . "\n"
                . 'BETA' . "\n"
                . 'beta' . "\n"
                . 'v5.4.0'
            );
        /** @var GitVersionCollection $o */
        $o->addFromTags();
        $this->assertSame(11, $o->count());
        $this->assertEquals(
            [
                $this->getVersion('v5.0.0'),
                $this->getVersion('v5.0.1'),
                $this->getVersion('v5.0.2'),
                $this->getVersion('v5.0.3'),
                $this->getVersion('v5.1.0'),
                $this->getVersion('v5.2.0'),
                $this->getVersion('v5.2.1'),
                $this->getVersion('v5.3.0'),
                $this->getVersion('v5.3.1'),
                $this->getVersion('v5.3.2'),
                $this->getVersion('v5.4.0'),
            ],
            $o->getVersions()
        );
    }

    public function testConstructAddVersionReorder(): void
    {
        $o = $this->getMockBuilder(GitVersionCollection::class)
            ->onlyMethods(['execute'])
            ->setConstructorArgs([''])
            ->getMock();
        $o->expects($this->exactly(1))
            ->method('execute')
            ->willReturnOnConsecutiveCalls(
                [
                    [
                        'tag',
                    ],
                ]
            )->willReturnOnConsecutiveCalls(
                'RC' . "\n"
                . 'v5.3.1' . "\n"
                . 'v5.0.1' . "\n"
                . 'v5.0.3' . "\n"
                . 'v5.1.0' . "\n"
                . 'v5.3.2' . "\n"
                . 'v5.2.0' . "\n"
                . '' . "\n"
                . 'ALPHA' . "\n"
                . 'v5.2.1' . "\n"
                . 'v5.0.2' . "\n"
                . 'v5.3.0' . "\n"
                . 'v5.0.0' . "\n"
                . 'v5.4.0'
            );
        /** @var GitVersionCollection $o */
        $o->addFromTags();
        $this->assertSame(11, $o->count());
        $versions = $o->getVersions();
        foreach ($versions as &$version) {
            $version = $version->__toString();
        }
        $this->assertSame(
            [
                $this->getVersion('v5.0.0')->__toString(),
                $this->getVersion('v5.0.1')->__toString(),
                $this->getVersion('v5.0.2')->__toString(),
                $this->getVersion('v5.0.3')->__toString(),
                $this->getVersion('v5.1.0')->__toString(),
                $this->getVersion('v5.2.0')->__toString(),
                $this->getVersion('v5.2.1')->__toString(),
                $this->getVersion('v5.3.0')->__toString(),
                $this->getVersion('v5.3.1')->__toString(),
                $this->getVersion('v5.3.2')->__toString(),
                $this->getVersion('v5.4.0')->__toString(),
            ],
            $versions
        );
    }

    public function testConstructAddVersionFilterNullWithSorter(): void
    {
        $o = $this->getMockBuilder(GitVersionCollection::class)
            ->onlyMethods(['execute'])
            ->setConstructorArgs([''])
            ->getMock();
        $o->expects($this->exactly(1))
            ->method('execute')
            ->willReturnOnConsecutiveCalls(
                [
                    [
                        'tag',
                    ],
                ]
            )->willReturnOnConsecutiveCalls(
                'RC' . "\n"
                . 'v5.0.0' . "\n"
                . 'v5.0.1' . "\n"
                . 'v5.0.2' . "\n"
                . 'v5.0.3' . "\n"
                . 'v5.1.0' . "\n"
                . 'v5.2.0' . "\n"
                . '' . "\n"
                . 'ALPHA' . "\n"
                . 'v5.2.1' . "\n"
                . 'v5.3.0' . "\n"
                . 'v5.3.1' . "\n"
                . 'v5.3.2' . "\n"
                . 'v5.4.0'
            );
        /** @var GitVersionCollection $o */
        $o->setSorter(
            static function (string $version): int {
                if (in_array($version, ['v5.0.0', 'v5.0.1'])) {
                    return 1;
                }
                return 0;
            }
        );
        $o->addFromTags(null);
        $this->assertSame(11, $o->count());
        $versions = $o->getVersions();
        foreach ($versions as &$version) {
            $version = $version->__toString();
        }
        $this->assertSame(
            [
                $this->getVersion('v5.0.2')->__toString(),
                $this->getVersion('v5.0.3')->__toString(),
                $this->getVersion('v5.1.0')->__toString(),
                $this->getVersion('v5.2.0')->__toString(),
                $this->getVersion('v5.2.1')->__toString(),
                $this->getVersion('v5.3.0')->__toString(),
                $this->getVersion('v5.3.1')->__toString(),
                $this->getVersion('v5.3.2')->__toString(),
                $this->getVersion('v5.4.0')->__toString(),
                $this->getVersion('v5.0.1')->__toString(),
                $this->getVersion('v5.0.0')->__toString(),
            ],
            $versions
        );
    }

    public function testConstructAddVersionFilterNull(): void
    {
        $o = $this->getMockBuilder(GitVersionCollection::class)
            ->onlyMethods(['execute'])
            ->setConstructorArgs([''])
            ->getMock();
        $o->expects($this->exactly(1))
            ->method('execute')
            ->willReturnOnConsecutiveCalls(
                [
                    [
                        'tag',
                    ],
                ]
            )->willReturnOnConsecutiveCalls(
                'RC' . "\n"
                . 'v5.0.0' . "\n"
                . 'v5.0.1' . "\n"
                . 'v5.0.2' . "\n"
                . 'v5.0.3' . "\n"
                . 'v5.1.0' . "\n"
                . 'v5.2.0' . "\n"
                . '' . "\n"
                . 'ALPHA' . "\n"
                . 'v5.2.1' . "\n"
                . 'v5.3.0' . "\n"
                . 'v5.3.1' . "\n"
                . 'v5.3.2' . "\n"
                . 'v5.4.0'
            );
        /** @var GitVersionCollection $o */
        $o->addFromTags(null);
        $this->assertSame(11, $o->count());
        $this->assertEquals(
            [
                $this->getVersion('v5.0.0'),
                $this->getVersion('v5.0.1'),
                $this->getVersion('v5.0.2'),
                $this->getVersion('v5.0.3'),
                $this->getVersion('v5.1.0'),
                $this->getVersion('v5.2.0'),
                $this->getVersion('v5.2.1'),
                $this->getVersion('v5.3.0'),
                $this->getVersion('v5.3.1'),
                $this->getVersion('v5.3.2'),
                $this->getVersion('v5.4.0'),
            ],
            $o->getVersions()
        );
    }

    public function testConstructAddVersionCustomFilter(): void
    {
        $o = $this->getMockBuilder(GitVersionCollection::class)
            ->onlyMethods(['execute'])
            ->setConstructorArgs([''])
            ->getMock();
        $o->expects($this->exactly(1))
            ->method('execute')
            ->willReturnOnConsecutiveCalls(
                [
                    [
                        'tag',
                    ],
                ]
            )->willReturnOnConsecutiveCalls(
                'RC' . "\n"
                . 'v5.0.0' . "\n"
                . 'v5.0.1' . "\n"
                . 'v5.0.2' . "\n"
                . 'v5.0.3' . "\n"
                . 'v5.1.0' . "\n"
                . 'v5.2.0' . "\n"
                . '' . "\n"
                . 'ALPHA' . "\n"
                . 'v5.2.1' . "\n"
                . 'v5.3.0' . "\n"
                . 'v5.3.1' . "\n"
                . 'v5.3.2' . "\n"
                . 'v5.4.0'
            );
        /** @var GitVersionCollection $o */
        $o->setFilter(
            static function (string $version): bool {
                return ! in_array($version, ['v5.0.0', 'v5.0.1', 'v5.0.2', 'v5.0.3', 'v5.1.0', 'v5.2.0']);
            }
        );
        $o->addFromTags();
        $this->assertSame(7, $o->count());
        $this->assertEquals(
            [
                $this->getVersion('ALPHA'),
                $this->getVersion('v5.2.1'),
                $this->getVersion('v5.3.0'),
                $this->getVersion('v5.3.1'),
                $this->getVersion('v5.3.2'),
                $this->getVersion('v5.4.0'),
                $this->getVersion('RC'),
            ],
            $o->getVersions()
        );
    }

    public function testConstructAddVersionCustomFilterAndOverride(): void
    {
        $o = $this->getMockBuilder(GitVersionCollection::class)
            ->onlyMethods(['execute'])
            ->setConstructorArgs([''])
            ->getMock();
        $o->expects($this->exactly(1))
            ->method('execute')
            ->willReturnOnConsecutiveCalls(
                [
                    [
                        'tag',
                    ],
                ]
            )->willReturnOnConsecutiveCalls(
                'RC' . "\n"
                . 'v5.0.0' . "\n"
                . 'v5.0.1' . "\n"
                . 'v5.0.2' . "\n"
                . 'v5.0.3' . "\n"
                . 'v5.1.0' . "\n"
                . 'v5.2.0' . "\n"
                . '' . "\n"
                . 'ALPHA' . "\n"
                . 'v5.2.1' . "\n"
                . 'v5.3.0' . "\n"
                . 'v5.3.1' . "\n"
                . 'v5.3.2' . "\n"
                . 'v5.4.0'
            );
        /** @var GitVersionCollection $o */
        $o->setFilter(
            static function (string $version): bool {
                return ! in_array($version, ['v5.0.0', 'v5.0.1', 'v5.0.2', 'v5.0.3', 'v5.1.0', 'v5.2.0']);
            }
        );
        $o->addFromTags(
            static function (string $version): bool {
                return $version !== 'ALPHA';
            }
        );
        $this->assertSame(6, $o->count());
        $this->assertEquals(
            [
                $this->getVersion('v5.2.1'),
                $this->getVersion('v5.3.0'),
                $this->getVersion('v5.3.1'),
                $this->getVersion('v5.3.2'),
                $this->getVersion('v5.4.0'),
                $this->getVersion('RC'),
            ],
            $o->getVersions()
        );
    }

    public function testConstructAddVersionCustomFilterAndOverrideWithRegex(): void
    {
        $o = $this->getMockBuilder(GitVersionCollection::class)
            ->onlyMethods(['execute'])
            ->setConstructorArgs([''])
            ->getMock();
        $o->expects($this->exactly(1))
            ->method('execute')
            ->willReturnOnConsecutiveCalls(
                [
                    [
                        'tag',
                    ],
                ]
            )->willReturnOnConsecutiveCalls(
                'RC' . "\n"
                . 'v5.0.0' . "\n"
                . 'v5.0.1' . "\n"
                . 'v5.0.2' . "\n"
                . 'v5.0.3' . "\n"
                . 'v5.1.0' . "\n"
                . 'v5.2.0' . "\n"
                . '' . "\n"
                . 'ALPHA' . "\n"
                . 'v5.2.1' . "\n"
                . 'v5.3.0' . "\n"
                . 'v5.3.1' . "\n"
                . 'v5.3.2' . "\n"
                . 'v5.4.0'
            );
        /** @var GitVersionCollection $o */
        $o->setFilter(
            static function (string $version): bool {
                return ! in_array($version, ['v5.0.0', 'v5.0.1', 'v5.0.2', 'v5.0.3', 'v5.1.0', 'v5.2.0']);
            }
        );
        $o->addFromTags(['v5.0.*', 'v5.3.*']);
        $this->assertSame(3, $o->count());
        $this->assertEquals(
            [
                $this->getVersion('v5.3.0'),
                $this->getVersion('v5.3.1'),
                $this->getVersion('v5.3.2'),
            ],
            $o->getVersions()
        );
    }

    protected function getVersion(string $name): Version
    {
        $a = new Version($name);
        $a->setFrozen(true);
        return $a;
    }

}
