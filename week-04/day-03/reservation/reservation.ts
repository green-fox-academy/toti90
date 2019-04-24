`use strict`

interface Reservationy {
  getDowBooking(): string;
  getCodeBooking(): string;
}

class Reservation implements Reservationy {
  dow:string;
  code:string;

  constructor() {
    this.dow = this.getDowBooking()
    this.code = this.getCodeBooking()
  }

  getDowBooking(): string {
    return Math.random().toString(36).slice(-8).toUpperCase()
  }

  getCodeBooking(): string{
    let days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"]
    return days[Math.floor(Math.random()*7)]
  }

  print() {
    console.log(`Booking# ${this.dow} for ${this.code}`)
  }
}

let reservation1 = new Reservation()
let reservation2 = new Reservation()
let reservation3 = new Reservation()
let reservation4 = new Reservation()
let reservation5 = new Reservation()
let reservation6 = new Reservation()
let reservation7 = new Reservation()
reservation1.print()
reservation2.print()
reservation3.print()
reservation4.print()
reservation5.print()
reservation6.print()
reservation7.print()
