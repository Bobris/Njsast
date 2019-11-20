(function(n) {
    "use strict";
    Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(n, t) {
        n.__proto__ = t;
    } || function(n, t) {
        var r;
        for (r in t) if (t.hasOwnProperty(r)) n[r] = t[r];
    };
    Object.assign || function(n) {
        var t, r, o, i;
        for (t = 1, r = arguments.length; t < r; t++) {
            o = arguments[t];
            for (i in o) if (Object.prototype.hasOwnProperty.call(o, i)) n[i] = o[i];
        }
        return n;
    };
    function t(n, t) {
        return n + t;
    }
    console.log(t(1, 2));
})();

