"use strict";

// -  Create a function called `printParams`
//    which logs to the console the input parameters
//    (can have multiple number of arguments)

function printParams(...a:any[]) {
    console.log(...a);
    
}

printParams(2,3,true,"hehe");