!function(_) {
    "use strict";
    var t, a, n, e, r, o, s;
    t = Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(_, t) {
        _.__proto__ = t;
    } || function(_, t) {
        var a;
        for (a in t) if (t.hasOwnProperty(a)) _[a] = t[a];
    };
    a = Object.assign || function(_) {
        var t, a, n, e;
        for (t = 1, a = arguments.length; t < a; t++) {
            n = arguments[t];
            for (e in n) if (Object.prototype.hasOwnProperty.call(n, e)) _[e] = n[e];
        }
        return _;
    };
    n;
    e;
    r = !1;
    o = 42;
    s = o;
    console.log(s);
}();

