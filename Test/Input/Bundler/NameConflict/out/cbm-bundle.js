!function(n) {
    "use strict";
    var t, i, e, r, a;
    t = Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(n, t) {
        n.__proto__ = t;
    } || function(n, t) {
        var i;
        for (i in t) if (t.hasOwnProperty(i)) n[i] = t[i];
    };
    i = Object.assign || function(n) {
        var t, i, e, r;
        for (t = 1, i = arguments.length; t < i; t++) {
            e = arguments[t];
            for (r in e) if (Object.prototype.hasOwnProperty.call(e, r)) n[r] = e[r];
        }
        return n;
    };
    e = !1;
    r = 1;
    function _(n, t) {
        return n + t;
    }
    function o(n, t) {
        return n - t;
    }
    a = 2;
    console.log(_(o(a, 1), a));
}();

