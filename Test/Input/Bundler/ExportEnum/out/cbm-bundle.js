(function(o) {
    "use strict";
    var _ = {};
    (function(o) {
        o[o["A"] = 0] = "A";
        o[o["B"] = 1] = "B";
    })(_);
    console.log(0);
    console.log(_[1]);
    console.log("No");
}).call(this);

