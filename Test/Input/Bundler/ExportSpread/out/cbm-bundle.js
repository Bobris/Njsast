!function(_) {
    "use strict";
    var n, t, o, e, r, f, p, s, i, a, c, x, u;
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
    r = !1;
    function l() {
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
    f = (x = l(), x.f1), p = x.f2, s = x.f3;
    i = (u = l(), u.f1), a = u.f2, c = u.f3;
    console.log(f());
    console.log(p());
    console.log(s());
    console.log(i());
    console.log(a());
    console.log(c());
}();

