`use strict`;

import{Aircraft}from './aircraft';

export class F35 extends Aircraft {
  constructor() {
    super("F35")
    this.maxAmmo = 12;
    this.baseDamage = 50;
  }
}