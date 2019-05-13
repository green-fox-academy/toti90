`use strict`

import { numberConverter } from './numberConverter'
let test = require('tape')

test("First test", (t: any) => {
  t.equal(numberConverter(745), "seven hundred and fourty five dollars");
  t.end();
});
