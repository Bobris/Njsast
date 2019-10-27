!function(_) {
    "use strict";
    var t, n, i, r, e, b, o, a, p, s, f;
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
    e;
    b = !1;
    function l(_, t) {
        return _ + t;
    }
    o = {
        fn: l
    };
    function u(_, t) {
        return _ - t;
    }
    a = {
        fn: u
    };
    p = o;
    s = a;
    f = Math.random() > 0.5 ? o : a;
    console.log(f.fn(1, 2));
}();

