{
  const { aa, bb } = { aa: 1, bb: 2 };
}
{
  const {
    aa,
    bb: { cc, dd },
  } = { aa: 1, bb: { cc: 2, dd: 3 } };
}
{
  let { aa, bb } = { aa: 1, bb: 2 };
}
{
  let {
    aa,
    bb: { cc, dd },
  } = { aa: 1, bb: { cc: 2, dd: 3 } };
}
var { aa, bb } = { aa: 1, bb: 2 };
var {
  aa,
  bb: { cc, dd },
} = { aa: 1, bb: { cc: 2, dd: 3 } };
