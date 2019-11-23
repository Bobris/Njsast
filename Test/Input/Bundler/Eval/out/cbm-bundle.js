(function(n) {
    "use strict";
    Object.setPrototypeOf;
    Object.assign;
    function e() {
        eval("return 1");
    }
    function t(n) {
        return n + e();
    }
    console.log(t("a"));
})();

