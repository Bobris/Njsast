!function(_) {
    "use strict";
    var t, e, r, n, a, s, o, i;
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
    r;
    n;
    a;
    s = !1;
    o = __bbb.b;
    o();
    function p() {
        return "Hello";
    }
    i = {
        hello: p
    };
    __bbb.a = i;
}();

