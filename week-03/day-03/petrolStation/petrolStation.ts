`use strict`
export{}

// Create a Station and a Car classes
//   Station
//     gasAmount
//     refill(car) -> decreases the gasAmount by the capacity of the car and increases the cars gasAmount
//   Car
//     gasAmount
//     capacity
//     create constructor for Car where:
//     initialize gasAmount -> 0
//     initialize capacity -> 100

class Car {
  public gasAmount: number;
  public capacity: number

  constructor(gasAmount:number = 0, capacity:number = 100) {
    this.gasAmount = gasAmount
    this.capacity = capacity
  }

  Gas() {
    this.gasAmount = this.capacity
  }
}

class Station {
  public gasAmount: number;
  constructor(gasAmount:number) {
    this.gasAmount = gasAmount
  }

  refill(car:Car) {
    car.Gas()
    this.gasAmount -= car.capacity
  }

}

let station1 = new Station(1000);
console.log(`Station gas amount: ${station1.gasAmount}`);
let car1 = new Car()
console.log(`Car gas Amount: ${car1.gasAmount}, and capacity is: ${car1.capacity}`);
station1.refill(car1);
console.log(`Car gas Amount: ${car1.gasAmount}, and capacity is: ${car1.capacity}`);
console.log(`Station gas amount: ${station1.gasAmount}`);

