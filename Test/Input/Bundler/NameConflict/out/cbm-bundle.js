!function(t) {
    "use strict";
    var n, i, e, _, s, r, a, o;
    n = Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(t, n) {
        t.__proto__ = n;
    } || function(t, n) {
        var i;
        for (i in n) if (n.hasOwnProperty(i)) t[i] = n[i];
    };
    i = Object.assign || function(t) {
        var n, i, e, _;
        for (n = 1, i = arguments.length; n < i; n++) {
            e = arguments[n];
            for (_ in e) if (Object.prototype.hasOwnProperty.call(e, _)) t[_] = e[_];
        }
        return t;
    };
}();

