(function(e) {
    "use strict";
    var t;
    t = window.converters = window.converters || {};
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
    t.doIt = function() {
        console.log("Ok");
    };
    window.converters = t;
    function r() {
        converters.doIt();
    }
    r();
}).call(this);

