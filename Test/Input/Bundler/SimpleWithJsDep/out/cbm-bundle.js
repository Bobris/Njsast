!function(n) {
    "use strict";
    var t, e, o;
    t = Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(n, t) {
        n.__proto__ = t;
    } || function(n, t) {
        var e;
        for (e in t) if (t.hasOwnProperty(e)) n[e] = t[e];
    };
    e = Object.assign || function(n) {
        var t, e, o, s;
        for (t = 1, e = arguments.length; t < e; t++) {
            o = arguments[t];
            for (s in o) if (Object.prototype.hasOwnProperty.call(o, s)) n[s] = o[s];
        }
        return n;
    };
    o = !1;
    console.log("I am dependency");
    function s() {
        return "Hello";
    }
    console.log(s());
}();

