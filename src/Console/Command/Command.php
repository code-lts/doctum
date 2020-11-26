<?php

/*
 * This file is part of the Doctum utility.
 *
 * (c) Fabien Potencier <fabien@symfony.com>
 *
 * This source file is subject to the MIT license that is bundled
 * with this source code in the file LICENSE.
 */

namespace Doctum\Console\Command;

use Doctum\Message;
use Doctum\Parser\Transaction;
use Doctum\Project;
use Doctum\Renderer\Diff;
use Doctum\Doctum;
use Symfony\Component\Console\Command\Command as BaseCommand;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Filesystem\Filesystem;

abstract class Command extends BaseCommand
{
    private const PARSE_ERROR = 64;

    /**
     * @var Doctum
     */
    protected $doctum;

    /**
     * @var string
     */
    protected $version;

    /**
     * @var bool
     */
    protected $started;

    /**
     * @var array<string,Diff>
     */
    protected $diffs = [];

    /**
     * @var array<string,Transaction>
     */
    protected $transactions = [];

    /**
     * @var \Doctum\Parser\ParseError[]
     */
    protected $errors = [];

    /**
     * @var InputInterface
     */
    protected $input;

    /**
     * @var OutputInterface
     */
    protected $output;

    /**
     * @see Command
     * @phpstan-return void
     */
    protected function configure()
    {
        $this->getDefinition()->addArgument(new InputArgument('config', InputArgument::REQUIRED, 'The configuration file'));
        $this->getDefinition()->addOption(new InputOption('only-version', '', InputOption::VALUE_REQUIRED, 'The version to build'));
    }

    protected function addForceOption(): void
    {
        $this->getDefinition()->addOption(new InputOption('force', '', InputOption::VALUE_NONE, 'Forces to rebuild from scratch', null));
    }

    protected function addIgnoreParseErrors(): void
    {
        $this->getDefinition()->addOption(
            new InputOption('ignore-parse-errors', '', InputOption::VALUE_NONE, 'Ignores parse errors and exits 0', null)
        );
    }

    /**
     * @phpstan-return void
     */
    protected function initialize(InputInterface $input, OutputInterface $output)
    {
        $this->input = $input;
        $this->output = $output;

        /** @var string $config */
        $config = $input->getArgument('config');
        $filesystem = new Filesystem();

        if ($config && !$filesystem->isAbsolutePath($config)) {
            $config = getcwd() . '/' . $config;
        }

        if (!is_file($config)) {
            throw new \InvalidArgumentException(sprintf('Configuration file "%s" does not exist.', $config));
        }

        $this->doctum = $this->loadDoctum($config);

        if (!$this->doctum instanceof Doctum) {
            throw new \RuntimeException(sprintf('Configuration file "%s" must return a Doctum instance.', $config));
        }

        if ($input->getOption('only-version')) {
            /** @var string $onlyVersionOption */
            $onlyVersionOption = $input->getOption('only-version');
            $this->doctum->setVersion((string) $onlyVersionOption);
        }

    }

    public function update(Project $project): int
    {
        $callback = $this->output->isDecorated() ? [$this, 'messageCallback'] : null;

        $project->update($callback, $this->input->getOption('force'));

        $this->displayParseSummary();
        $this->displayRenderSummary();

        return $this->getExitCode();
    }

    public function parse(Project $project): int
    {
        $project->parse([$this, 'messageCallback'], $this->input->getOption('force'));

        $this->displayParseSummary();

        return $this->getExitCode();
    }

    public function render(Project $project): int
    {
        $project->render([$this, 'messageCallback'], $this->input->getOption('force'));

        $this->displayRenderSummary();

        return $this->getExitCode();
    }

    private function getExitCode(): int
    {
        if ($this->input->getOption('ignore-parse-errors')) {
            return 0;
        }
        if (count($this->errors) > 0) {
            return self::PARSE_ERROR;
        }
        return 0;
    }

    /**
     * @param mixed $data
     */
    public function messageCallback(int $message, $data): void
    {
        switch ($message) {
            case Message::PARSE_CLASS:
                [$progress, $class] = $data;
                $this->displayParseProgress($progress, $class);
                break;
            case Message::PARSE_ERROR:
                $this->errors = array_merge($this->errors, $data);
                break;
            case Message::SWITCH_VERSION:
                $this->version = $data;
                $this->errors = [];
                $this->started = false;
                $this->displaySwitch();
                break;
            case Message::PARSE_VERSION_FINISHED:
                $this->transactions[(string) $this->version] = $data;
                $this->displayParseEnd($data);
                $this->started = false;
                break;
            case Message::RENDER_VERSION_FINISHED:
                $this->diffs[(string) $this->version] = $data;
                $this->displayRenderEnd($data);
                $this->started = false;
                break;
            case Message::RENDER_PROGRESS:
                [$section, $message, $progression] = $data;
                $this->displayRenderProgress($section, $message, $progression);
                break;
        }
    }

    public function renderProgressBar(float $percent, int $length): string
    {
        return
            str_repeat('#', (int) floor($percent / 100 * $length))
            . sprintf(' %d%%', $percent)
            . str_repeat(' ', $length - ((int) floor($percent / 100 * $length)))
        ;
    }

    /**
     * @param \Doctum\Reflection\ClassReflection $class
     */
    public function displayParseProgress(float $progress, $class): void
    {
        if ($this->started) {
            $this->output->isDecorated() && $this->output->write("\033[2A");
        }
        $this->started = true;

        $this->output->isDecorated() && $this->output->write(
            sprintf(
                "  Parsing <comment>%s</comment>%s\033[K\n          %s\033[K\n",
                $this->renderProgressBar($progress, 50),
                count($this->errors) ? ' <fg=red>' . count($this->errors) . ' error' . (1 === count($this->errors) ? '' : 's') . '</>' : '',
                $class->getName()
            )
        );
    }

    public function displayRenderProgress(string $section, string $message, float $progression): void
    {
        if ($this->started) {
            $this->output->isDecorated() && $this->output->write("\033[2A");
        }
        $this->started = true;

        $this->output->isDecorated() && $this->output->write(sprintf(
            "  Rendering <comment>%s</comment>\033[K\n            <info>%s</info> %s\033[K\n",
            $this->renderProgressBar($progression, 50),
            $section,
            $message
        ));
    }

    public function displayParseEnd(Transaction $transaction): void
    {
        if (!$this->started) {
            return;
        }

        $this->output->isDecorated() && $this->output->write(
            "\033[2A<info>  Parsing   done</info>\033[K\n\033[K\n\033[1A"
        );

        if ($this->output->isVerbose() && count($this->errors) > 0) {
            foreach ($this->errors as $error) {
                $this->output->write('<fg=red>ERROR</>: ');
                $this->output->writeln($error->__toString(), OutputInterface::OUTPUT_RAW);
            }
            $this->output->writeln('');
        }
    }

    public function displayRenderEnd(Diff $diff): void
    {
        if (!$this->started) {
            return;
        }

        $this->output->isDecorated() && $this->output->write("\033[2A<info>  Rendering done</info>\033[K\n\033[K\n\033[1A");
    }

    public function displayParseSummary(): void
    {
        if (count($this->transactions) <= 0) {
            return;
        }

        $this->output->writeln('');
        $this->output->writeln('<bg=cyan;fg=white> Version </>  <bg=cyan;fg=white> Updated C </>  <bg=cyan;fg=white> Removed C </>');

        foreach ($this->transactions as $version => $transaction) {
            $this->output->writeln(sprintf('%9s  %11d  %11d', $version, count($transaction->getModifiedClasses()), count($transaction->getRemovedClasses())));
        }
        $this->output->writeln('');
    }

    public function displayRenderSummary(): void
    {
        if (count($this->diffs) <= 0) {
            return;
        }

        $this->output->writeln('<bg=cyan;fg=white> Version </>  <bg=cyan;fg=white> Updated C </>  <bg=cyan;fg=white> Updated N </>  <bg=cyan;fg=white> Removed C </>  <bg=cyan;fg=white> Removed N </>');

        foreach ($this->diffs as $version => $diff) {
            $this->output->writeln(sprintf(
                '%9s  %11d  %11d  %11d  %11d',
                $version,
                count($diff->getModifiedClasses()),
                count($diff->getModifiedNamespaces()),
                count($diff->getRemovedClasses()),
                count($diff->getRemovedNamespaces())
            ));
        }
        $this->output->writeln('');
    }

    public function displaySwitch(): void
    {
        $this->output->writeln(sprintf("\n<fg=cyan>Version %s</>", $this->version));
    }

    /**
     * @return Doctum
     */
    private function loadDoctum(string $config)
    {
        return require $config;
    }
}
