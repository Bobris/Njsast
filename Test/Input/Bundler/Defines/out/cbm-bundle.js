(function(t) {
    "use strict";
    Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(t, n) {
        t.__proto__ = n;
    } || function(t, n) {
        var s;
        for (s in n) if (n.hasOwnProperty(s)) t[s] = n[s];
    };
    Object.assign || function(t) {
        var n, s, r, e;
        for (n = 1, s = arguments.length; n < s; n++) {
            r = arguments[n];
            for (e in r) if (Object.prototype.hasOwnProperty.call(r, e)) t[e] = r[e];
        }
        return t;
    };
    function n(t, n) {}
    n(!1, "bad");
})();

