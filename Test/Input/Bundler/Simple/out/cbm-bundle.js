function(t) {
    "use strict";
    var n, i, s, r, e, _;
    n = Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(t, n) {
        t.__proto__ = n;
    } || function(t, n) {
        var i;
        for (i in n) if (n.hasOwnProperty(i)) t[i] = n[i];
    };
    i = Object.assign || function(t) {
        var n, i, s, r;
        for (n = 1, i = arguments.length; n < i; n++) {
            s = arguments[n];
            for (r in s) if (Object.prototype.hasOwnProperty.call(s, r)) t[r] = s[r];
        }
        return t;
    };
}()

