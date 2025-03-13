// let fruits = ["apple", "orange", "banana", "mango"];
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

// const students = ["Asad", "Tahir", "Kaiser", "Hamza", "Usman"]
// const upper = students.map(upperCase)
// const lower = students.map(lowerCase)
// const capital = students.map(capitalize)
// console.log(...upper);
// console.log(...lower);
// console.log(...capital);

// function upperCase(element){
//     return element.toUpperCase();
// }

// function lowerCase(element){
//     return element.toLowerCase();
// }

// function capitalize(element){
//     return element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
// }


// .filter() creates a new array with elements that pass the test in a function (uses callbacks)


// let numbers = [1, 2, 3, 4, 5];
// let even = numbers.filter(isEven);
// console.log(...even);
// let odd = numbers.filter(isOdd);
// console.log(...odd);

// function isEven(element) {
//     return element%2 === 0;
// }

// function isOdd(element){
//     return element%2 !== 0;
// }

// const ages = [20, 30, 40, 50, 60, 70, 80, 90, 100];
// const kid = ages.filter(isChild);
// const adult = ages.filter(isAdult);

// console.log(...kid);
// console.log(...adult);

// function isAdult(element){
//     return element >= 18;
// }

// function isChild(element){
//     return element < 18;
// }


// .reduce() reduces an array to a single value

//example 1:


// const prices = [10, 20, 30, 40, 50];
// const total = prices.reduce(getTotal);
// console.log(`The total is $${total.toFixed(2)}`); //toFixed(2) will round the number to 2 decimal places allowing us to see cents as well in the total amount.
// function getTotal(total, element){
//     return total + element;
// }

// function getTotal(previous, next){ //prev = 0 & next = 10;
//     return previous + next;
// }
//then prev = 10 & next = 20;
//then prev = 30 & next = 30;
//then prev = 60 & next = 40;
//then prev = 100 & next = 50;
//then prev = 150 & next = 0;//because there is no next element in the array so it returns 150 as the total.


//example 2:

// const grades =[75, 50, 90, 80, 65, 95]
// const maximum = grades.reduce(getMax);
// const minimum = grades.reduce(getMin);
// console.log(maximum);
// console.log(minimum);

// function getMax(max, element){
//     return Math.max(max, element);
// }

// function getMin(min, element){
//     return Math.min(min, element);
// }



// arrays of objects below:


const fruits = [{name: "apple", color: "red", calories: 95},
                {name: "bananan", color: "yellow", calories: 105},
                {name: "guava", color: "green", calories: 76},
                {name: "mango", color: "yellow", calories: 202},
                {name: "orange", color: "orange", calories: 62},];

// console.log(fruits[0].color);
// console.log(fruits[1].color);
// console.log(fruits[2].color);
// console.log(fruits[3].color);
// console.log(fruits[4].color);

// fruits.forEach(fruit => console.log(fruit.color));
// const fruitNames = fruits.map(fruit => fruit.name);
// const fruitCals = fruits.map(fruit => fruit.calories);
// const yellowFruits = fruits.filter(fruit => fruit.color === "yellow");
// console.log(...fruitNames);
// console.log(...fruitCals);
// console.log(...yellowFruits);

// const maxFruit = fruits.reduce((max, fruit) => fruit.calories > max.calories ? fruit : max); //max is accumulator and fruit is the current element
// const minFruit = fruits.reduce((min, fruit) => fruit.calories < min.calories ? fruit: min )
// console.log(maxFruit);
// console.log(minFruit);



//learning how to shuffle arrays below using Fisher-Yates algorithm:

const cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

function shuffle(array){
    for (let i = array.length-1; i>0; i--){
        const random = Math.floor(Math.random()*(i+1));
        [array[i], array[random]] = [array[random], array[i]];
    }
} 




