(function(e) {
    "use strict";
    var t = /([A-Z])/g, n = /^ms-/;
    function s(e) {
        if (e === "cssFloat") return "float";
        return e.replace(t, "-$1").toLowerCase().replace(n, "-ms-");
    }
    function r(t) {
        var n = "", r, a;
        for (a in t) {
            r = t[a];
            if (r === e) continue;
            n += s(a) + ":" + (r === "" ? "\"\"" : r) + ";";
        }
        n = n.slice(0, -1);
        return n;
    }
    console.log(r({
        a: 1,
        b: 2
    }));
})();

