<?php

declare(strict_types = 1);

/*
 * This file is part of the Doctum utility.
 *
 * This source file is subject to the MIT license that is bundled
 * with this source code in the file LICENSE.
 */

namespace Doctum\Console\Command;

use Doctum\Doctum;
use Phar;
use Symfony\Component\Console\Command\Command as BaseCommand;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;

class VersionCommand extends BaseCommand
{

    /**
     * @phpstan-return void
     */
    protected function configure()
    {
        parent::configure();

        $this
            ->setName('version')
            ->setDescription('Know everything about this version')
            ->setHelp(
                <<<EOF
The <info>%command.name%</info> command gives you access to version data:

    <info>php %command.full_name%</info>

To print everything in the JSON format:
    <info>php %command.full_name% --json</info>
EOF
            );
        $this->getDefinition()->addOption(
            new InputOption('json', null, InputOption::VALUE_NONE, 'Show the data in a JSON format')
        );
    }

    protected function execute(InputInterface $input, OutputInterface $output)
    {
        $data = [
            'version' => Doctum::VERSION,
            'major' => Doctum::VERSION_MAJOR,
            'minor' => Doctum::VERSION_MINOR,
            'patch' => Doctum::VERSION_PATCH,
            'is_dev_version' => Doctum::IS_DEV,
            'license' => 'MIT',
            'phar_metadata' => null,
        ];
        if (class_exists(Phar::class)) {
            $pharPath = Phar::running(false);
            if ($pharPath !== '') {
                $phar_self             = new Phar($pharPath);
                $metadata              = $phar_self->getMetadata();
                $data['phar_metadata'] = $metadata;
            }
        }
        if ($input->getOption('json')) {
            $jsonData = json_encode($data, JSON_PRETTY_PRINT);
            if ($jsonData === false) {
                return 1;
            }
            $output->writeln($jsonData);
            return 0;
        }
        $output->writeln($data['version']);
        return 0;
    }

}
