!function(_) {
    "use strict";
    var t, e, r, n, s;
    t = Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(_, t) {
        _.__proto__ = t;
    } || function(_, t) {
        var e;
        for (e in t) if (t.hasOwnProperty(e)) _[e] = t[e];
    };
    e = Object.assign || function(_) {
        var t, e, r, n;
        for (t = 1, e = arguments.length; t < e; t++) {
            r = arguments[t];
            for (n in r) if (Object.prototype.hasOwnProperty.call(r, n)) _[n] = r[n];
        }
        return _;
    };
    r = !1;
    n = __bbb.e;
    n();
    function o() {
        return "Hello";
    }
    s = {
        hello: o
    };
    __bbb.b = s;
}();

