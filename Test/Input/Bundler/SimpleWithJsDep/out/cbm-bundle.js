!function(t) {
    "use strict";
    var n, e, o, s, _;
    n = Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(t, n) {
        t.__proto__ = n;
    } || function(t, n) {
        var e;
        for (e in n) if (n.hasOwnProperty(e)) t[e] = n[e];
    };
    e = Object.assign || function(t) {
        var n, e, o, s;
        for (n = 1, e = arguments.length; n < e; n++) {
            o = arguments[n];
            for (s in o) if (Object.prototype.hasOwnProperty.call(o, s)) t[s] = o[s];
        }
        return t;
    };
    o;
    s;
    _ = !1;
    console.log("I am dependency");
    function i() {
        return "Hello";
    }
    console.log(i());
}();

