(() => {
    var o, r, t, e;
    o = window;
    r = {
        doIt: function(o) {
            console.log(o);
        },
        dontIt: function() {
            var r = "KO";
            o.console.log(r);
        }
    };
    t = function(o) {
        Object.keys(o).forEach(function(r) {
            var t = o[r];
            o[r] = function(o) {
                t(r + ":" + o);
            };
        });
        return o;
    };
    e = t(r);
    "test" in window && setTimeout(window.test, 1);
    e.doIt("Ok");
})();

