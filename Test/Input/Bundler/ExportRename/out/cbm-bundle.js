(function(t) {
    "use strict";
    var n;
    Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(t, n) {
        t.__proto__ = n;
    } || function(t, n) {
        var r;
        for (r in n) if (n.hasOwnProperty(r)) t[r] = n[r];
    };
    Object.assign || function(t) {
        var n, r, o, e;
        for (n = 1, r = arguments.length; n < r; n++) {
            o = arguments[n];
            for (e in o) if (Object.prototype.hasOwnProperty.call(o, e)) t[e] = o[e];
        }
        return t;
    };
    function r(t, n) {
        return t + n;
    }
    n = r;
    console.log(n(1, 2));
})();

