import { ex22 as e } from "External2";

import r, { ex3 as t, ex2 as x } from "External";

function o() {
    return {
        a: r,
        b: x,
        c: t,
        d: e
    };
}

export { o as getDescriptor };

