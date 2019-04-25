import {fibonacci} from './fibonacci'
let test = require('tape')

test("First element", (t:any) => {
  t.equal(fibonacci(0), 0);
  t.end();
});

test("5th element", (t:any) => {
  t.equal(fibonacci(4), 3);
  t.end();
});

test("30th element", (t:any) => {
  t.equal(fibonacci(30), 832040);
  t.end();
});

