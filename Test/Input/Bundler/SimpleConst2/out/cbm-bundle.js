!function(t) {
    "use strict";
    var n, _, s, a, i, e;
    n = Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(t, n) {
        t.__proto__ = n;
    } || function(t, n) {
        var _;
        for (_ in n) if (n.hasOwnProperty(_)) t[_] = n[_];
    };
    _ = Object.assign || function(t) {
        var n, _, s, a;
        for (n = 1, _ = arguments.length; n < _; n++) {
            s = arguments[n];
            for (a in s) if (Object.prototype.hasOwnProperty.call(s, a)) t[a] = s[a];
        }
        return t;
    };
    s;
    a;
    i = !1;
    e = 42;
    console.log(e);
}();

