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
        var t, o, r, i;
        for (t = 1, o = arguments.length; t < o; t++) {
            r = arguments[t];
            for (i in r) if (Object.prototype.hasOwnProperty.call(r, i)) n[i] = r[i];
        }
        return n;
    };
    console.log("lib");
    console.log("main");
})();

