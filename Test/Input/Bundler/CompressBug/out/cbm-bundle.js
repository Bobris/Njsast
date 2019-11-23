(function(e) {
    "use strict";
    var t = /([A-Z])/g, s = /^ms-/;
    Object.setPrototypeOf;
    Object.assign;
    function n(e) {
        if (e === "cssFloat") return "float";
        return e.replace(t, "-$1").toLowerCase().replace(s, "-ms-");
    }
    function r(t) {
        var s = "", r, a;
        for (a in t) {
            r = t[a];
            if (r === e) continue;
            s += n(a) + ":" + (r === "" ? "\"\"" : r) + ";";
        }
        s = s.slice(0, -1);
        return s;
    }
    console.log(r({
        a: 1,
        b: 2
    }));
})();

