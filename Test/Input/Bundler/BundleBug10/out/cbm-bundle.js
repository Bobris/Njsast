(function(r) {
    "use strict";
    var o, t;
    o = Symbol.for("Type");
    const e = Symbol("kError");
    const _ = Symbol("kNext");
    class A {
        constructor() {
            this[t] = "B";
        }
        [(t = o, e)]() {
            throw new Error();
        }
        [_]() {
            console.log("next");
        }
    }
    new A();
}).call(this);

