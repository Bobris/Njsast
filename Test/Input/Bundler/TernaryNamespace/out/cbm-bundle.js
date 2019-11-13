!function(_) {
    "use strict";
    var t, n, i, r, b, e, o, a, p, s;
    t = Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(_, t) {
        _.__proto__ = t;
    } || function(_, t) {
        var n;
        for (n in t) if (t.hasOwnProperty(n)) _[n] = t[n];
    };
    n = Object.assign || function(_) {
        var t, n, i, r;
        for (t = 1, n = arguments.length; t < n; t++) {
            i = arguments[t];
            for (r in i) if (Object.prototype.hasOwnProperty.call(i, r)) _[r] = i[r];
        }
        return _;
    };
    i;
    r;
    b = !1;
    function f(_, t) {
        return _ + t;
    }
    e = {
        fn: f
    };
    function l(_, t) {
        return _ - t;
    }
    o = {
        fn: l
    };
    a = e;
    p = o;
    s = Math.random() > 0.5 ? e : o;
    console.log(s.fn(1, 2));
}();

