console.log("I am dependency");

(() => {
    function o() {
        return "Hello";
    }
    console.log(o());
})();

