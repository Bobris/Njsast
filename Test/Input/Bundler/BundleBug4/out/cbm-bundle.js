(() => {
    var n = {};
    function _() {
        console.log("fun");
    }
    (function(n) {
        function u() {
            _();
        }
        n.fun = u;
    })(n);
    n.fun();
})();

