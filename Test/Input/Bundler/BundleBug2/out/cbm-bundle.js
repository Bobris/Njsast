(function(e) {
    "use strict";
    var t, n, i;
    t = function() {
        function e() {}
        e.prototype.clear = function() {
            n = new e();
        };
        return e;
    }();
    n = new t();
    i = new t();
    i.clear();
    n.clear();
}).call(this);

