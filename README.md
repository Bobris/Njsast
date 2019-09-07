# Njsast

[![Build Status](https://dev.azure.com/bletocha/bletocha/_apis/build/status/Bobris.Njsast?branchName=master)](https://dev.azure.com/bletocha/bletocha/_build/latest?definitionId=2&branchName=master)

WIP of .Net library to work with JavaScript source code

It is library to Parse JavaScript to AST, Print from AST, Evaluate constants over multiple files, Minimize code (Optimize, Mangle), working with SourceMaps.
It is mostly focused on ES5, though there is code for ES6+ too just has less priority now. AST itself is nearly 1:1 to UglifyJs.

This project takes a lot from [UglifyJs](https://github.com/mishoo/UglifyJS2), [Terser](https://github.com/terser-js/terser), [JINT](https://github.com/sebastienros/jint) projects.
