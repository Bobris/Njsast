!function(t) {
    "use strict";
    var n, s, r, o;
    n = Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(t, n) {
        t.__proto__ = n;
    } || function(t, n) {
        var s;
        for (s in n) if (n.hasOwnProperty(s)) t[s] = n[s];
    };
    s = Object.assign || function(t) {
        var n, s, r, o;
        for (n = 1, s = arguments.length; n < s; n++) {
            r = arguments[n];
            for (o in r) if (Object.prototype.hasOwnProperty.call(r, o)) t[o] = r[o];
        }
        return t;
    };
    r = !1;
    o = 42;
    console.log(o);
}();

