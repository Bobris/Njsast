var __c0v = new Uint32Array(8);

window.__c0v = __c0v;

function __c0vS(i) {
    __c0v[i]++;
}

function __c0vC(r, i) {
    __c0v[i + (r ? 1 : 0)]++;
    return r;
}

__c0vS(0);

function inc() {
    __c0vS(1);
    console.log("Luck");
}

__c0vS(2);

var expr = __c0vC(Math.random() > 0.5, 3) ? "A" : (__c0vS(5), inc(), __c0vS(6), "B");

__c0vS(7);

console.log(expr);

//# sourceMappingURL=cov.js.map
