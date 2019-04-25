`use strict`;

let test = require('tape')
import { CowsAndBulls } from './cowsAndBulls';

test('test initializtion values', function (t: any): any {
  let game = new CowsAndBulls(3452)
  t.equal(game.answer, 3452);
  t.ok(game.isPlaying);
  t.equal(game.numberOfGuesses, 0);
  t.end();
});


test('Try 7624 as answer and 7296 as guess', function (t: any): any {
  let game = new CowsAndBulls(7624)
  t.equal(game.guess(7296), "1 cow,2 bull")
  t.end();
});