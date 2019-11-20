(function(n) {
    "use strict";
    Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(n, t) {
        n.__proto__ = t;
    } || function(n, t) {
        var o;
        for (o in t) if (t.hasOwnProperty(o)) n[o] = t[o];
    };
    Object.assign || function(n) {
        var t, o, e, r;
        for (t = 1, o = arguments.length; t < o; t++) {
            e = arguments[t];
            for (r in e) if (Object.prototype.hasOwnProperty.call(e, r)) n[r] = e[r];
        }
        return n;
    };
    console.log("I am dependency");
    function t() {
        return "Hello";
    }
    console.log(t());
})();

