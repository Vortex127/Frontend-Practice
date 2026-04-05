// 1. What are results of these expressions?

console.log("" + 1 + 0); //10
console.log("" - 1 + 0); //1
console.log(true + false); //1 
console.log(6 / "3"); // 2
console.log("2" * "3"); // 6
console.log(4 + 5 + "px"); //9px
console.log("$" + 4 + 5); //$45
console.log("4" - 2); // 2
console.log("4px" - 2); // NaN
console.log("  -9  " + 5); // -9 5
console.log("  -9  " - 5); // -14
console.log(null + 1); // 1
console.log(undefined + 1); // NaN
console.log(" \t \n" - 2); // 2

/* learnings
1. null becomes 0 after numeric conversion
2. undefined becomes NaN after the numeric conversion
*/

//2. Here’s a code that asks the user for two numbers and shows their sum, fix it so it shows 3 instead of 12.

// let a = prompt("First number?", 1);
// let b = prompt("Second number?", 2);

// alert(a + b); // 12

// fix:

let a1 = Number(prompt("First number?", 1));
let b1 = Number(prompt("Second number?", 2));

alert(a1 + b1);
