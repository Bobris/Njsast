!function(t) {
    "use strict";
    var n, o, e, s, r;
    n = Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(t, n) {
        t.__proto__ = n;
    } || function(t, n) {
        var o;
        for (o in n) if (n.hasOwnProperty(o)) t[o] = n[o];
    };
    o = Object.assign || function(t) {
        var n, o, e, s;
        for (n = 1, o = arguments.length; n < o; n++) {
            e = arguments[n];
            for (s in e) if (Object.prototype.hasOwnProperty.call(e, s)) t[s] = e[s];
        }
        return t;
    };
    e = !1;
    s = [ 1, 2, 3 ];
    r = s;
    console.log(s[0]);
}();

