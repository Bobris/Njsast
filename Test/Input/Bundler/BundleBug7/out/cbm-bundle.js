(e => {
    var s = 60 * 1e3, n, i, t;
    function o(e) {
        t = e;
    }
    n = function() {
        if (!t) {
            o(setInterval(function() {}, s));
        }
    };
    i = function() {
        if (t) {
            clearInterval(t);
            o(e);
        }
    };
    n();
    console.log("working");
    i();
})();

