(function(t) {
    "use strict";
    var _ = {}, p;
    (function(t) {
        t[t["Start"] = 0] = "Start";
        t[t["Stop"] = 1] = "Stop";
    })(_);
    function o() {
        console.log(1);
    }
    p = {
        Opts: _,
        ok: o
    };
    if (p != null) o();
}).call(this);

