.PHONY: make-release update-release release

make-release:
	./scripts/make-release.sh

update-release:
	./scripts/update-release.sh

release: make-release update-release
	@echo "Done"
