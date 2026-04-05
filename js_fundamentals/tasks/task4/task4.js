// 1. Will alert be shown?

if ("0") {
  alert( 'Hello' );
}

// yes because string is non-empty.

/* xx */

// 2. Using the if..else construct, write the code which asks: ‘What is the “official” name of JavaScript?’ If the visitor enters “ECMAScript”, then output “Right!”, otherwise – output: “You don’t know? ECMAScript!”

// code:

let ques = prompt("What is the official name of JS? ");
if (ques == "ECMAScript") {
    alert("Right!");
}
else {
    alert("You don't know? ECMAScript!");
}

/* xx */

// 3. Rewrite this if using the conditional operator '?':

/* code: 

let result;
if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
} */

// answer:

let result = (a+b < 4)? "Below" : "Over";

/* xx */

// 4. Rewrite if..else using multiple ternary operators '?'. For readability, it’s recommended to split the code into multiple lines.

/* code: 

let message;

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
}

*/ 

// answer:

let message = (login == "Employee") ? "Hello" : 
              (login == "Director") ? "Greetings" : 
              (login == "") ? "No login" : "";
