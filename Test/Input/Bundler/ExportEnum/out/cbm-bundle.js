(function(t) {
    "use strict";
    var p;
    Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(t, p) {
        t.__proto__ = p;
    } || function(t, p) {
        var r;
        for (r in p) if (p.hasOwnProperty(r)) t[r] = p[r];
    };
    Object.assign || function(t) {
        var p, r, o, n;
        for (p = 1, r = arguments.length; p < r; p++) {
            o = arguments[p];
            for (n in o) if (Object.prototype.hasOwnProperty.call(o, n)) t[n] = o[n];
        }
        return t;
    };
    (function(t) {
        t[t["Start"] = 0] = "Start";
        t[t["Stop"] = 1] = "Stop";
    })(p || (p = {}));
    console.log(p.Start);
})();

