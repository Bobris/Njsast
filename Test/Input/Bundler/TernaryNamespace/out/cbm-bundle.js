!function(_) {
    "use strict";
    var t, n, i, r, b, o, e, p;
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
    i = !1;
    function a(_, t) {
        return _ + t;
    }
    r = {
        fn: a
    };
    function s(_, t) {
        return _ - t;
    }
    b = {
        fn: s
    };
    o = r;
    e = b;
    p = Math.random() > 0.5 ? r : b;
    console.log(p.fn(1, 2));
}();

