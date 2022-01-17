# Njsast

[![Build Status](https://dev.azure.com/bletocha/bletocha/_apis/build/status/Bobris.Njsast?branchName=master)](https://dev.azure.com/bletocha/bletocha/_build/latest?definitionId=2&branchName=master)

.Net 5.0 library to work with JavaScript source code

It is library to Parse JavaScript to AST, Print from AST, Evaluate constants over multiple files, Minimize code (Optimize, Mangle), reads and generates SourceMaps, bundle multiple sources (could be created by TypeScript) into one or more including lazy loading. Coverage instrumentation and reporting.
It is mostly focused on ES5, though there is code for ES2020 too just not that tested and compression quality need some work. AST itself is nearly 1:1 to UglifyJs. Also does NOT parse JSX, use TypeScript JSX to JS conversion.

This project takes a lot from [UglifyJs](https://github.com/mishoo/UglifyJS2), [Terser](https://github.com/terser-js/terser), [JINT](https://github.com/sebastienros/jint) projects.
