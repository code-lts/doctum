<?php

declare(strict_types = 1);

namespace Doctum\Tests\Console;

use Doctum\Console\Command\ParseCommand;
use Doctum\Console\Command\RenderCommand;
use Doctum\Console\Command\UpdateCommand;
use Doctum\Message;
use Doctum\Parser\Transaction;
use Doctum\Renderer\Diff;
use Doctum\Tests\AbstractTestCase;
use Symfony\Component\Console\Tester\CommandTester;

/**
 * @author William Desportes <williamdes@wdes.fr>
 */
class CommandTest extends AbstractTestCase
{

    public function testParseEndBeforeStart(): void
    {
        $command       = new ParseCommand();
        $commandTester = new CommandTester($command);

        $commandTester->execute(['config' => $this->getTestConfigFilePath(), '--no-progress' => true, '--force' => true]);
        $command->messageCallback(Message::PARSE_VERSION_FINISHED, new Transaction(self::getProject()));
        $this->assertSame(
            "\n"
                . "\n"
                . 'Version main' . "\n"
                . '------------' . "\n" . "\n"
                . 'Parsing project' . "\n"
                . ' Version    Updated C    Removed C ' . "\n"
                . '     main            0            0' . "\n"
                . "\n",
            $commandTester->getDisplay()
        );
    }

    public function testRenderEndBeforeStart(): void
    {
        $command       = new RenderCommand();
        $commandTester = new CommandTester($command);

        $commandTester->execute(['config' => $this->getTestConfigFilePath(), '--no-progress' => true, '--force' => true]);
        $command->messageCallback(Message::RENDER_VERSION_FINISHED, new Diff(self::getProject(), 'foo.php'));
        $this->assertSame(
            "\n"
                . "\n"
                . 'Version main' . "\n"
                . '------------' . "\n" . "\n" . "\n"
                . 'Rendering Global index.html' . "\n"
                . 'Rendering Global doc-index.html' . "\n"
                . 'Rendering Global namespaces.html' . "\n"
                . 'Rendering Global classes.html' . "\n"
                . 'Rendering Global interfaces.html' . "\n"
                . 'Rendering Global traits.html' . "\n"
                . 'Rendering Global opensearch.xml' . "\n"
                . 'Rendering Global search.html' . "\n"
                . 'Rendering Global doctum.js' . "\n"
                . 'Rendering Global doctum-search.json' . "\n"
                . 'Rendering done' . "\n"
                . "\n"
                . 'Rendering project' . "\n"
                . ' Version    Updated C    Updated N    Removed C    Removed N ' . "\n"
                . '     main            0            0            0            0' . "\n"
                . "\n",
            $commandTester->getDisplay()
        );
    }

    public function testUpdateCommandRun(): void
    {
        $command       = new UpdateCommand();
        $commandTester = new CommandTester($command);

        $commandTester->execute(['config' => $this->getTestConfigFilePath(), '--no-progress' => true, '--force' => true]);
        $command->messageCallback(Message::RENDER_VERSION_FINISHED, new Diff(self::getProject(), 'foo.php'));
        $this->assertSame(
            'Updating project' . "\n"
                . "\n"
                . 'Version main' . "\n"
                . '------------' . "\n" . "\n" . "\n"
                . 'Rendering Global index.html' . "\n"
                . 'Rendering Global doc-index.html' . "\n"
                . 'Rendering Global namespaces.html' . "\n"
                . 'Rendering Global classes.html' . "\n"
                . 'Rendering Global interfaces.html' . "\n"
                . 'Rendering Global traits.html' . "\n"
                . 'Rendering Global opensearch.xml' . "\n"
                . 'Rendering Global search.html' . "\n"
                . 'Rendering Global doctum.js' . "\n"
                . 'Rendering Global doctum-search.json' . "\n"
                . 'Rendering done' . "\n"
                . "\n"
                . "\n"
                . ' Version    Updated C    Removed C ' . "\n"
                . '     main            0            0' . "\n"
                . "\n"
                . "\n"
                . ' Version    Updated C    Updated N    Removed C    Removed N ' . "\n"
                . '     main            0            0            0            0' . "\n"
                . "\n",
            $commandTester->getDisplay()
        );
    }

}
