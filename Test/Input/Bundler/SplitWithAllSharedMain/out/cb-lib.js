(function(undefined) {
    "use strict";
    var ___shared, allshared, __export_$;
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
    ___shared = __bbb.b;
    allshared = ___shared;
    allshared.shared();
    function hello() {
        return "Hello";
    }
    __export_$ = {
        hello: hello
    };
    __bbb.a = __export_$;
})();
