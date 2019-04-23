`use strict`;

export class Aircraft {
  type: string;
  currentAmmo:number;
  maxAmmo: number;
  baseDamage: number;

  constructor(type:string) {
    this.type = type;
    this.currentAmmo = 0;
    this.maxAmmo = 0;
    this.baseDamage = 0;
  }
  fight():number {
    let damage = this.currentAmmo*this.baseDamage
    this.currentAmmo = 0;
    return damage
  }

  fill(amount:number):number {
    let freePlace = this.maxAmmo-this.currentAmmo
    if (amount < freePlace) {
      this.currentAmmo += amount
      return 0
    } else {
      this.currentAmmo = this.maxAmmo
      return amount-freePlace
    }
  }

  getType():string {
    return this.type
  }

  getStatus():string {
    return `Type ${this.type}, Ammo: ${this.currentAmmo}, Base Damage: ${this.baseDamage}, All Damage: ${this.baseDamage*this.currentAmmo}`
  }

  isPriority() {
    return this.type === "F35" ? true:false;
  }
}