!function(t) {
    "use strict";
    var n, _, r, o;
    n = Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(t, n) {
        t.__proto__ = n;
    } || function(t, n) {
        var _;
        for (_ in n) if (n.hasOwnProperty(_)) t[_] = n[_];
    };
    _ = Object.assign || function(t) {
        var n, _, r, o;
        for (n = 1, _ = arguments.length; n < _; n++) {
            r = arguments[n];
            for (o in r) if (Object.prototype.hasOwnProperty.call(r, o)) t[o] = r[o];
        }
        return t;
    };
    r = !1;
    o = 42;
    console.log(o);
}();

