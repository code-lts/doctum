<?php

$obj = new stdClass;

function getWeakRef(stdClass $obj): WeakReference
{
    return WeakReference::create($obj);
}

/**
 * Binary safe bzip2 file read
 * @link https://php.net/manual/en/function.bzread.php
 * @param resource $bz <p>
 * The file pointer. It must be valid and must point to a file
 * successfully opened by <b>bzopen</b>.
 * </p>
 * @param int $length [optional] <p>
 * If not specified, <b>bzread</b> will read 1024
 * (uncompressed) bytes at a time. A maximum of 8192
 * uncompressed bytes will be read at a time.
 * </p>
 * @return string|false the uncompressed data, or <b>FALSE</b> on error.
 */
function bzread($bz, int $length = 1024): string|false {}
