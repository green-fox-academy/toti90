'use strict';

import { Plant } from "./plant";

export class Flower extends Plant {

  constructor(color: string) {
    super("Flower", color);
  }

  watering(amount: number) {
    let useAmount = amount * 0.75;
    if (this.water < 5) {
      super.watering(useAmount);
      if (this.water > 4) {
        this.isNeedWater = false;
      }
    }
  }
}


