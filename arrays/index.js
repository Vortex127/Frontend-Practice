let fruits = ["apple", "orange", "banana", "mango"];
// fruits.push("mango"); //adds the element to the end of the array
// fruits.pop(); //removes the last element from the array
// fruits.unshift("grapes") //adds the element to the beginning of the array
// fruits.shift() //removes the first element from the array
// let numOfFruits = fruits.length; //returns the number of elements in the array
// let index = fruits.indexOf("banana")
// console.log(index); //0
// console.log(numOfFruits); //4
// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

// for (let i = fruits.length-1; i >= 0; i--) {
//     console.log(fruits[i]);
// } //for reverse array printing

// for (let fruit of fruits){
//     console.log(fruit);
// }

// fruits.sort().reverse(); //.sort used to sort in alphabetical order and .reverse to reverse sort it
// console.log(fruits);


// .map() is used to create a new array by calling a function on each element in the array (uses callbacks)

// const numbers = [1, 2, 3, 4, 5];
// const squares = numbers.map(square);
// console.log(...squares);
// const cube = numbers.map(cubes);
// console.log(...cube);

// function square(element){
//     return Math.pow(element,2)
// }

// function cubes(element){
//     return Math.pow(element,3)
// }

const students = ["Asad", "Tahir", "Kaiser", "Hamza", "Usman"]
const upper = students.map(upperCase)
const lower = students.map(lowerCase)
const capital = students.map(capitalize)
console.log(...upper);
console.log(...lower);
console.log(...capital);

function upperCase(element){
    return element.toUpperCase();
}

function lowerCase(element){
    return element.toLowerCase();
}

function capitalize(element){
    return element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
}