// closure is a function defined inside of other functions, the inner function has access to the variables and scope of the outer function, allowing for private variables and state management.

// in the example below, the inner function has access to the message variable defined in the outer function. This is useful for creating private variables.
function outer(){
    let message = "Hello--outer";
    function inner (){
        console.log(message);        
    }
    inner();
}
message = "Goodbye"; //inner cannot access this as it's out of scope of the outer function
outer();


function createCounter(){
    let count = 0;
    function increment (){
        count ++;
        console.log(`Count increased to ${count}`);
    }

    function getCount(){
        return count;
    }

    return {increment, getCount};
}

const counter = createCounter();
counter.increment();
counter.increment();
counter.increment();

console.log(`The current count is ${counter.getCount()}`);





// increment();
// increment(); count will always be 1 as it's redefined each time the function is called