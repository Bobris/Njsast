(() => {
    var o, l;
    function t(o) {
        console.log("function Url:" + o);
    }
    t.hello = function() {
        console.log("Hello");
    };
    o = t;
    l = {
        test: function() {
            console.log(new o(1));
        }
    };
    l.test();
    function e() {
        URL.createObjectURL("");
    }
    e();
})();

