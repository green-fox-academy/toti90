`use strict`;

import{Aircraft}from './aircraft';
import { F16 } from './f16';
import { F35 } from './f35';
import { Carrier } from './carrier';

let carrier1 = new Carrier(50,3000)
carrier1.add(new F16());
carrier1.add(new F35());
carrier1.add(new F35());
carrier1.fillCarrier();
console.log(carrier1.getStatus());
console.log('------');
let carrier2 = new Carrier(130,5000)
carrier2.add(new F35());
carrier2.add(new F16());
carrier2.add(new F35());
carrier2.add(new F16());
carrier2.fillCarrier();
console.log(carrier2.getStatus());
console.log('------');
carrier1.fight(carrier2);
console.log(carrier1.getStatus());
console.log('------');
console.log(carrier2.getStatus());
carrier1.fillCarrier();
carrier2.fillCarrier();
console.log(carrier1.getStatus());
console.log('------');
console.log(carrier2.getStatus());
carrier1.fight(carrier2);
console.log(carrier1.getStatus());
console.log('------');
console.log(carrier2.getStatus());


