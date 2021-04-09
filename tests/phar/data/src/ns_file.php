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
        /**
         * (PHP 5 &gt;= 5.1.0, PHP 7, PECL pdo &gt;= 0.1.0)<br/>
         * Prepares a statement for execution and returns a statement object
         * @link https://php.net/manual/en/pdo.prepare.php
         * @param string $query <p>
         * This must be a valid SQL statement for the target database server.
         * </p>
         * @param array $options [optional] <p>
         * This array holds one or more key=&gt;value pairs to set
         * attribute values for the <b>PDOStatement</b> object that this method
         * returns. You would most commonly use this to set the
         * <b>PDO::ATTR_CURSOR</b> value to
         * <b>PDO::CURSOR_SCROLL</b> to request a scrollable cursor.
         * Some drivers have driver specific options that may be set at
         * prepare-time.
         * </p>
         * @return PDOStatement|false If the database server successfully prepares the statement,
         * <b>PDO::prepare</b> returns a
         * <b>PDOStatement</b> object.
         * If the database server cannot successfully prepare the statement,
         * <b>PDO::prepare</b> returns <b>FALSE</b> or emits
         * <b>PDOException</b> (depending on error handling).
         * </p>
         * <p>
         * Emulated prepared statements does not communicate with the database server
         * so <b>PDO::prepare</b> does not check the statement.
         */
        public function prepare($query, array $options = []) {}
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
