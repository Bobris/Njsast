!function(t) {
    "use strict";
    var n, s, i, _, o;
    n = Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(t, n) {
        t.__proto__ = n;
    } || function(t, n) {
        var s;
        for (s in n) if (n.hasOwnProperty(s)) t[s] = n[s];
    };
    s = Object.assign || function(t) {
        var n, s, i, _;
        for (n = 1, s = arguments.length; n < s; n++) {
            i = arguments[n];
            for (_ in i) if (Object.prototype.hasOwnProperty.call(i, _)) t[_] = i[_];
        }
        return t;
    };
    i;
    _;
    o = !1;
    console.log("lib");
    console.log("main");
}();

