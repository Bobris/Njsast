(function(o) {
    "use strict";
    var t, r, n, e;
    t = window;
    r = {
        doIt: function(o) {
            console.log(o);
        },
        dontIt: function() {
            var o = "KO";
            t.console.log(o);
        }
    };
    n = function(o) {
        Object.keys(o).forEach(function(t) {
            var r = o[t];
            o[t] = function(o) {
                r(t + ":" + o);
            };
        });
        return o;
    };
    e = n(r);
    if ("test" in window) {
        setTimeout(window.test, 1);
    }
    e.doIt("Ok");
}).call(this);

