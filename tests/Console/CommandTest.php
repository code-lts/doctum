<?php

namespace Doctum\Tests\Command;

use Doctum\Console\Command\ParseCommand;
use Doctum\Console\Command\RenderCommand;
use Doctum\Message;
use Doctum\Parser\Transaction;
use Doctum\Project;
use Doctum\Renderer\Diff;
use Doctum\Store\ArrayStore;
use PHPUnit\Framework\TestCase;
use Symfony\Component\Console\Tester\CommandTester;

/**
 * @author William Desportes <williamdes@wdes.fr>
 */
class CommandTest extends TestCase
{

    public function testParseEndBeforeStart(): void
    {
        $store = new ArrayStore();
        $project = new Project($store);

        $command = new ParseCommand();
        $commandTester = new CommandTester($command);
        $config = __DIR__ . DIRECTORY_SEPARATOR . '..' . DIRECTORY_SEPARATOR . 'data' . DIRECTORY_SEPARATOR . 'doctum.php';
        $commandTester->execute(['config' => $config, '--version']);
        $command->messageCallback(Message::PARSE_VERSION_FINISHED, new Transaction($project));
        $this->assertSame(
            "\n"
                . "\n"
                . 'Version main' . "\n"
                . '-------------' . "\n" . "\n"
                . 'Parsing project' . "\n"
                . ' Version    Updated C    Removed C ' . "\n"
                . '     main            0            0' . "\n"
                . '' . "\n",
            $commandTester->getDisplay()
        );
    }

    public function testRenderEndBeforeStart(): void
    {
        $store = new ArrayStore();
        $project = new Project($store);

        $command = new RenderCommand();
        $commandTester = new CommandTester($command);
        $config = __DIR__ . '/../data/doctum.php';
        $commandTester->execute(['config' => $config, '--version']);
        $command->messageCallback(Message::RENDER_VERSION_FINISHED, new Diff($project, 'foo.php'));
        $this->assertSame(
            "\n"
                . "\n"
                . 'Version main' . "\n"
                . '-------------' . "\n"
                . '' . "\n"
                . 'Rendering project Version    Updated C    Updated N    Removed C    Removed N ' . "\n"
                . '     main            0            0            0            0' . "\n"
                . '' . "\n",
            $commandTester->getDisplay()
        );
    }
}
