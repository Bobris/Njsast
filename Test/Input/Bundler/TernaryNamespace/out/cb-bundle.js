(function(undefined) {
    "use strict";
    var __export_$, __export_$_libb, lib;
    Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        var p;
        for (p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };
    Object.assign || function(t) {
        var i, n, s, p;
        for (i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    function fn(a, b) {
        return a + b;
    }
    __export_$ = {
        fn: fn
    };
    function fn_libb(a, b) {
        return a - b;
    }
    __export_$_libb = {
        fn: fn_libb
    };
    lib = Math.random() > 0.5 ? __export_$ : __export_$_libb;
    console.log(lib.fn(1, 2));
})();

