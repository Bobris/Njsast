(function(e) {
    "use strict";
    var t, n, r;
    t = function() {
        function e() {}
        e.prototype.clear = function() {
            n = new e();
        };
        return e;
    }();
    n = new t();
    r = new t();
    r.clear();
    n.clear();
}).call(this);
