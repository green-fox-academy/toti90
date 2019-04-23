`use strict`;

import{Aircraft}from './aircraft';

export class F16 extends Aircraft {

  constructor() {
    super("F16")
    this.maxAmmo = 8;
    this.baseDamage = 30;
  }
}