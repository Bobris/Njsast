(() => {
    function n() {
        eval("return 1");
    }
    function e(e) {
        return e + n();
    }
    console.log(e("a"));
})();

