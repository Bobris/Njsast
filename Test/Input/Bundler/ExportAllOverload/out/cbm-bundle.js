(() => {
    function n() {
        console.log(o());
        return "OK2";
    }
    function o() {
        return "OK1";
    }
    function l() {
        return "OK3";
    }
    console.log(o());
    console.log(n());
    console.log(l());
})();

