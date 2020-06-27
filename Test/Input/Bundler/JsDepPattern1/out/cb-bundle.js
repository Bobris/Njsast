(function(undefined) {
    "use strict";
    var converters_dep;
    converters_dep = window.converters = window.converters || {};
    (function() {
        var converters = window.converters;
        converters.statics = converters.statics || {};
        converters.inherit = function(child, base) {
            function Temp() {
                this.constructor = child;
            }
            Temp.prototype = base.prototype;
            child.prototype = new Temp();
        };
        converters.BuildType = {
            Default: "Default",
            WithReferences: "WithReferences"
        };
    })();
    converters_dep.doIt = function() {
        console.log("Ok");
    };
    window.converters = converters_dep;
    function hello() {
        converters.doIt();
    }
    hello();
}).call(this);

