!function(n) {
    "use strict";
    var t, i, e, _, a, r, s;
    t = Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(n, t) {
        n.__proto__ = t;
    } || function(n, t) {
        var i;
        for (i in t) if (t.hasOwnProperty(i)) n[i] = t[i];
    };
    i = Object.assign || function(n) {
        var t, i, e, _;
        for (t = 1, i = arguments.length; t < i; t++) {
            e = arguments[t];
            for (_ in e) if (Object.prototype.hasOwnProperty.call(e, _)) n[_] = e[_];
        }
        return n;
    };
    e;
    _;
    a = !1;
    r = 1;
    function o(n, t) {
        return n + t;
    }
    function f(n, t) {
        return n - t;
    }
    s = 2;
    console.log(o(f(s, 1), s));
}();

