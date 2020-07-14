<?php

/*
 * This file is part of the Doctum utility.
 *
 * (c) Fabien Potencier <fabien@symfony.com>
 *
 * This source file is subject to the MIT license that is bundled
 * with this source code in the file LICENSE.
 */

namespace Doctum\Version;

class Version
{
    protected $isFrozen;
    protected $name;
    protected $longname;

    public function __construct($name, $longname = null)
    {
        $this->name = $name;
        $this->longname = null === $longname ? $name : $longname;
        $this->isFrozen = false;
    }

    public function __toString()
    {
        return $this->name;
    }

    public function setName(string $name): void
    {
        $this->name = $name;
    }

    public function getName()
    {
        return $this->name;
    }

    public function getLongName()
    {
        return $this->longname;
    }

    public function setFrozen($isFrozen)
    {
        $this->isFrozen = (bool) $isFrozen;
    }

    public function isFrozen()
    {
        return $this->isFrozen;
    }
}
