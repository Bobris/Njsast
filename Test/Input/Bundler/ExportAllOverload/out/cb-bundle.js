(() => {
    function fn() {
        console.log(fn_lib());
        return "OK2";
    }
    function fn_lib() {
        return "OK1";
    }
    function fn2() {
        return "OK3";
    }
    console.log(fn_lib());
    console.log(fn());
    console.log(fn2());
})();

