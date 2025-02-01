// function happybirthday(name, age) { //params
//     console.log("Happy birthday to you");
//     console.log("Happy birthday to you");
//     console.log(`Happy birthday dear ${name}`);
//     console.log(`Happy birthday to you`);
//     console.log(`May all your dreams come true at ${age} years young and free` + '\n');
// }

// happybirthday("chaos", 21); //args
// happybirthday("vortex", 16);
// happybirthday("asfand", 12);

// function add(x,y){
//     let result = x+y;
//     return result;
// }
// console.log(add(5,7));

// function isEven(number){
//     if (number % 2 == 0) {
//         result = "even number"
//     }
//     else{
//         result = "odd number"
//     }
//     return result;
// }
// console.log(isEven(8) + '\n');

// function isValidEmail(email){
//     if(email.includes("@")){
//         result = "valid email"
//     }
//     else{
//         result = "invalid email"
//     }
//     return result;
// }
// console.log(isValidEmail("helloworld@brocode.com"));



// function expressions: a way of defining functions as values or variables!

// function hello(){
//     console.log("Hellow");}
// setTimeout(hello, 3000) // hello is callback function, 3000ms=3secs.

// const hello = function hello(){
//     console.log("Hellow");    
// }
// hello();

// setTimeout(function(){
//     console.log("Hellow");
// }, 3000) // example of function expression

// //instead of using callbacks like we did earlier in map function, we can straight up pass the function:

// const numbers = [1,2,3,4,5,6];
// const square = numbers.map(function(element){
//     return Math.pow(element,2);
// });
// const cube = numbers.map(function(element){
//     return Math.pow(element,3);
// });
// const even = numbers.filter(function(element){
//     return element % 2 == 0;
// });
// const odd = numbers.filter(function(element){
//     return element % 2 == 1;
// });
// const total = numbers.reduce(function(accumulator, element){
//     return accumulator + element;
// });

// console.log(...square);
// console.log("\n");
// console.log(...cube);
// console.log("\n");
// console.log(...even);
// console.log("\n");
// console.log(...odd);
// console.log("\n");
// console.log(total);



// arrow functions below. arrow funcs are a way of writing functions in a more concise way.

// const hello = (name) => {
//     console.log(`Hello ${name}`);
//     console.log("You are old");
// }
// hello("Bro");

// setTimeout(() => console.log("Hello")
// , 3000);

const numbers = [1,2,3,4,5,6];

const squares = numbers.map((element)=> Math.pow
(element,2));
const cube = numbers.map((element)=> Math.pow
(element,3));
const even = numbers.filter((element)=> element % 2 == 0);
const odd = numbers.filter((element)=> element % 2 == 1);
const total = numbers.reduce((accumulator, element)=> accumulator + element);


console.log(squares);
console.log(cube);
console.log(even);
console.log(odd);
console.log(total);


