<?php
/**
 * @source https://www.php.net/manual/fr/language.namespaces.importing.php#119970
 */
namespace SuperCoolLibrary
{
    class Meta
    {
        static public function getVersion()
        {
            return '2.7.1';
        }
    }
}

namespace
{
    use SuperCoolLibrary\Meta;
    echo Meta::getVersion();//outputs 2.7.1
}

namespace
{
    echo Meta::getVersion();//fatal error
}

namespace
{

    /**
     * Zstandard compression.
     *
     * @param string $data The string to compress.
     * @param int $level The level of compression (1-22). (Defaults to 3, 0 for no compression).
     *                      A value smaller than 0 means a faster compression level. (Zstandard library 1.3.4 or later)
     *
     * @return string|false Returns the compressed data or FALSE if an error occurred.
     */
    function zstd_compress(string $data, int $level = 3): string|false {}
}
