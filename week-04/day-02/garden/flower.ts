'use strict';

import { Plant } from "./plant";

export class Flower extends Plant {

  constructor(color:string) {
    super("Flower",color)
  }

  watering(amount:number) {
    super.watering(amount)
    if (this.water > 4) {
      this.isNeedWater = false
    }
  }
}


