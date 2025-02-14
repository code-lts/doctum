# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased] - yyyy-mm-dd

- Drop PHP 7.4, PHP 8.0
- Attempt to reload the current page in a newly-selected version
- Support PHPUnit 10, 11 and 12
- Drop PHPUnit 7 and 8
- Support `nikic/php-parser` v5
- Support Symfony v7
- Drop Symfony 3.4, 4.3, 5.1, 5.2, 5.3 but still support ^5.4 (LTS)

## [5.5.4] - 2023-12-16

- Fix PHP 8.2 dynamic properties for configurations with the `language` key

## [5.5.3] - 2023-10-11

- Fix crash on `IntersectionType` (intersection types)

- Support `@category` tags on classes and methods

## [5.5.2] - 2023-03-12

- Fixed a JS null pointer error on Doctum.cleanSearchQuery
- Don't inject `<br>` tags into `<pre>` for `@examples`

## [5.5.1] - 2022-02-17

- Allow new/more versions of Symfony (^5|^6)
- Upgrade `phpdocumentor/reflection-docblock` to `~5.3`

## [5.5.0] - 2022-01-09

- Fixed PHP errors when non configuration file was given, now it displays the error message
- Adjust error handler for PHP 8.0 silenced errors
- Fix PHP 8.1 errors on ArrayAccess methods signatures
- Fix HTML markup missing close tag `<a>` on a function in the global namespace
- Fix a PHP error when the `@throws` tag is invalid
- Fix some texts that got escaped into `<p>` tags when it was not worth it
- Do not print the error summary for frozen versions (ex: git tags) and add CLI `--print-frozen-errors` to reverse this change
- Implement source line and remote links on functions of the global namespace
- Internal: rename `ClassTraverser` to `ProjectTraverser`
- Internal: add "file" and "relative_file" property on cached file for a function
- Themes: all calls to the `|desc(function)` filter will now need to add `|md_to_html` filter to convert the Markdown output to HTML
- Allow to search for non class functions on the search box and search page
- Added more strings to translate and updated the French translation
- Fixed the HTML node `lang` attribute according to the currently used language
- Added a version selector for small displays not having the left sidebar
- Fixed CSS striping in the left sidebar having some off-alignment with the text on some browsers
- `GitLabRemoteRepository` class now uses the separator `/-/` in source URLs, a new constructor parameter can change this back
- `AbstractRemoteRepository` class now has types in the signatures
- Filter out in a non case sensitive way the tags on `GitVersionCollection` class and document filtering on the README
- Reduce the size of the tree, create a new class `TreeNode` and build the tree using JS code and not injected HTML code
- Select the global namespace in the tree while viewing it
- Disable "spellcheck", "autocorrect", "autocomplete" and "autocapitalize" on the search input
- Completely refactor the search box to drop "typeahead.js" and replace it by "autocomplete.js"
- Reduce the loading times by a lot by spliting out the search index into "doctum-search.json" and loading it only when needed
- Fix missing namespaces in the global namespace for non namespace functions

## [5.4.1] - 2021-04-22

- Fixed Search results descriptions render
- Fixed PHP 8.0 `usort` does not want a boolean anymore on `GitVersionCollection` setups
- Fixed CSS issues with method descriptions
- Fixed phpdoc blocks render having `<code>` HTML tags
- Fixed composer autoload warnings on PSR-4 classes
- Adjusted `.gitattributes` to exclude useless files from composer bundles
- Added tests on for the final composer package
- Support `{@link function}`, `{@link Class::function}` or `{@link https://example.com}` syntax

## [5.4.0] - 2021-04-10

- Drop support for PHP `7.1`
- Drop support for `phpdocumentor/reflection-docblock` `4.3` series
- Require PHP `7.2.20`
- Enable support for PHP `8.0` on the PHAR
- Resolve type aliases in docblocks (#24)
- Upgrade Twig to `^3.0`
- Upgrade `code-lts/cli-tools` to `^1.4`
- Upgrade `wdes/php-i18n-l10n` to `^4.0`
- Fixed a bug that removed `@return` and `@var` descriptions since 5.3.0
- Added detection for duplicated `@var` and `@return` tags
- Added a "version" command to avoid having users parsing unsafe output
- Added support for `@mixin` annotations on classes
- Added support for `@property-write` and `@property-read` annotations on classes
- Added support for `@readonly` annotations on methods and classes
- Added support for `@internal` annotations on methods and classes
- Added support for `@deprecated` annotations on properties
- Added support for `@since` annotations on classes, methods, properties
- Better support for `@method` annotations on classes, added `static` keyword support
- Add support for `@internal`, `@deprecated`, `@since` on constants
- Add support for `@example` on methods
- Fix OpenSearch feature and document the config
- Fix favicon config and document an example config
- Add support for `@public`, `@private`, `@protected`, `@final`, `@access` annotations
- Fixed invalid `@see` annotations parsing and rendering
- Added access handling on constants
- Fixed global namespace handling
- Added methods for functions to the `StoreInterface` class
- Changed return body of `readProject` method of `StoreInterface` to also return functions
- Fix some resume after parse step missing data
- Add more tests on render, parse and update CLIs
- Remove old lib `michelf/php-markdown` and use `erusev/parsedown` to fix an HTML parsing bug
- Add GitHub SECURITY and FUNDING configs
- Add `Stringable` PHP 8.0 class to internal PHP class list
- Add WeakReference PHP 7.4 class to internal PHP class list
- Support `UnionType` of PHP 8
- Support `namespace {//code}` syntax for namespaces without a name

## [5.3.3] - 2021-04-21

_LTS release (PHP 7.1 only)_

- Fixed Search results descriptions render
- Fixed PHP 8.0 `usort` does not want a boolean anymore on `GitVersionCollection` setups
- Fixed CSS issues with method descriptions
- Fixed phpdoc blocks render having `<code>` HTML tags
- Fixed composer autoload warnings on PSR-4 classes
- Adjusted `.gitattributes` to exclude useless files from composer bundles

## [5.3.2] - 2021-04-12

_LTS release (PHP 7.1 only)_

- Disabled all other PHP versions for the 5.3.x series, only PHP 7.1 is allowed
- Fixed a bug that removed `@return` and `@var` descriptions since 5.3.0
- Fix OpenSearch feature and documented the config
- Fix favicon config and document an example config
- Fixed global namespace handling
- Fixed a resume after parse step missing data
- Add more tests on render, parse and update CLIs
- Remove old lib `michelf/php-markdown` and use `erusev/parsedown` to fix an HTML parsing bug
- Add GitHub SECURITY and FUNDING configs
- Support `UnionType` of PHP 8
- Support `namespace {//code}` syntax for namespaces without a name

## [5.3.1] - 2020-12-30

- Fixed: missing "final" keyword on a class page
- Made the minimum required php version more precise on composer.json and README.md

## [5.3.0] - 2020-12-20

- Added: NodeVisitor::getPropertyReflectionFromParserProperty
- Added: Renderer::getVariablesFromClassReflection
- Fixed: "Error: The ProgressBar is not started" (#19)
- Fixed: ""3" @param tags are expected but only "4" found" (#21)
- Reworked the `@param` tag error detection and added new error messages
- Added: A shebang to all the new PHARs distributed
- Added: Support for a custom `footer_link` configuration

## [5.2.1] - 2020-11-30

- Fixed a PHP notice on "template_dirs" (#16)
- Added some more unit tests to cover some edge cases

## [5.2.0] - 2020-11-29

- Support custom composer vendor autoload files using the ENV "DOCTUM_COMPOSER_AUTOLOAD_FILE"
- Add function reflection & doc section in Namespace (#12)
- Refactor and improve the progress bar
- Add CLI `--output-format` option that supports a lot of formats: `raw, rawtext, table, checkstyle, json, junit, prettyJson, gitlab, github, teamcity`
- Add CLI `--no-progress` to disable progress bars but keep output
- Fixed `--no-ansi` not displaying text
- `RENDER_PROGRESS` callback takes `$this->step, $this->steps` instead of `$this->getProgression()` for users hacking the tool
- `PARSE_CLASS` callback uses `$this->step, $this->steps` instead of the calculated progression
- Most error reports are sent to stderr now, you can use `--no-progress --output-format=checkstyle 2> checkstyle.xml`
- Add new dependency `code-lts/cli-tools`

## [5.1.0] - 2020-08-29

- Allow symfony/* ~3.4 versions
- Support `--ignore-parse-errors` to have an exit code 0.
- Add more PHP typehints on the code-base.
- Fix a typo on README.rst

## [5.0.3] - 2020-08-19

- Some fixes for project classes

## [5.0.2] - 2020-08-15

- Upgrade nikic/php-parser from 4.5.x to 4.6.x
- Add an error for PHP versions below 7.1
- Fixed an error due to [#249 on phpdocumentor/reflection-docblock](https://github.com/phpDocumentor/ReflectionDocBlock/issues/249)

## [5.0.1] - 2020-07-19

- Fix a parsing error on "src/Parser/NodeVisitor"

## [5.0.0] - 2020-07-18

- Forked the project
- Removed all GIT tags
- Migrated from TravisCI to GitHub actions
- Improved README
- Improved CHANGELOG
- Moved tests to tests directory
- Removed symfony/phpunit-bridge in favor of phpunit/phpunit
- Removed blackfire testing
- Updated composer.json
- Move source files to src directory
- Rename Sami to Doctum
- Move the binary to bin/doctum.php
- Add phpstan
- Fix some issues reported by phpstan
- Upgrade nikic/php-parser from ~3.0 to ~4.5
- Upgrade twig/twig from ~2.0 to ~2.12
- Apply some coding standard rules on the code-base
- Add PHP constants visibility
- Drop `simulate_namespaces` config option
- #7 - Translate Doctum, thank you @Guileas
- Support 'language' in the configuration block, available languages are ('fr' and 'en') for now, default 'en'.
- #6 - Upgrade phpdocumentor/reflection-docblock from ~2.0 to ~5.1
- Clean the .css .js vendor files
- Re-build the font using https://fontello.com/
- #4 - build a release process and phar bundling

## [4.1.0] - 2018-06-25

- dropped support for PHP 7.0
- added support for Symfony 4+
- allowed `true` and `false` type-hint
- added support for php7 return types

## [4.0.16] - 2018-04-04

- fixed @see tag support

## [4.0.15] - 2018-02-22

- added extended support for the @see tag

## [4.0.14] - 2018-02-05

- fixed type null for nullable type parameters not added as type (PHP 7)

## [4.0.13] - 2018-01-10

- implemented option to sort properties, methods, constants, traits and interfaces
- fixed class properties display

## [4.0.12] - 2017-12-31

- added support for variadics

## [4.0.11] - 2017-12-20

- fixed "0" as default value not shown

## [4.0.10] - 2017-11-08

- fixed cache bug

## [4.0.9] - 2017-10-28

- prevented scope collision in Sami config file
- fixed wrong variable using in NodeVisitor

## [4.0.8] - 2017-09-05

- fixed counting of non-countable versions for PHP 7.2

## [4.0.7] - 2017-09-05

- made Sami skip anonymous classes
- fixed Sami for PHP 7.2
- made sure VersionCollection::$versions is always an array

## [4.0.6] - 2017-06-08

- corrected docblock based method parameters

## [4.0.5] - 2017-06-06

- corrected node visitor to correctly resolve hints to class parameters

## [4.0.4] - 2017-05-31

- made it possible to copy namespace from the UI

## [4.0.3] - 2017-05-05

- fixed Tree parser sets links for namespaces containing sub namespaces
- switched to Markdown Extra instead of Markdown
- added @todo tag support

## [4.0.2] - 2017-04-18

- added $this as class name alias for hints

## [4.0.1] - 2017-03-24

- fixed parsing nullable types with php 7.1

## [4.0.0] - 2017-01-05

- fixed version switcher
- fixed parsing of @property tags in DocBlocks
- added PublicFilter (same implementation as the old DefaultFilter in 3.x)
- changed DefaultFilter to included protected methods and properties
- removed SymfonyFilter
- upgraded to PHPParser 3.0 (removed support for 2.x)
- removed support for Twig 1.x
- removed support for PHP 5.x
- upgraded Symfony to 3.*

## [3.3.0] - 2016-06-07

- added support for the deprecated tag
- removed extra whitespace in generated HTML
- removed usage of PHP reflection to determine if a class is internal

## [3.2.3] - 2016-05-12

- fixed trait support when using filters

## [3.2.2] - 2016-05-11

- switched to phpDocumentor's parser for "@property" tag parsing

## [3.2.1] - 2016-01-22

- fixed type hints when using a FQCN

## [3.2.0] - 2016-01-19

- improved performance (a lot)
- fixed --force option (again)
- added a link to class methods if a remote repository is configured
- added GitLab support
- added BitBucket support
- fixed Windows support

## [3.1.0] - 2015-08-30

- improved parsing performance
- fixed --force flag
- fixed cache invalidation
- fixed method doccomments on inherited classes when using caching
- fixed visibility issue on methods and properties
- removed usage of Twig deprecated features

## [3.0.8] - 2015-08-13

- added support for Twig 1.x and 2.x

## [3.0.7] - 2015-07-11

- added responsive meta tags

## [3.0.6] - 2015-06-28

- fixed Windows \ vs / issue
- added "View source" link
- fixed compatibility with PHPParser

## [3.0.3] - 2015-04-08

- removed deprecated usage of Symfony Yaml
- fixed links to php.net (to get the correct redirection)

## [3.0.2] - 2015-02-21

- fixed error messages for methods and properties

## [3.0.1] - 2015-02-18

- fixed command exit code when some parsing error occur to 64
- fixed parsing error display when using --no-ansi
- fixed tag parsing when the value is already an array

## [3.0.0] - 2015-02-17

- made phpdocs available when deciding to process classes/methods/...
- changed the default theme to use Twitter bootstrap
- added trait properties/methods to the class detail page
- upgraded to Pimple 3.0
- upgraded to PHP Parser 1.0

## [2.0.0] - 2014-06-25

- switched to a phar file as the recommended way to install Sami
- upgraded to Pimple 2.0

## [1.4] - 2014-06-25

- fixed a bunch of typos
- fixed CLI when passing a directory as a config file
- fixed missing project title in generated documentation
- allowed permalinks in the frames interface via the URI fragment

## [1.3] - 2013-11-30

- fixed deep inheritance
- added forwarding of default_opened_level configuration parameter from Pimple to Project
- updated the Markdown library used internally
- added a check for non-clean repositories to avoid losing changes
- added trait support

## [1.2] - 2013-09-27

- reworked the internals to make them more decoupled and reusable
- added more valid PHP built-in types
- fixed support for PHPParser 0.9.1

## [1.1] - 2013-08-04

- persisted errors in the store for later retrieval
- added support for @property tag for 'magic' properties
- added support for multiple visitors that modify a class
- added Markdown support
- fixed js bug when inside an iframe

## [1.0] - 2013-04-05

- first stable release

## [0.8] - 2012-05-15

- initial Open-Source version
