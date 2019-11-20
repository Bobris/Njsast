!function(t) {
    "use strict";
    var p, s, n, _, r;
    p = Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(t, p) {
        t.__proto__ = p;
    } || function(t, p) {
        var s;
        for (s in p) if (p.hasOwnProperty(s)) t[s] = p[s];
    };
    s = Object.assign || function(t) {
        var p, s, n, _;
        for (p = 1, s = arguments.length; p < s; p++) {
            n = arguments[p];
            for (_ in n) if (Object.prototype.hasOwnProperty.call(n, _)) t[_] = n[_];
        }
        return t;
    };
    n = !1;
    (function(t) {
        t[t["Start"] = 0] = "Start";
        t[t["Stop"] = 1] = "Stop";
    })(_ = r || (r = {}));
    console.log(r.Start);
}();

