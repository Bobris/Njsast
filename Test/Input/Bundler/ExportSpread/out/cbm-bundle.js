(() => {
    var _, o, n, f, e, r, t, x;
    function p() {
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
    _ = (t = p(), t.f1), o = t.f2, n = t.f3;
    f = (x = p(), x.f1), e = x.f2, r = x.f3;
    console.log(_());
    console.log(o());
    console.log(n());
    console.log(f());
    console.log(e());
    console.log(r());
})();

