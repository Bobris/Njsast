"use strict";
var First, Second, Third;
(function(First) {
  First["A"] = "a";
  First["B"] = "b";
})(First || (First = {}));
(function(Second) {
  Second["AA"] = "aa";
  Second["BB"] = "bb";
})(Second || (Second = {}));
(function(Third) {
  Third["AAA"] = "aaa";
  Third["BBB"] = "bbb";
})(Third || (Third = {}));
console.log(First.A, Second.AA, Third.AAA);
