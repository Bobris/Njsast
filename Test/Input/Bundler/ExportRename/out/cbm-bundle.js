!function(t) {
    "use strict";
    var n, _, r, e, s, i, a;
    n = Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(t, n) {
        t.__proto__ = n;
    } || function(t, n) {
        var _;
        for (_ in n) if (n.hasOwnProperty(_)) t[_] = n[_];
    };
    _ = Object.assign || function(t) {
        var n, _, r, e;
        for (n = 1, _ = arguments.length; n < _; n++) {
            r = arguments[n];
            for (e in r) if (Object.prototype.hasOwnProperty.call(r, e)) t[e] = r[e];
        }
        return t;
    };
}();
