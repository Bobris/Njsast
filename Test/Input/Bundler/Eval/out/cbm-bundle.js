!function(n) {
    "use strict";
    function e() {
        eval("return 1");
    }
    function t(n) {
        return n + e();
    }
    console.log(t("a"));
}();

