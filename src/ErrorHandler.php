<?php

declare(strict_types = 1);

/*
 * This file is part of the Doctum utility.
 *
 * (c) Fabien Potencier <fabien@symfony.com>
 *
 * This source file is subject to the MIT license that is bundled
 * with this source code in the file LICENSE.
 */

namespace Doctum;

final class ErrorHandler
{
    private const ERROR_LEVELS = [
        E_ERROR => 'Error',
        E_WARNING => 'Warning',
        E_NOTICE => 'Notice',
        E_USER_ERROR => 'User Error',
        E_USER_WARNING => 'User Warning',
        E_USER_NOTICE => 'User Notice',
        E_USER_DEPRECATED => 'User Deprecation notice',
        E_RECOVERABLE_ERROR => 'Catchable Fatal Error',
    ];

    /**
     * Registers the error handler.
     */
    public static function register(): void
    {
        set_error_handler([new static(), 'handle']);
    }

    /**
     * @throws \ErrorException When error_reporting returns error
     */
    public function handle($level, $message, $file = 'unknown', $line = 0, $context = []): bool
    {
        /**
         * Check if Error Control Operator (@) was used
         * See: https://php.watch/versions/8.0/fatal-error-suppression#suppress-error-handlers
         */
        $isSilenced = ! (error_reporting() & $level);

        if (! $isSilenced) {
            throw new \ErrorException(sprintf('%s: %s in %s line %d', self::ERROR_LEVELS[$level] ?? $level, $message, $file, $line));
        }

        return false;
    }

}
