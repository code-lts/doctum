.PHONY: make-release update-release release upload-release

make-release:
	./scripts/make-release.sh

rebuild-release:
	./scripts/make-release.sh rebuild
	./scripts/update-release.sh

update-release:
	./scripts/update-release.sh

tag:
	./scripts/tag-release.sh

release: make-release update-release
	@echo "Done"

upload-release:
	@git log --graph -4 --format="%H %s - %b - %G?" gh-pages
	@git push --dry-run origin gh-pages:gh-pages
	@sleep 2
	@git push origin gh-pages:gh-pages
