`use strict`;

// Create a map where the keys are strings and the values are strings with the following initial values
//     Key	                Value
//     978-1-60309-452-8	A Letter to Jo
//     978-1-60309-459-7	Lupus
//     978-1-60309-444-3	Red Panda and Moon Bear
//     978-1-60309-461-0	The Lab
// Print all the key-value pairs in the following format
//     A Letter to Jo (ISBN: 978-1-60309-452-8)
//     Lupus (ISBN: 978-1-60309-459-7)
//     Red Panda and Moon Bear (ISBN: 978-1-60309-444-3)
//     The Lab (ISBN: 978-1-60309-461-0)
// Remove the key-value pair with key 978-1-60309-444-3
// Remove the key-value pair with value The Lab
// Add the following key-value pairs to the map
//     Key	                Value
//     978-1-60309-450-4	They Called Us Enemy
//     978-1-60309-453-5	Why Did We Trust Him?
// Print whether there is an associated value with key 478-0-61159-424-8 or not
// Print the value associated with key 978-1-60309-453-5

let obj1:any = {
    "978-1-60309-452-8": "A Letter to Jo",
    "978-1-60309-459-7": "Lupus",
    "978-1-60309-444-3": "Red Panda and Moon Bear",
    "978-1-60309-461-0": "The Lab"
}
Object.keys(obj1).map(x => console.log(`${obj1[x]} (ISBN: ${x})`));
delete obj1["978-1-60309-444-3"];
Object.keys(obj1).forEach(x => (obj1[x] === "The Lab") ? (delete obj1[x]):undefined);
console.log(obj1);
//Solution2
// let obj2:any ={};
// Object.keys(obj1).map(x => (obj1[x] !== "Red Panda and Moon Bear") ? (obj2[x]=obj1[x]):undefined);
// console.log(obj2);
obj1["978-1-60309-450-4"] = "They Called Us Enemy";
obj1["978-1-60309-453-5"] = "Why Did We Trust Him?";
console.log(obj1["478-0-61159-424-8"] !== undefined ? "there is an instance with that ISBN": "no instances with given ISBN");
console.log(obj1["978-1-60309-453-5"]);
