(function(e) {
    "use strict";
    var n, t, o, i;
    n = Object.setPrototypeOf || {
        __proto__: []
    } instanceof Array && function(e, n) {
        e.__proto__ = n;
    } || function(e, n) {
        var t;
        for (t in n) if (n.hasOwnProperty(t)) e[t] = n[t];
    };
    t = function(e, t) {
        n(e, t);
        function o() {
            this.constructor = e;
        }
        e.prototype = t === null ? Object.create(t) : (o.prototype = t.prototype, new o());
    };
    o = function() {
        function e() {}
        e.prototype.hello = function() {
            console.log("Base");
        };
        return e;
    }();
    (function(e) {
        t(n, e);
        function n() {
            return e !== null && e.apply(this, arguments) || this;
        }
        n.prototype.hello = function() {
            console.log("Derived");
        };
        return n;
    })(o);
    i = function(e) {
        t(n, e);
        function n() {
            return e !== null && e.apply(this, arguments) || this;
        }
        n.prototype.hello = function() {
            console.log("Main");
        };
        return n;
    }(o);
    new i().hello();
}).call(this);

