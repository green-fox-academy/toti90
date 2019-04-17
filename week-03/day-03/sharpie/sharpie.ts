`use strict`
export {}

// Create Sharpie class
//   We should know about each sharpie their color (which should be a string), width (which will be a floating point number),
//   inkAmount (another floating point number)
//   When creating one, we need to specify the color and the width
//   Every sharpie is created with a default 100 as inkAmount
//   We can use() the sharpie objects
//   which decreases inkAmount

class Sharpie {
  color: string;
  width: number;
  inkAmount: number = 100;

  constructor(color:string, width:number) {
    this.color = color
    this.width = width
  }

  use() {
    this.inkAmount--
  }

}

let sharpie1 = new Sharpie("brown", 25.2)
console.log(`Sharpie color is: ${sharpie1.color}, width is: ${sharpie1.width} and inkAmount is ${sharpie1.inkAmount}`)
sharpie1.use()
console.log(`Sharpie color is: ${sharpie1.color}, width is: ${sharpie1.width} and inkAmount is ${sharpie1.inkAmount}`)
