!function(_) {
    "use strict";
    var n, t, o, e, r, f, p, s, a, i, c, x, u, l;
    n = Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(_, n) {
        _.__proto__ = n;
    } || function(_, n) {
        var t;
        for (t in n) if (n.hasOwnProperty(t)) _[t] = n[t];
    };
    t = Object.assign || function(_) {
        var n, t, o, e;
        for (n = 1, t = arguments.length; n < t; n++) {
            o = arguments[n];
            for (e in o) if (Object.prototype.hasOwnProperty.call(o, e)) _[e] = o[e];
        }
        return _;
    };
    o;
    e;
    r;
    f = !1;
    function g() {
        return {
            f1: function() {
                return "a";
            },
            f2: function() {
                return "b";
            },
            f3: function() {
                return "c";
            }
        };
    }
    p = (u = g(), u.f1), s = u.f2, a = u.f3;
    i = (l = g(), l.f1), c = l.f2, x = l.f3;
    console.log(p());
    console.log(s());
    console.log(a());
    console.log(i());
    console.log(c());
    console.log(x());
}();

