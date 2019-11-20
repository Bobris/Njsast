!function(t) {
    "use strict";
    var n, r, _, o, i;
    n = Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(t, n) {
        t.__proto__ = n;
    } || function(t, n) {
        var r;
        for (r in n) if (n.hasOwnProperty(r)) t[r] = n[r];
    };
    r = Object.assign || function(t) {
        var n, r, _, o;
        for (n = 1, r = arguments.length; n < r; n++) {
            _ = arguments[n];
            for (o in _) if (Object.prototype.hasOwnProperty.call(_, o)) t[o] = _[o];
        }
        return t;
    };
    _ = !1;
    function e(t, n) {
        return t + n;
    }
    o = {
        fn: e
    };
    i = o;
    console.log(i.fn(1, 2));
}();

