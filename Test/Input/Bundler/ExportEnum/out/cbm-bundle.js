!function(t) {
    "use strict";
    var _, s, p, n, r, e, o, a;
    _ = Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(t, _) {
        t.__proto__ = _;
    } || function(t, _) {
        var s;
        for (s in _) if (_.hasOwnProperty(s)) t[s] = _[s];
    };
    s = Object.assign || function(t) {
        var _, s, p, n;
        for (_ = 1, s = arguments.length; _ < s; _++) {
            p = arguments[_];
            for (n in p) if (Object.prototype.hasOwnProperty.call(p, n)) t[n] = p[n];
        }
        return t;
    };
    p;
    n;
    r;
    e = !1;
    (function(t) {
        t[t["Start"] = 0] = "Start";
        t[t["Stop"] = 1] = "Stop";
    })(o = a || (a = {}));
    console.log(a.Start);
}();

