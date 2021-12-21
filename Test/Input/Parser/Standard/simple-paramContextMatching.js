function f ([ name, val ]) {
    console.log(name, val);
}
function g ({ name: n, val: v }) {
    console.log(n, v);
}
function h ({ name, val }) {
    console.log(name, val);
}
f([ "bar", 42 ]);
g({ name: "foo", val:  7 });
h({ name: "bar", val: 42 });
