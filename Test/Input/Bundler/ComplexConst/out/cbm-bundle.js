!function(_) {
    "use strict";
    var t, a, e, r, n, o, s, p;
    t = Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(_, t) {
        _.__proto__ = t;
    } || function(_, t) {
        var a;
        for (a in t) if (t.hasOwnProperty(a)) _[a] = t[a];
    };
    a = Object.assign || function(_) {
        var t, a, e, r;
        for (t = 1, a = arguments.length; t < a; t++) {
            e = arguments[t];
            for (r in e) if (Object.prototype.hasOwnProperty.call(e, r)) _[r] = e[r];
        }
        return _;
    };
    e;
    r;
    n;
    o = !1;
    s = 42;
    p = s;
    console.log(p);
}();

