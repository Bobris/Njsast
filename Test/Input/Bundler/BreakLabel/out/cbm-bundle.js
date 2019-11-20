!function(t) {
    "use strict";
    var n, i, r;
    n = Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(t, n) {
        t.__proto__ = n;
    } || function(t, n) {
        var i;
        for (i in n) if (n.hasOwnProperty(i)) t[i] = n[i];
    };
    i = Object.assign || function(t) {
        var n, i, r, e;
        for (n = 1, i = arguments.length; n < i; n++) {
            r = arguments[n];
            for (e in r) if (Object.prototype.hasOwnProperty.call(r, e)) t[e] = r[e];
        }
        return t;
    };
    r = !1;
    t: while (!0) {
        while (!0) {
            if (Math.random() > 0.5) break t;
        }
    }
}();

