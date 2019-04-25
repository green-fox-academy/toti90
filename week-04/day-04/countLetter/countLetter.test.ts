import {countLetter} from './countLetter'
var test = require('tape');

test("Test1", (t:any) => {
  t.deepEqual(countLetter("dog"), {"d":1,"o":1,"g":1});
  t.end();
});

test("Test2", (t:any) => {
  t.deepEqual(countLetter("something is happen"), {"s":2,"o":1,"m":1, "e":2,"t":1,"h":2,"i":2,"n":2,"g":1,"a":1,"p":2});
  t.end();
});