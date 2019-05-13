`use strict`

import { indexOf } from './indexOf'
let test = require('tape')

test("First test", (t: any) => {
  t.equal(indexOf([1,2,3,4,5],2),1);
  t.end();
});

test("Minus one", (t: any) => {
  t.equal(indexOf([1,2,3,4,5],6),-1);
  t.end();
});

test("Any test", (t: any) => {
  t.equal(indexOf([1,"a",true,"cde",false],false),4);
  t.end();
});
