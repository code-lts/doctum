<?php

use Foo\Foo;

/**
 * Permet de vérifier la présence de paramètres dans la requête
 */
function requireArgs($keys){
    foreach($keys as $key){
        if(!isset($_POST[$key])){
            $out->error = "paramètre ".$key." manquant";
            http_response_code(400);
            return false;
        }
    }
    return true;
}
function send_to_api($obj){
        $uuidRequest = microtime();
        $ch = curl_init();
        // [...]

    return new SimpleXMLElement($r);
}

/**
 * @access protected
 * @internal Our echo
 * @deprecated v10
 */
function echoContents(): string
{
    return 'echo echo echo';
}
echoContents();

/**
 * Do a complex operation
 *
 * @param int $i
 * @param array[] $a
 * @param string[] ...$b
 * @return string
 */
function complexOperations(int $i, $a, ...$b): string
{
    return 'echo echo echo';
}

/**
 * Do a complex operation
 *
 * @param int $i
 * @param Foo $a
 * @param string[] ...$b
 * @return Foo
 *
 * @todo v20
 * @since 1.0.0
 *
 * @example foo bar
 *
 * @throws \Exception
 */
function giveMeFoo(int $i, Foo $a, ...$b): Foo
{
    return new Foo();
}
?>
