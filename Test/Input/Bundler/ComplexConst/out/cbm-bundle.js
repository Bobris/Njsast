(function(t) {
    "use strict";
    var r = 42, o = r;
    Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(t, r) {
        t.__proto__ = r;
    } || function(t, r) {
        var o;
        for (o in r) if (r.hasOwnProperty(o)) t[o] = r[o];
    };
    Object.assign || function(t) {
        var r, o, n, p;
        for (r = 1, o = arguments.length; r < o; r++) {
            n = arguments[r];
            for (p in n) if (Object.prototype.hasOwnProperty.call(n, p)) t[p] = n[p];
        }
        return t;
    };
    console.log(o);
})();

