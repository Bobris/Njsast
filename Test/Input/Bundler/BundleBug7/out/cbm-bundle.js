(function(e) {
    "use strict";
    var s = 60 * 1e3, t, n, i;
    function o(e) {
        i = e;
    }
    t = function() {
        if (!i) {
            o(setInterval(function() {}, s));
        }
    };
    n = function() {
        if (i) {
            clearInterval(i);
            o(e);
        }
    };
    t();
    console.log("working");
    n();
}).call(this);

