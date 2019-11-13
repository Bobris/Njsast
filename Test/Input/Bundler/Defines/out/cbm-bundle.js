!function(t) {
    "use strict";
    var s, n, e, a, _;
    s = Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(t, s) {
        t.__proto__ = s;
    } || function(t, s) {
        var n;
        for (n in s) if (s.hasOwnProperty(n)) t[n] = s[n];
    };
    n = Object.assign || function(t) {
        var s, n, e, a;
        for (s = 1, n = arguments.length; s < n; s++) {
            e = arguments[s];
            for (a in e) if (Object.prototype.hasOwnProperty.call(e, a)) t[a] = e[a];
        }
        return t;
    };
    e;
    a;
    _ = !1;
    function r(t, s) {}
    r(!1, "bad");
}();

