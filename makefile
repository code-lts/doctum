phar:
	rm -rf ./build/*
	composer update --no-dev
	php -dphar.readonly=0 ./scripts/phar-generator-script.php
	composer update

update-release:
	git checkout gh-pages
	cp build/* releases/latest/
	git add -A releases/latest/*
	git commit -S -m "Update latest release"
	git checkout -
