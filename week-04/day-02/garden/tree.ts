'use strict';

import { Plant } from "./plant";

export class Tree extends Plant {

  constructor(color:string) {
    super("Tree",color)
  }

  watering(amount:number) {
    super.watering(amount)
    if (this.water > 9) {
      this.isNeedWater = false
    }
  }
}