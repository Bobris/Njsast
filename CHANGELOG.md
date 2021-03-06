# Changelog

## [unreleased]

## 0.5.0

### Added

- Optimize TypeScript enums
- dead code elimination of result unused `new Map()`

### Fixed

- Bundler with import default when there is not default export

## 0.4.0

### Added

- Unused classes are eliminated by optimizer.
- Support for export { x } from "y"; and export { x as y } from "z"; patterns
- Compress optimization for cloned constant variables
- Improved bundling dead code elimination of export as namespace

### Fixed

- Bundler for Code generated by TypeScript 3.9.2
- Bundling of `export * as x from "y";`
- Bundling of `export var x = func; x = func2;` pattern.
- Bundling of JS dependency with `var x = (function(){ window.x = window.x || {}; ...; return x; })();` pattern.
- Bundling of JS dependency with `if (typeof module !== "undefined" && module.exports) {` pattern.

## 0.3.0

### Fixed

- Nasty Const eval bug
- Symbol renaming in Bundler

### Added

- New Coverage reporters

## 0.2.0

### Added

- Coverage instrumentation.

### Fixed

- Many bugs in bundler and minification.
- Compress should never remove IIFE functions. Fixes compression of already compressed jquery.min.js.

## 0.1.0

## 0.0.1

- First version
