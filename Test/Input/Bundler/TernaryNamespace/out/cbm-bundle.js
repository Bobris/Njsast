(() => {
    var _, b, n;
    function r(_, b) {
        return _ + b;
    }
    _ = {
        fn: r
    };
    function o(_, b) {
        return _ - b;
    }
    b = {
        fn: o
    };
    n = Math.random() > .5 ? _ : b;
    console.log(n.fn(1, 2));
})();

