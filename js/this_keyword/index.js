// "this" keyword can be confusing but all it does is reference the object that is currently executing the code. person.name =  this.name. It only refers to where it's immediately being used.

//this keyword doesn't work with arrow functions because they don't have their own context and is bound to the window panel or environment of node

const person1 = {
    name: "Asfand",
    favFood: "Dreams",
    sayHello: () => console.log("Hey wassup, the name's Asfand"),
    isEating: function(){
        console.log(`${this.name} is eating ${this.favFood}`)
    }
}

person1.sayHello();
person1.isEating();
