(function(n) {
    "use strict";
    var t, e, o, i;
    t = Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(n, t) {
        n.__proto__ = t;
    } || function(n, t) {
        var e;
        for (e in t) if (t.hasOwnProperty(e)) n[e] = t[e];
    };
    e = function(n, e) {
        t(n, e);
        function o() {
            this.constructor = n;
        }
        n.prototype = e === null ? Object.create(e) : (o.prototype = e.prototype, new o());
    };
    o = function() {
        function n() {}
        n.prototype.hello = function() {
            console.log("Base");
        };
        return n;
    }();
    i = function(n) {
        e(t, n);
        function t() {
            return n !== null && n.apply(this, arguments) || this;
        }
        t.prototype.hello = function() {
            console.log("Main");
        };
        return t;
    }(o);
    new i().hello();
}).call(this);

