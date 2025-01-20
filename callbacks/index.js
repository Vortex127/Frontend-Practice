// callback functions are functions that are passed as arguments to other functions and for handling asychronous operations.

//example 1:

// hello(wait);
// leave(goodbye);
// function hello(callbackex){ //parameter used here acts as a function that is passed as an argument to another function hence working as a callback function.
//     console.log('Hello');
//     callbackex();
// }

// function wait(){
//     console.log('please wait');
// }

// function leave(callbackex2){ //parameter used here acts as a function that is passed as an argument to another function hence working as a callback function.
//     console.log('you may now leave');
//     callbackex2();
// }

// function goodbye(){
//     console.log('Goodbye' + '\n');
// }

//example 2:

sum(displayPage, 5, 5); //sum has option to utlilize either displayConsole or displayPage function as a callback function.

function sum(callback, a, b){ //callback function is passed as an argument to the sum function.
    let result = a + b;
    callback(result);
}

function displayConsole(result){ //parameter used here acts as a function that is passed as an argument to another function hence working as a callback function.
    console.log(result);
}

function displayPage(result){ //parameter used here acts as a function that is passed as an argument to another function hence working as a callback function.
    document.getElementById("myh1").textContent = result;
}