import {Numbers} from './sum'
var test = require('tape');

test("Multi element Array test", (t:any) => {
  let numbers = new Numbers([3,4,2,7,4])
  t.equal(numbers.sum(), 20);
  t.end();
});

test("Empty array test", (t:any) => {
  let numbers = new Numbers([])
  t.equal(numbers.sum(), 0);
  t.end();
});

test("One element array test", (t:any) => {
  let numbers = new Numbers([3])
  t.equal(numbers.sum(), 3);
  t.end();
});
