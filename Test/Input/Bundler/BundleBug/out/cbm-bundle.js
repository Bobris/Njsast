!function(t) {
    "use strict";
    var d, n, _, e;
    d = Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(t, d) {
        t.__proto__ = d;
    } || function(t, d) {
        var n;
        for (n in d) if (d.hasOwnProperty(n)) t[n] = d[n];
    };
    n = Object.assign || function(t) {
        var d, n, _, e;
        for (d = 1, n = arguments.length; d < n; d++) {
            _ = arguments[d];
            for (e in _) if (Object.prototype.hasOwnProperty.call(_, e)) t[e] = _[e];
        }
        return t;
    };
    _ = !1;
    e = t;
    function r(t) {
        e = t;
    }
    r(function() {});
    if (e) e();
}();

