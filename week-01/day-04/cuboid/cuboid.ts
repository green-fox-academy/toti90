export {};
'use strict';

// Write a program that stores 3 sides of a cuboid as variables (floats)
// The program should write the surface area and volume of the cuboid like:
//
// Surface Area: 600
// Volume: 1000

let length: number = 10;
let depth: number = 10;
let height: number = 10;

let face1: number = length*depth;
let face2:number = length*height;
let face3: number = depth*height;
console.log("Surface Area: " + (2*face1 + 2*face2 + 2*face3) + " cm2");
console.log("Volume: " + (length*depth*height) + " cm3");