var converters = function() {
    "use strict";
    window.converters = window.converters || {};
    (function() {
        var e = window.converters;
        e.statics = e.statics || {};
        e.inherit = function(e, t) {
            function r() {
                this.constructor = e;
            }
            r.prototype = t.prototype;
            e.prototype = new r();
        };
        e.BuildType = {
            Default: "Default",
            WithReferences: "WithReferences"
        };
    })();
    converters.doIt = function() {
        console.log("Ok");
    };
    return converters;
}();

(() => {
    function e() {
        converters.doIt();
    }
    e();
})();

