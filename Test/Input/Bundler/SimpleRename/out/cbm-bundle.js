!function(t) {
    "use strict";
    var n, _, s, i, e;
    n = Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(t, n) {
        t.__proto__ = n;
    } || function(t, n) {
        var _;
        for (_ in n) if (n.hasOwnProperty(_)) t[_] = n[_];
    };
    _ = Object.assign || function(t) {
        var n, _, s, i;
        for (n = 1, _ = arguments.length; n < _; n++) {
            s = arguments[n];
            for (i in s) if (Object.prototype.hasOwnProperty.call(s, i)) t[i] = s[i];
        }
        return t;
    };
    s;
    i;
    e = !1;
    function r(t, n) {
        return t + n;
    }
    console.log(r(1, 2));
}();

