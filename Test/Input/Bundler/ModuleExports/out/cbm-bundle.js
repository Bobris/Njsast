(function(o) {
    "use strict";
    var r, a, t, n;
    r = window;
    a = {
        doIt: function(o) {
            console.log(o);
        },
        dontIt: function() {
            var o = "KO";
            r.console.log(o);
        }
    };
    t = function(o) {
        Object.keys(o).forEach(function(r) {
            var a = o[r];
            o[r] = function(o) {
                a(r + ":" + o);
            };
        });
        return o;
    };
    n = t(a);
    if ("test" in window) {
        setTimeout(window.test, 1);
    }
    n.doIt("Ok");
}).call(this);

