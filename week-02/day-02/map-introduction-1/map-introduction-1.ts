`use strict`;

// We are going to play with maps. Feel free to use the built-in methods where possible.
// Create an empty map where the keys are integers and the values are characters
// Print out whether the map is empty or not
// Add the following key-value pairs to the map
//     Key	Value
//     97	a
//     98	b
//     99	c
//     65	A
//     66	B
//     67	C
// Print all the keys
// Print all the values
// Add value D with the key 68
// Print how many key-value pairs are in the map
// Print the value that is associated with key 99
// Remove the key-value pair where with key 97
// Print whether there is an associated value with key 100 or not
// Remove all the key-value pairs

let testObj:any = {};
console.log(Object.keys(testObj).length===0 ? "empty":"note empty");
testObj[97] = "a";
testObj[98] = "b";
testObj[99] = "c";
testObj[65] = "A";
testObj[66] = "B";
testObj[67] = "C";
console.log(Object.keys(testObj));
console.log(Object.values(testObj));
testObj[68] = "D";
console.log(Object.entries(testObj).length);
console.log(testObj[99]);
delete testObj[97];
console.log(testObj.hasOwnProperty("100") ? "has got property of 100": "no property with 100");
for (var k in testObj) {
    delete testObj[k];
};
console.log(Object.keys(testObj).length===0 ? "empty":"note empty");

