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

test('Try loosing game after 8 guess', function (t: any): any {
  let game = new CowsAndBulls(7624)
  for (let i=0;i<8;i++) {
    game.guess(7296)
  }
  t.equal(game.guess(7296), `You havent got more round. You lost the game`)
  t.end();
});

test('Guess with not a four digit number', function (t: any): any {
  let game = new CowsAndBulls(7624)
  t.equal(game.guess(729), 'Please guess a 4 long number')
  t.equal(game.guess(729222), 'Please guess a 4 long number')
  t.end();
});