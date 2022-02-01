(function(r) {
    "use strict";
    var s, t;
    s = Array.isArray;
    t = s;
    function a(r) {
        t = r;
    }
    function o() {
        console.log(s([]));
        console.log(t([]));
    }
    a(function(r) {
        return s(r);
    });
    console.log(s([]));
    o();
}).call(this);

