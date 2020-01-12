!function(undefined) {
    "use strict";
    var exports_lib2, exports_wrapper, exports_lib;
    exports_lib2 = function() {
        var exports = {}, module = {
            exports: exports
        };
        module.exports = {
            doIt: function(p) {
                console.log(p);
            },
            dontIt: function() {
                console.log("KO");
            }
        };
        return module.exports;
    }.call(window);
    exports_wrapper = function() {
        var exports_wrapper = {}, module = {
            exports: exports_wrapper
        };
        module.exports = function(param) {
            Object.keys(param).forEach(function(name) {
                var orig = param[name];
                param[name] = function(p) {
                    orig(name + ":" + p);
                };
            });
            return param;
        };
        return module.exports;
    }.call(window);
    exports_lib = function() {
        var exports_lib = {}, module = {
            exports: exports_lib
        }, global = this;
        module.exports = exports_wrapper(exports_lib2);
        if ("test" in global) {
            setTimeout(global.test, 1);
        }
        return module.exports;
    }.call(window);
    exports_lib.doIt("Ok");
}();

