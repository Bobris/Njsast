!function(n) {
    "use strict";
    var t, _, e, i, a, r, s, o;
    t = Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(n, t) {
        n.__proto__ = t;
    } || function(n, t) {
        var _;
        for (_ in t) if (t.hasOwnProperty(_)) n[_] = t[_];
    };
    _ = Object.assign || function(n) {
        var t, _, e, i;
        for (t = 1, _ = arguments.length; t < _; t++) {
            e = arguments[t];
            for (i in e) if (Object.prototype.hasOwnProperty.call(e, i)) n[i] = e[i];
        }
        return n;
    };
    e;
    i;
    a;
    r = !1;
    s = 1;
    function f(n, t) {
        return n + t;
    }
    function d(n, t) {
        return n - t;
    }
    o = 2;
    console.log(f(d(o, 1), o));
}();

