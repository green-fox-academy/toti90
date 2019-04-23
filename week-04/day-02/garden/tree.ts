'use strict';

import { Plant } from "./plant";

export class Tree extends Plant {

  constructor(color: string) {
    super("Tree", color);
  }

  watering(amount: number) {
    let useAmount = amount * 0.4;
    if (this.water < 10) {
      super.watering(useAmount);
      if (this.water > 9) {
        this.isNeedWater = false;
      }
    }
  }
}