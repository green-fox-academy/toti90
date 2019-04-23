import { Aircraft } from "./aircraft";

`use strict`;

export class Carrier {
  carrier: Aircraft[];
  ammoStore:number;
  health:number;

  constructor(ammoStore:number, health:number) {
    this.carrier = []
    this.ammoStore = ammoStore;
    this.health = health;
  }

  add(aircraft:Aircraft) {
    this.carrier.push(aircraft)
  }

  fillCarrier() {
    if (this.ammoStore === 0) {
      console.log(`No ammo in ammo Store`)
    } 
    else {
      let priorities = []
      let noPriorities = []
      for (let plane of this.carrier) {
        plane.isPriority() ? priorities.push(plane):noPriorities.push(plane);
      }
      for (let plane of priorities) {
        this.ammoStore = plane.fill(this.ammoStore)
      }
      for (let plane of noPriorities) {
        this.ammoStore = plane.fill(this.ammoStore)
      }
    }
  }

  fight(otherCarrier:Carrier) {
    this.health = this.health - otherCarrier.getAllDamage();
    otherCarrier.health -= this.getAllDamage();
    for(let plane of this.carrier) {
      plane.currentAmmo = 0;
    }
    for(let plane of otherCarrier.carrier) {
      plane.currentAmmo = 0;
    }
  }

  getAllDamage() {
    let allDamage = 0
    for (let plane of this.carrier) {
      allDamage += plane.currentAmmo*plane.baseDamage
    }
    return allDamage
  }

  getStatus():string {
    if(this.health <= 0) {
      return `It's dead Jim :(`;
    }
    else { 
      let result =  `HP: ${this.health}, Aircraft count: ${this.carrier.length}, Ammo Storage: ${this.ammoStore}, Total damage: ${this.getAllDamage()}
Aircrafts: 
`
    for (let plane of this.carrier) {
      result += `${plane.getStatus()} \n` 
    }
    return result
  }
  }

}