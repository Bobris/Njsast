!function(t) {
    "use strict";
    var n, r, s;
    n = Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(t, n) {
        t.__proto__ = n;
    } || function(t, n) {
        var r;
        for (r in n) if (n.hasOwnProperty(r)) t[r] = n[r];
    };
    r = Object.assign || function(t) {
        var n, r, s, o;
        for (n = 1, r = arguments.length; n < r; n++) {
            s = arguments[n];
            for (o in s) if (Object.prototype.hasOwnProperty.call(s, o)) t[o] = s[o];
        }
        return t;
    };
    s = !1;
    function o(t, n) {
        return t + n;
    }
    console.log(o(1, 2));
}();

