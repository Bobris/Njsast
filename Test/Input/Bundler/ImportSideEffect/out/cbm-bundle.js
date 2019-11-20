!function(t) {
    "use strict";
    var n, o, s;
    n = Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(t, n) {
        t.__proto__ = n;
    } || function(t, n) {
        var o;
        for (o in n) if (n.hasOwnProperty(o)) t[o] = n[o];
    };
    o = Object.assign || function(t) {
        var n, o, s, i;
        for (n = 1, o = arguments.length; n < o; n++) {
            s = arguments[n];
            for (i in s) if (Object.prototype.hasOwnProperty.call(s, i)) t[i] = s[i];
        }
        return t;
    };
    s = !1;
    console.log("lib");
    console.log("main");
}();

