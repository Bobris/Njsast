(() => {
    var r, o;
    r = Symbol.for("Type");
    const e = Symbol("kError");
    const t = Symbol("kNext");
    class A {
        constructor() {
            this[o] = "B";
        }
        [(o = r, e)]() {
            throw new Error();
        }
        [t]() {
            console.log("next");
        }
    }
    new A();
})();

