(function(t) {
    "use strict";
    var d;
    Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(t, d) {
        t.__proto__ = d;
    } || function(t, d) {
        var n;
        for (n in d) if (d.hasOwnProperty(n)) t[n] = d[n];
    };
    Object.assign || function(t) {
        var d, n, r, o;
        for (d = 1, n = arguments.length; d < n; d++) {
            r = arguments[d];
            for (o in r) if (Object.prototype.hasOwnProperty.call(r, o)) t[o] = r[o];
        }
        return t;
    };
    d = t;
    function n(t) {
        d = t;
    }
    n(function() {});
    if (d) d();
})();

