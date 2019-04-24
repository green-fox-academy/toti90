`use strict`

// Create a Flyable interface
//   it should have land, fly and takeOff methods (TakeOff in C#)

interface Flyable {
  land(): void,
  fly(): void,
  takeOff(): void
}

// Create an abstract Vehicle class
//   it should have at least 3 fields

abstract class Vehicle {
  price: number = 0;
  color: string = "";
  speed: number = 0
}
// Extend Helicopter class from Vehicle
//   implement your Flyable interface

class Helicopter extends Vehicle implements Flyable {
  land(): void {};
  fly(): void {};
  takeOff(): void {};
}
// Extend Bird from your abstract Animal class (zoo exercise)
//   implement yourˇFlyable interface

import {Animal} from '../../../week-03/day-03/animal/animal'

class Bird extends Animal implements Flyable {
  land(): void {};
  fly(): void {};
  takeOff(): void {};
}

