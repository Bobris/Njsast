!function(e) {
    "use strict";
    var t, n, s, r, a, i, o, _;
    t = Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(e, t) {
        e.__proto__ = t;
    } || function(e, t) {
        var n;
        for (n in t) if (t.hasOwnProperty(n)) e[n] = t[n];
    };
    n = Object.assign || function(e) {
        var t, n, s, r;
        for (t = 1, n = arguments.length; t < n; t++) {
            s = arguments[t];
            for (r in s) if (Object.prototype.hasOwnProperty.call(s, r)) e[r] = s[r];
        }
        return e;
    };
    s;
    r;
    a;
    i = !1;
    o = /([A-Z])/g;
    _ = /^ms-/;
    function p(e) {
        if (e === "cssFloat") return "float";
        return e.replace(o, "-$1").toLowerCase().replace(_, "-ms-");
    }
    function c(t) {
        var n = "", s, r;
        for (r in t) {
            s = t[r];
            if (s === e) continue;
            n += p(r) + ":" + (s === "" ? "\"\"" : s) + ";";
        }
        n = n.slice(0, -1);
        return n;
    }
    console.log(c({
        a: 1,
        b: 2
    }));
}();

