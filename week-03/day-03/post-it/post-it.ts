`use strict`
export{};

// Create a PostIt a class that has
//   a backgroundColor
//   a text on it
//   a textColor
// Create a few example post-it objects:
//   an orange with blue text: "Idea 1"
//   a pink with black text: "Awesome"
//   a yellow with green text: "Superb!"

class PostIt {
  backgroundColor: string;
  text: string;
  textColor: string

  constructor(backgroundColor: string, text:string, textColor: string) {
    this.backgroundColor = backgroundColor
    this.text = text
    this.textColor = textColor
  }

  showDetails() {
    console.log(`a(n) ${this.backgroundColor} with ${this.textColor} text: "${this.text}"`);
  }

}

let post1 = new PostIt("orange", "Idea 1", "blue")
let post2 = new PostIt("pink", "Awesome", "black")
let post3 = new PostIt("yellow", "Superb!", "green")
post1.showDetails()
post2.showDetails()
post3.showDetails()
