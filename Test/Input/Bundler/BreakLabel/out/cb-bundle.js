(function(undefined) {
    "use strict";
    Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        var p;
        for (p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };
    Object.assign || function(t) {
        var i, n, s, p;
        for (i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    out: while (!0) {
        while (!0) {
            if (Math.random() > 0.5) break out;
        }
    }
})();

