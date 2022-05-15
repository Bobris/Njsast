(() => {
    function test(info) {
        const {isActive = !0} = info;
        if (!isActive) {
            console.log("Should not be printed");
        }
    }
    test({});
})();

