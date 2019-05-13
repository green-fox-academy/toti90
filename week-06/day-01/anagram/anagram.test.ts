`use strict`

import { anagram } from './anagram'
let test = require('tape')

test("First test", (t: any) => {
  t.equal(anagram("elbow", "below"),true);
  t.end();
});
test("Second test", (t: any) => {
  t.equal(anagram("night", "thing"),true);
  t.end();
});
test("Third test", (t: any) => {
  t.equal(anagram("something", "hello"),false);
  t.end();
});

test("Two word test", (t: any) => {
  t.equal(anagram("School master", "The classroom"),true);
  t.end();
});