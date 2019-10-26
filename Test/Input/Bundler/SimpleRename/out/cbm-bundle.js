!function(t) {
    "use strict";
    var n, _, e, r, a, s;
    n = Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(t, n) {
        t.__proto__ = n;
    } || function(t, n) {
        var _;
        for (_ in n) if (n.hasOwnProperty(_)) t[_] = n[_];
    };
    _ = Object.assign || function(t) {
        var n, _, e, r;
        for (n = 1, _ = arguments.length; n < _; n++) {
            e = arguments[n];
            for (r in e) if (Object.prototype.hasOwnProperty.call(e, r)) t[r] = e[r];
        }
        return t;
    };
    e;
    r;
    a;
    s = !1;
    function i(t, n) {
        return t + n;
    }
    console.log(i(1, 2));
}();

