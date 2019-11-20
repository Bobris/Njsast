(function(e) {
    "use strict";
    var t = /([A-Z])/g, n = /^ms-/;
    Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(e, t) {
        e.__proto__ = t;
    } || function(e, t) {
        var n;
        for (n in t) if (t.hasOwnProperty(n)) e[n] = t[n];
    };
    Object.assign || function(e) {
        var t, n, r, s;
        for (t = 1, n = arguments.length; t < n; t++) {
            r = arguments[t];
            for (s in r) if (Object.prototype.hasOwnProperty.call(r, s)) e[s] = r[s];
        }
        return e;
    };
    function r(e) {
        if (e === "cssFloat") return "float";
        return e.replace(t, "-$1").toLowerCase().replace(n, "-ms-");
    }
    function s(t) {
        var n = "", s, o;
        for (o in t) {
            s = t[o];
            if (s === e) continue;
            n += r(o) + ":" + (s === "" ? "\"\"" : s) + ";";
        }
        n = n.slice(0, -1);
        return n;
    }
    console.log(s({
        a: 1,
        b: 2
    }));
})();

