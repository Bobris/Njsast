(function(n) {
    "use strict";
    var o = "OK";
    function e(n) {
        return n;
    }
    function t(n) {
        return n;
    }
    e("KO");
    function r() {
        var n = t("hello");
        console.log(n);
    }
    r();
    console.log(o);
}).call(this);

