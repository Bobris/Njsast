!function(_) {
    "use strict";
    var e, t, r, s, n, a, o;
    e = Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(_, e) {
        _.__proto__ = e;
    } || function(_, e) {
        var t;
        for (t in e) if (e.hasOwnProperty(t)) _[t] = e[t];
    };
    t = Object.assign || function(_) {
        var e, t, r, s;
        for (e = 1, t = arguments.length; e < t; e++) {
            r = arguments[e];
            for (s in r) if (Object.prototype.hasOwnProperty.call(r, s)) _[s] = r[s];
        }
        return _;
    };
    r = !1;
    s = __bbb.b;
    n = s;
    a = s;
    a.shared();
    function i() {
        return "Hello";
    }
    o = {
        hello: i
    };
    __bbb.a = o;
}();

