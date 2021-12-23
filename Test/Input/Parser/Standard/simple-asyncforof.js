async function asyncFunction() {
    console.log(await fetch("a"));
    await fetch("b");
    const promises = [fetch("c"), fetch("d")];
    for await (const item of promises) {
        console.log(item);
    }
}
