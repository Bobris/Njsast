!function(t) {
    "use strict";
    var n, _, i, e, r, o, s;
    n = Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(t, n) {
        t.__proto__ = n;
    } || function(t, n) {
        var _;
        for (_ in n) if (n.hasOwnProperty(_)) t[_] = n[_];
    };
    _ = Object.assign || function(t) {
        var n, _, i, e;
        for (n = 1, _ = arguments.length; n < _; n++) {
            i = arguments[n];
            for (e in i) if (Object.prototype.hasOwnProperty.call(i, e)) t[e] = i[e];
        }
        return t;
    };
    i;
    e;
    r = !1;
    function a(t, n) {
        return t + n;
    }
    o = {
        fn: a
    };
    s = o;
    console.log(s.fn(1, 2));
}();

