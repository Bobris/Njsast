(function(_) {
    "use strict";
    var o, n, e, f, r, t, x, p;
    function c() {
        return {
            f1: function() {
                return "a";
            },
            f2: function() {
                return "b";
            },
            f3: function() {
                return "c";
            }
        };
    }
    o = (x = c(), x.f1), n = x.f2, e = x.f3;
    f = (p = c(), p.f1), r = p.f2, t = p.f3;
    console.log(o());
    console.log(n());
    console.log(e());
    console.log(f());
    console.log(r());
    console.log(t());
})();

