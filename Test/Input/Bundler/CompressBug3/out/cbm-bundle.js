(() => {
    function t(t) {
        const {isActive: o = !0} = t;
        o || console.log("Should not be printed");
    }
    t({});
})();

