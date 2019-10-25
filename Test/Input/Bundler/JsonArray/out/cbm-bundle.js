!function(t) {
    "use strict";
    var n, e, s, r, i, _;
    n = Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(t, n) {
        t.__proto__ = n;
    } || function(t, n) {
        var e;
        for (e in n) if (n.hasOwnProperty(e)) t[e] = n[e];
    };
    e = Object.assign || function(t) {
        var n, e, s, r;
        for (n = 1, e = arguments.length; n < e; n++) {
            s = arguments[n];
            for (r in s) if (Object.prototype.hasOwnProperty.call(s, r)) t[r] = s[r];
        }
        return t;
    };
}();

