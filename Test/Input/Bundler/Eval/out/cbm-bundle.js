(function(n) {
    "use strict";
    Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(n, t) {
        n.__proto__ = t;
    } || function(n, t) {
        var r;
        for (r in t) if (t.hasOwnProperty(r)) n[r] = t[r];
    };
    Object.assign || function(n) {
        var t, r, o, e;
        for (t = 1, r = arguments.length; t < r; t++) {
            o = arguments[t];
            for (e in o) if (Object.prototype.hasOwnProperty.call(o, e)) n[e] = o[e];
        }
        return n;
    };
    function t() {
        eval("return 1");
    }
    function r(n) {
        return n + t();
    }
    console.log(r("a"));
})();

