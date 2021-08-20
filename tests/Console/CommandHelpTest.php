<?php

declare(strict_types = 1);

namespace Doctum\Tests\Console;

use Doctum\Console\Command\ParseCommand;
use Doctum\Console\Command\RenderCommand;
use Doctum\Console\Command\UpdateCommand;
use Doctum\Tests\AbstractTestCase;

/**
 * @author William Desportes <williamdes@wdes.fr>
 */
class CommandHelpTest extends AbstractTestCase
{

    public function testParseHelp(): void
    {
        $command      = new ParseCommand();
        $helpContents = 'The <info>parse</info> command parses a project and generates a database' . "\n"
            . 'with API information:' . "\n"
            . "\n"
            . '    <info>php vendor/bin/phpunit parse config/symfony.php</info>' . "\n"
            . "\n"
            . 'The <comment>--force</comment> option forces a rebuild (it disables the' . "\n"
            . 'incremental parsing algorithm):' . "\n"
            . "\n"
            . '    <info>php vendor/bin/phpunit parse config/symfony.php --force</info>' . "\n"
            . "\n"
            . 'The <comment>--version</comment> option overrides the version specified' . "\n"
            . 'in the configuration:' . "\n"
            . "\n"
            . '    <info>php vendor/bin/phpunit parse config/symfony.php --version=main</info>';
        $this->assertSame(
            $helpContents,
            $command->getProcessedHelp()
        );
    }

    public function testRenderHelp(): void
    {
        $command      = new RenderCommand();
        $helpContents = 'The <info>render</info> command renders a project as a static set of HTML files:' . "\n"
            . "\n"
            . '    <info>php vendor/bin/phpunit render render config/doctum.php</info>' . "\n"
            . "\n"
            . 'The <comment>--force</comment> option forces a rebuild (it disables the' . "\n"
            . 'incremental rendering algorithm):' . "\n"
            . "\n"
            . '    <info>php vendor/bin/phpunit render render config/doctum.php --force</info>' . "\n"
            . "\n"
            . 'The <comment>--version</comment> option overrides the version specified' . "\n"
            . 'in the configuration:' . "\n"
            . "\n"
            . '    <info>php vendor/bin/phpunit render render config/doctum.php --version=main</info>';
        $this->assertSame(
            $helpContents,
            $command->getProcessedHelp()
        );
    }

    public function testUpdateHelp(): void
    {
        $command      = new UpdateCommand();
        $helpContents = 'The <info>update</info> command parses and renders a project:' . "\n"
            . "\n"
            . '    <info>php vendor/bin/phpunit update config/symfony.php</info>' . "\n"
            . "\n"
            . 'This command is the same as running the parse command followed' . "\n"
            . 'by the render command.';
        $this->assertSame(
            $helpContents,
            $command->getProcessedHelp()
        );
    }

}
