(function(t) {
    "use strict";
    var _ = {}, o;
    (function(t) {
        t[t["Start"] = 0] = "Start";
        t[t["Stop"] = 1] = "Stop";
    })(_);
    function p() {
        console.log(1);
    }
    o = {
        Opts: _,
        ok: p
    };
    if (o != null) p();
}).call(this);

