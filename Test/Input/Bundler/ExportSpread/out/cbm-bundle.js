!function(_) {
    "use strict";
    var n, t, o, e, r, f, p, s, i, c, a;
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
    o = !1;
    function x() {
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
    e = (c = x(), c.f1), r = c.f2, f = c.f3;
    p = (a = x(), a.f1), s = a.f2, i = a.f3;
    console.log(e());
    console.log(r());
    console.log(f());
    console.log(p());
    console.log(s());
    console.log(i());
}();

