'use strict';

let test = require('tape')
import { Sharpie } from './sharpie';

test('initialized ink value is 100', function (t: any): any {
  let sharpie = new Sharpie("yellow", 2.12)
  t.equal(sharpie.inkAmount, 100);
  t.end();
});

test('ink value after 5 usage goes to 95', function (t: any): any {
  let sharpie = new Sharpie("yellow", 2.12)
  for (let i = 0; i < 5; i++) {
    sharpie.use()
  }
  t.equal(sharpie.inkAmount, 95);
  t.end();
});

test('check initalized color', function (t: any): any {
  let sharpie = new Sharpie("yellow", 2.12)
  t.equal(sharpie.color, "yellow");
  t.end();
});

test('check initalized width', function (t: any): any {
  let sharpie = new Sharpie("yellow", 2.12)
  t.equal(sharpie.width, 2.12);
  t.end();
});