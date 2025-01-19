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

fruits.sort().reverse(); //.sort used to sort in alphabetical order and .reverse to reverse sort it
console.log(fruits);

