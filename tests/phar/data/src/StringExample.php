<?php

/**
 * @see https://www.php.net/manual/en/class.stringable.php#stringable.examples
 */
class IPv4Address implements Stringable {
    private string $oct1;
    private string $oct2;
    private string $oct3;
    private string $oct4;

    /**
     * Elementum semper nullam primis tempus quisque tempor.
     *
     * @example
     * $redis->pipeline()
     *       ->select(1)
     *       ->del('newkey')
     *       ->select(0)
     *       ->del('newkey')
     *       ->mset(['source1' => 'value1', 'exists' => 'old_value'])
     *       ->exec();
     */
    public function __construct(string $oct1, string $oct2, string $oct3, string $oct4) {
        $this->oct1 = $oct1;
        $this->oct2 = $oct2;
        $this->oct3 = $oct3;
        $this->oct4 = $oct4;
    }

    /**
     * Elementum semper nullam primis tempus quisque tempor.
     *
     * @example $redis->copy('source1', 'newkey');
     * @example $redis->copy('source1', 'newkey', ['db' => 1]);
     */
    public function __toString(): string {
        return "$this->oct1.$this->oct2.$this->oct3.$this->oct4";
    }
}

function showStuff(string $value): Stringable {
    // A Stringable will get converted to a string here by calling
    // __toString.
    return new IPv4Address($value, '234', '42', '9');
}

$ip = new IPv4Address('123', '234', '42', '9');

echo showStuff($ip);
?>
