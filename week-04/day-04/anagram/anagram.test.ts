import {anagram} from './anagram'
var test = require('tape');

test("Test two word", (t:any) => {
  t.equal(anagram("listen", "silent"), true);
  t.end();
});

test("Test two word with space", (t:any) => {
  t.equal(anagram("listen", "silent "), true);
  t.end();
});

test("Test with empty word", (t:any) => {
  t.equal(anagram("", ""), true);
  t.end();
});