function inc() {
  console.log("Luck");
}

let expr = Math.random() > 0.5 ? "A" : (inc(), "B");

console.log(expr);
