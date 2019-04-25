'use strict';

let test = require('tape')
import { Animal } from './animal';

test('initialized hunger value is 50', function (t: any): any {
  let animal = new Animal()
  t.equal(animal.hunger, 50);
  t.end();
});

test('eat function decrease hunger to 49', function (t: any): any {
  let animal = new Animal()
  animal.eat()
  t.equal(animal.hunger, 49);
  t.end();
});

test('play function increase both hunger and thirst by one', function (t: any): any {
  let animal = new Animal()
  animal.play()
  t.equal(animal.hunger, 51);
  t.equal(animal.thirst, 50);
  t.end();
});