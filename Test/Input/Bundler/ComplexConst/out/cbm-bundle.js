!function(t) {
    "use strict";
    var _, n, r, o, e;
    _ = Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(t, _) {
        t.__proto__ = _;
    } || function(t, _) {
        var n;
        for (n in _) if (_.hasOwnProperty(n)) t[n] = _[n];
    };
    n = Object.assign || function(t) {
        var _, n, r, o;
        for (_ = 1, n = arguments.length; _ < n; _++) {
            r = arguments[_];
            for (o in r) if (Object.prototype.hasOwnProperty.call(r, o)) t[o] = r[o];
        }
        return t;
    };
    r = !1;
    o = 42;
    e = o;
    console.log(e);
}();

