"use strict";
var __c0v = new Uint32Array(16);

window.__c0v = __c0v;

function __c0vS(i) {
    __c0v[i]++;
}

function __c0vC(r, i) {
    __c0v[i + (r ? 1 : 0)]++;
    return r;
}

Object.defineProperty(exports, "__esModule", {
    value: true
});

function inc() {
    __c0vS(0);
    console.log("Luck");
}

function exported() {
    __c0vS(1);
    console.log("exp");
}

exports.exported = exported;

__c0vS(2);

var expr = __c0vC(Math.random() > 0.5, 3) ? "A" : (__c0vS(5), inc(), __c0vS(6), "B");

__c0vS(7);

while (true) {
    __c0vS(8);
    break;
}

__c0vS(9);

if (__c0vC(__c0vC(Math.random() > 0.5, 10) && Math.random() < 0.5, 12)) {
    __c0vS(14);
    console.log("combined conditions");
}

__c0vS(15);

console.log(expr);

//# sourceMappingURL=cov.js.map
