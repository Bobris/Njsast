!function(t) {
    "use strict";
    var n, e, _, r, o, i, a, p;
    n = Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(t, n) {
        t.__proto__ = n;
    } || function(t, n) {
        var e;
        for (e in n) if (n.hasOwnProperty(e)) t[e] = n[e];
    };
    e = Object.assign || function(t) {
        var n, e, _, r;
        for (n = 1, e = arguments.length; n < e; n++) {
            _ = arguments[n];
            for (r in _) if (Object.prototype.hasOwnProperty.call(_, r)) t[r] = _[r];
        }
        return t;
    };
    _;
    r;
    o;
    i = !1;
    function s(t) {
        return t;
    }
    function u(t) {
        return t;
    }
    a = "OK";
    p = s("KO");
    function c() {
        var t = u("hello");
        console.log(t);
    }
    c();
    console.log(a);
}();

