!function(_) {
    "use strict";
    var e, t, r, a, s, n, o, i, p, d;
    e = Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(_, e) {
        _.__proto__ = e;
    } || function(_, e) {
        var t;
        for (t in e) if (e.hasOwnProperty(t)) _[t] = e[t];
    };
    t = Object.assign || function(_) {
        var e, t, r, a;
        for (e = 1, t = arguments.length; e < t; e++) {
            r = arguments[e];
            for (a in r) if (Object.prototype.hasOwnProperty.call(r, a)) _[a] = r[a];
        }
        return _;
    };
    r;
    a;
    s;
    n = !1;
    o = __bbb.b;
    i = o;
    p = o;
    p.shared();
    function l() {
        return "Hello";
    }
    d = {
        hello: l
    };
    __bbb.a = d;
}();

