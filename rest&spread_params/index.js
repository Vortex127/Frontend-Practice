// The spread operator can be used anywhere to unpack or delist a collection or array.

// The rest parameter is used to collect all the remaining elements into an array.

// example 1:

// function openFridge(...fruits){ //rest parameter here allows me to group together multiple arguments into the function
//     console.log(...fruits); //spread operator here allows me to unpack the array into individual elements
// }

// function getFruits(...fruits){ //rest parameter here allows me to group together multiple arguments into the function
//     console.log(fruits);
// }

// const fruit1 = "apple";
// const fruit2 = "banana";
// const fruit3 = "orange";
// const fruit4 = "grape";
// const fruit5 = "watermelon";

// const fruits = getFruits(fruit1, fruit2, fruit3, fruit4, fruit5); //since we assign getFruits first hence it's executed earlier!
// openFridge(fruit1, fruit2, fruit3, fruit4, fruit5);


// example 2:

function sum (...numbers){
    let result = 0;
    for (let number of numbers){
        result += number;
    }
    return result;
}

function getAverage (...numbers){
    let result = 0;
    for (let number of numbers){
        result += number;
    }
    return result / numbers.length;
}

let total = sum (1,2,3,4,5);
console.log(`Your total is $${total}`); 

total = getAverage(100,72,83,54,59);
console.log(total); 


