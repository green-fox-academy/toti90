`use strict`

import { potter } from './potter'
let test = require('tape')

test("First test", (t: any) => {
  t.equal(potter([2,2,2,1,1]), 51.6);
  t.end();
});
test("Second test", (t: any) => {
  t.equal(potter([5,4,3,2,1]), 100.4);
  t.end();
});
test("Third test", (t: any) => {
  t.equal(potter([1,1,1,1,1]), 30);
  t.end();
});
test("Forth test", (t: any) => {
  t.equal(potter([1,1,0,0,0]), 15.2);
  t.end();
});