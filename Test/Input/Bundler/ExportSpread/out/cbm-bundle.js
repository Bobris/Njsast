(function(_) {
    "use strict";
    var n, o, t, r, e, f, p, s;
    Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(_, n) {
        _.__proto__ = n;
    } || function(_, n) {
        var o;
        for (o in n) if (n.hasOwnProperty(o)) _[o] = n[o];
    };
    Object.assign || function(_) {
        var n, o, t, r;
        for (n = 1, o = arguments.length; n < o; n++) {
            t = arguments[n];
            for (r in t) if (Object.prototype.hasOwnProperty.call(t, r)) _[r] = t[r];
        }
        return _;
    };
    function i() {
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
    n = (p = i(), p.f1), o = p.f2, t = p.f3;
    r = (s = i(), s.f1), e = s.f2, f = s.f3;
    console.log(n());
    console.log(o());
    console.log(t());
    console.log(r());
    console.log(e());
    console.log(f());
})();

