(() => {
    var s, n;
    (() => {
        n = class Klass {
            constructor() {
                console.log("Klass");
            }
            method() {
                new Klass();
            }
        };
    })();
    s = new n();
    s.method();
})();

