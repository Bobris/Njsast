(function(n) {
    "use strict";
    var t = 2;
    Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(n, t) {
        n.__proto__ = t;
    } || function(n, t) {
        var i;
        for (i in t) if (t.hasOwnProperty(i)) n[i] = t[i];
    };
    Object.assign || function(n) {
        var t, i, e, r;
        for (t = 1, i = arguments.length; t < i; t++) {
            e = arguments[t];
            for (r in e) if (Object.prototype.hasOwnProperty.call(e, r)) n[r] = e[r];
        }
        return n;
    };
    function i(n, t) {
        return n + t;
    }
    function e(n, t) {
        return n - t;
    }
    console.log(i(e(t, 1), t));
})();

