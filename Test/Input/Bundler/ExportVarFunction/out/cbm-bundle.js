(() => {
    var n;
    n = _;
    function _() {
        return "ko";
    }
    n = function() {
        return "ok";
    };
    console.log(n());
})();

