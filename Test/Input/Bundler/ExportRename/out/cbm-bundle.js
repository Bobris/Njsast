!function(t) {
    "use strict";
    var _, n, r, e, a, o, s;
    _ = Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(t, _) {
        t.__proto__ = _;
    } || function(t, _) {
        var n;
        for (n in _) if (_.hasOwnProperty(n)) t[n] = _[n];
    };
    n = Object.assign || function(t) {
        var _, n, r, e;
        for (_ = 1, n = arguments.length; _ < n; _++) {
            r = arguments[_];
            for (e in r) if (Object.prototype.hasOwnProperty.call(r, e)) t[e] = r[e];
        }
        return t;
    };
    r;
    e;
    a;
    o = !1;
    function i(t, _) {
        return t + _;
    }
    s = i;
    console.log(s(1, 2));
}();

