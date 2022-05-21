const getGlobals = () => globals, setGlobals = a => {
    globals = {
        isSortingDisabled: a
    };
};

let globals = {
    isSortingDisabled: !1
};

function getDescriptor() {
    return {
        asd: "df"
    };
}

export { getGlobals, setGlobals, getDescriptor };

