make-phar:
	composer update --no-dev
	php -dphar.readonly=0 ./scripts/phar-generator-script.php
	composer update