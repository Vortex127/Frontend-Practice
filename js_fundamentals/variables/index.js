
// variables below!!

let x = 100;
console.log(x);
console.log(typeof x);
console.log(`You are ${x} years old`);
console.log(`Your price is $${x}`);

let firstName = "Mirza"
let favoriteFood = "Pizza"
let email = "hello123@gmail.com"

let online = false;
let forSale = true;
let isStudent = true;

console.log(`Bro's online: $(online)`);
console.log(`Bro's for sale: $(forSale)`);
console.log("Enrolled: $(isStudent)");

let Name = "Asfand"
let Age = 20;
let Country = "Pakistan";

// type conversions!!

let age = prompt("How old are you? ");
age = Number(age); // now it works normally
age+=1; //appends 1 to the input instead of adding 1 to the number
console.log(age, typeof age);

let x1 = "pizza"; //we replace pizza with 0 and empty strings.
let y = "pizza";
let z = "pizza";

x1 = Number(x1);
y = String(y);
z = Boolean(z);

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);

