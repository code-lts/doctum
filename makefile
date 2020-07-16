phar:
	rm -rf ./build/*
	composer update --no-dev
	php -dphar.readonly=0 ./scripts/phar-generator-script.php
	composer update

update-release:
	echo $$(./bin/doctum.php --version | cut -d ' ' -f 2 | sed -e 's/^[[:space:]]*//') > ./build/VERSION
	git checkout gh-pages
	rm -rf releases/latest/*
	cp build/* releases/latest/
	git add -A releases/latest/*
	git commit -S -m "Update latest release"
	git checkout -
