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

function add(x,y){
    let result = x+y;
    return result;
}
console.log(add(5,7));

function isEven(number){
    if (number % 2 == 0) {
        result = "even number"
    }
    else{
        result = "odd number"
    }
    return result;
}
console.log(isEven(8) + '\n');

function isValidEmail(email){
    if(email.includes("@")){
        result = "valid email"
    }
    else{
        result = "invalid email"
    }
    return result;
}
console.log(isValidEmail("helloworld@brocode.com"));
