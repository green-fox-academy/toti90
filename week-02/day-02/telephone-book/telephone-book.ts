`use strict`;
export{};
// We are going to represent our contacts in a map where the keys are going to be strings and the values are going to be strings as well.

// Create a map with the following key-value pairs.
//     Name (key)	        Phone number (value)
//     William A. Lathan	405-709-1865
//     John K. Miller	    402-247-8568
//     Hortensia E. Foster	606-481-6467
//     Amanda D. Newland	319-243-5613
//     Brooke P. Askew	    307-687-2982
// Create an application which solves the following problems.
// What is John K. Miller's phone number?
// Whose phone number is 307-687-2982?
// Do we know Chris E. Myers' phone number?

let telBook: any = {
    "William A. Lathan": "405-709-1865",
    "John K. Miller": "402-247-8568",
    "Hortensia E. Foster": "606-481-6467",
    "Amanda D. Newland": "319-243-5613",
    "Brooke P. Askew": "307-687-2982"
}

function telFunction(obj: any, name1: any, number: String, name2: any) {
    let sNumber = obj[name1];
    let sName = Object.keys(obj).filter(x => obj[x]===number)
    let sNumber2 = (obj[name2] !== undefined ? obj[name2]:"no number found for that name")
    return `${name1}'s number is ${sNumber}\n${number} is ${sName}'s number\n${sNumber2}`
}

console.log(telFunction(telBook, "John K. Miller", "307-687-2982", "Chris E. Myers"));


