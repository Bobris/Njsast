(function(_) {
    "use strict";
    var o, n, e, t, f, r, p, x;
    Object.setPrototypeOf;
    Object.assign;
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
    o = (p = c(), p.f1), n = p.f2, e = p.f3;
    t = (x = c(), x.f1), f = x.f2, r = x.f3;
    console.log(o());
    console.log(n());
    console.log(e());
    console.log(t());
    console.log(f());
    console.log(r());
})();

