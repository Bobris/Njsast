!function(t) {
    "use strict";
    var n, e, s, o, _, i;
    n = Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(t, n) {
        t.__proto__ = n;
    } || function(t, n) {
        var e;
        for (e in n) if (n.hasOwnProperty(e)) t[e] = n[e];
    };
    e = Object.assign || function(t) {
        var n, e, s, o;
        for (n = 1, e = arguments.length; n < e; n++) {
            s = arguments[n];
            for (o in s) if (Object.prototype.hasOwnProperty.call(s, o)) t[o] = s[o];
        }
        return t;
    };
    s;
    o;
    _ = !1;
    i = {
        test: "ok"
    };
    console.log(i.test);
}();

