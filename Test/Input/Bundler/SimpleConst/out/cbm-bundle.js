!function(t) {
    "use strict";
    var _, n, e, s, r, o;
    _ = Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(t, _) {
        t.__proto__ = _;
    } || function(t, _) {
        var n;
        for (n in _) if (_.hasOwnProperty(n)) t[n] = _[n];
    };
    n = Object.assign || function(t) {
        var _, n, e, s;
        for (_ = 1, n = arguments.length; _ < n; _++) {
            e = arguments[_];
            for (s in e) if (Object.prototype.hasOwnProperty.call(e, s)) t[s] = e[s];
        }
        return t;
    };
    e;
    s;
    r = !1;
    o = 42;
    console.log(o);
}();

