(() => {
    var o = "OK";
    function n(o) {
        return o;
    }
    function e(o) {
        return o;
    }
    n("KO");
    function r() {
        var o = e("hello");
        console.log(o);
    }
    r();
    console.log(o);
})();

