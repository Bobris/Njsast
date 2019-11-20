(function(t) {
    "use strict";
    Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(t, n) {
        t.__proto__ = n;
    } || function(t, n) {
        var r;
        for (r in n) if (n.hasOwnProperty(r)) t[r] = n[r];
    };
    Object.assign || function(t) {
        var n, r, o, i;
        for (n = 1, r = arguments.length; n < r; n++) {
            o = arguments[n];
            for (i in o) if (Object.prototype.hasOwnProperty.call(o, i)) t[i] = o[i];
        }
        return t;
    };
    t: while (!0) {
        while (!0) {
            if (Math.random() > 0.5) break t;
        }
    }
})();

