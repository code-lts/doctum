<?php

/*
 * This file is part of the Doctum utility.
 *
 * This source file is subject to the MIT license that is bundled
 * with this source code in the file LICENSE.
 */

namespace Doctum\Parser;

final class ParseError
{
    /** @var string */
    private $message;
    /** @var string|null */
    private $file;
    /** @var int */
    private $line;

    public function __construct(string $message, ?string $file, int $line)
    {
        $this->message = $message;
        $this->file = $file;
        $this->line = $line;
    }

    public function __toString()
    {
        return sprintf('%s in %s:%d', $this->message, $this->file ?? '', $this->line);
    }
}
