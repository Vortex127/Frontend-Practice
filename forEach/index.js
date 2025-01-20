// the syntax of forEach looks something like: arr.forEach(callback) where arr is the array that you want to iterate over and callback is the function that you want to run on each element of the array.

// let numbers = [1,2,3,4,5];

// console.log(...numbers, "\n");
// numbers.forEach(double);
// numbers.forEach(display);
// console.log("\n"); 
// numbers.forEach(square);
// numbers.forEach(display); 
// console.log("\n");
// numbers.forEach(cube);
// numbers.forEach(display);

// function double(element, index, array) { //used as a callback function
//     array[index] = element * 2;
// }

// function square(element, index, array) { //used as a callback function
//     array[index] = element * element;
// }

// function cube(element, index, array) { //used as a callback function
//     array[index] = Math.pow(element, 3);
// }

// function display(element) { //used as a callback function
//     console.log(element);
// }

let fruits = ["apple", "orange", "mango", "banana", "grapes"];

fruits.forEach(upperCase);
fruits.forEach(display);
console.log("\n");
fruits.forEach(lowerCase);
fruits.forEach(display);
console.log("\n");
fruits.forEach(capitalize);
fruits.forEach(display);

function upperCase(element, index, array) { //used as a callback function    
    array[index] = element.toUpperCase();
}

function lowerCase(element, index, array) { //used as a callback function    
    array[index] = element.toLowerCase();
}

function capitalize(element, index, array) { //used as a callback function    
    array[index] = element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
}

function display(element) { //used as a callback function
    console.log(element);
}