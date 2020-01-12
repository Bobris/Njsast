!function(o) {
    "use strict";
    var e, r, t;
    e = function() {
        var o = {}, e = {
            exports: o
        };
        this;
        e.exports = {
            doIt: function(o) {
                console.log(o);
            },
            dontIt: function() {
                console.log("KO");
            }
        };
        return e.exports;
    }.call(window);
    r = function() {
        var o = {}, e = {
            exports: o
        };
        this;
        e.exports = function(o) {
            Object.keys(o).forEach(function(e) {
                var r = o[e];
                o[e] = function(o) {
                    r(e + ":" + o);
                };
            });
            return o;
        };
        return e.exports;
    }.call(window);
    t = function() {
        var o = {}, t = {
            exports: o
        }, p = this;
        t.exports = r(e);
        if ("test" in p) {
            setTimeout(p.test, 1);
        }
        return t.exports;
    }.call(window);
    t.doIt("Ok");
}();

