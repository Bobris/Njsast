(function(t) {
    "use strict";
    var n = 42;
    Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(t, n) {
        t.__proto__ = n;
    } || function(t, n) {
        var r;
        for (r in n) if (n.hasOwnProperty(r)) t[r] = n[r];
    };
    Object.assign || function(t) {
        var n, r, o, p;
        for (n = 1, r = arguments.length; n < r; n++) {
            o = arguments[n];
            for (p in o) if (Object.prototype.hasOwnProperty.call(o, p)) t[p] = o[p];
        }
        return t;
    };
    console.log(n);
})();

