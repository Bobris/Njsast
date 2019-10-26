!function(t) {
    "use strict";
    var n, e, _, s, o, r, i;
    n = Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(t, n) {
        t.__proto__ = n;
    } || function(t, n) {
        var e;
        for (e in n) if (n.hasOwnProperty(e)) t[e] = n[e];
    };
    e = Object.assign || function(t) {
        var n, e, _, s;
        for (n = 1, e = arguments.length; n < e; n++) {
            _ = arguments[n];
            for (s in _) if (Object.prototype.hasOwnProperty.call(_, s)) t[s] = _[s];
        }
        return t;
    };
    _;
    s;
    o;
    r = !1;
    i = [ 1, 2, 3 ];
    console.log(i[0]);
}();

