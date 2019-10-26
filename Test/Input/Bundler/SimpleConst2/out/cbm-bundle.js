!function(t) {
    "use strict";
    var n, _, a, e, s, r, i;
    n = Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(t, n) {
        t.__proto__ = n;
    } || function(t, n) {
        var _;
        for (_ in n) if (n.hasOwnProperty(_)) t[_] = n[_];
    };
    _ = Object.assign || function(t) {
        var n, _, a, e;
        for (n = 1, _ = arguments.length; n < _; n++) {
            a = arguments[n];
            for (e in a) if (Object.prototype.hasOwnProperty.call(a, e)) t[e] = a[e];
        }
        return t;
    };
    a;
    e;
    s;
    r = !1;
    i = 42;
    console.log(i);
}();

