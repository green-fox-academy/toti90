import {Apple} from './apple'
var test = require('tape');

test("Class Test", (t:any) => {
  let apple = new Apple();
  t.equal(apple.getApple(), 'apple');
  t.end();
});