!function(t) {
    "use strict";
    var _, d, n, e, i, r;
    _ = Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(t, _) {
        t.__proto__ = _;
    } || function(t, _) {
        var d;
        for (d in _) if (_.hasOwnProperty(d)) t[d] = _[d];
    };
    d = Object.assign || function(t) {
        var _, d, n, e;
        for (_ = 1, d = arguments.length; _ < d; _++) {
            n = arguments[_];
            for (e in n) if (Object.prototype.hasOwnProperty.call(n, e)) t[e] = n[e];
        }
        return t;
    };
    n;
    e;
    i = !1;
    r = t;
    function s(t) {
        r = t;
    }
    s(function() {});
    if (r) r();
}();

