(() => {
    function n() {
        return "OK1";
    }
    function f() {
        n();
        return "OK2";
    }
    console.log(f());
})();

