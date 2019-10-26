!function(t) {
    "use strict";
    var n, s, r, i, e, _;
    n = Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(t, n) {
        t.__proto__ = n;
    } || function(t, n) {
        var s;
        for (s in n) if (n.hasOwnProperty(s)) t[s] = n[s];
    };
    s = Object.assign || function(t) {
        var n, s, r, i;
        for (n = 1, s = arguments.length; n < s; n++) {
            r = arguments[n];
            for (i in r) if (Object.prototype.hasOwnProperty.call(r, i)) t[i] = r[i];
        }
        return t;
    };
}();

