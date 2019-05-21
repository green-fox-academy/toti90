'use strict';

// Write a program that prints the following fruits:
// apple -> immediately
// pear -> after 1 seconds
// melon -> after 3 seconds
// grapes -> after 5 seconds

function writeWord(array, time) {
  for (let i=0; i<array.length; i++) {
    setTimeout(function(){
      console.log(array[i]);
    }, time[i]);

  }
}

writeWord(['apple', 'pear', 'melon', 'grapes'],[0,1000,3000,5000]);