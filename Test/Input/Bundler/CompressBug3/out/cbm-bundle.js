(() => {
    function t(t) {
        const {isActive: o = !0} = t;
        if (!o) {
            console.log("Should not be printed");
        }
    }
    t({});
})();

