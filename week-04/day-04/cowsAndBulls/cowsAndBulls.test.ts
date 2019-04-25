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
