"use strict";
var __c0v = new Uint32Array(18);

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

__c0vS(0);

function inc() {
    __c0vS(1);
    console.log("Luck");
}

__c0vS(2);

function exported() {
    __c0vS(3);
    console.log("exp");
}

exports.exported = exported;

__c0vS(4);

var expr = __c0vC(Math.random() > 0.5, 5) ? "A" : (__c0vS(7), inc(), __c0vS(8), "B");

__c0vS(9);

while (true) {
    __c0vS(10);
    break;
}

__c0vS(11);

if (__c0vC(__c0vC(Math.random() > 0.5, 12) && Math.random() < 0.5, 14)) {
    __c0vS(16);
    console.log("combined conditions");
}

__c0vS(17);

console.log(expr);

//# sourceMappingURL=cov.js.map
