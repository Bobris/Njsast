(function(o) {
    "use strict";
    var r, t, a, n;
    r = window;
    t = {
        doIt: function(o) {
            console.log(o);
        },
        dontIt: function() {
            var o = "KO";
            r.console.log(o);
        }
    };
    a = function(o) {
        Object.keys(o).forEach(function(r) {
            var t = o[r];
            o[r] = function(o) {
                t(r + ":" + o);
            };
        });
        return o;
    };
    n = a(t);
    if ("test" in window) {
        setTimeout(window.test, 1);
    }
    n.doIt("Ok");
}).call(this);

