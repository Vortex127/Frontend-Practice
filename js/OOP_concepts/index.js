// constructors are a special method for defining properties and methods of the objects.

// function Car (make, model, year, color){
//     this.make=make;
//     this.model=model;
//     this.year=year;
//     this.color=color;
//     this.drive= function () {
//         console.log(`I like to drive the ${this.model} specifically`); 
// }
// }

// const car1 = new Car("Honda", "Civic", 2022, "Black");
// const car2 = new Car("Honda", "Accord", 2021, "White");

//help explain?
// console.log(car1.make);
// console.log(car1.model);
// console.log(car1.year);
// console.log(car1.color);
// console.log(car2.make);
// console.log(car2.model);
// console.log(car2.year);
// console.log(car2.color);
// console.log({...car1});
// console.log({...car2});

// car1.drive();
// car2.drive();




// classes below:


// class Products {
//     constructor(name, price, quantity) {
//         this.name = name;
//         this.price = price;
//         this.quantity = quantity;
//     }

//     displayProducts(){
//         console.log(`Product name: ${this.name}, Product price: $${this.price}, Product quantity: ${this.quantity}`);
//     }

//     calculateTotal(salesTax){
//         return this.price + (this.price * salesTax);
//     }
// }

// const salesTax = 0.05;
// let total;

// const product1 = new Products("Laptop", 1000.56, 5);
// product1.displayProducts();
// total = product1.calculateTotal(salesTax);
// console.log(`Total price of product 1(with tax): $${total.toFixed(2)}`);

// console.log("\n");


// const product2 = new Products("Phone", 500.07, 10);
// product2.displayProducts();
// total = product2.calculateTotal(salesTax);
// console.log(`Total price of product 2: $${total.toFixed(2)}`);

// console.log("\n");


// const product3 = new Products("Tablet", 200.45, 3);
// product3.displayProducts();
// total = product3.calculateTotal(salesTax);
// console.log(`Total price of product 3 (with tax): $${total.toFixed(2)}`);



// static keyword is used to declare a method that is shared by all instances of the class. The static methods are owned by the class itself hence requiring no instances Examples below:


// class MathUtil{
//     static PI = 3.14159;
//     static getDiameter(radius){
//         return 2 * radius;
//     }
//     static getCircumference(radius){
//         return 2 * this.PI * radius;
//     }
//     static getArea(radius){
//         return this.PI * radius ** 2;
//     }
// }

// const meth = new MathUtil(); no need for this as static keyword is used.
// console.log(MathUtil.PI); 
// console.log(MathUtil.getDiameter(5.7896).toFixed(2));
// console.log(MathUtil.getCircumference(5.7896).toFixed(2));
// console.log(MathUtil.getArea(9.76).toFixed(2));


// class User {
//     static userCount = 0;
    
//     constructor(username){
//         this.username = username;
//         User.userCount++;
//     }

//     sayHello(){
//         console.log(`Hello, my username is ${this.username}`);
//     }

//     static getUserCount(){
//         console.log(`There are ${User.userCount} users online`);
        
//     }
// }
// const user1 = new User("Vortex");
// const user2 = new User("Asfand");
// const user3 = new User("Booster")

// user1.sayHello();
// user2.sayHello();
// user3.sayHello();
// User.getUserCount();



// concept of inheritance below:

// class Animal{
//     alive = true;

//     eat(){
//         console.log(`This ${this.name} is eating`);
//     }
//     sleep(){
//         console.log(`This ${this.name} is sleeping`);
//     }
// }

// class Rabbit extends Animal{
//     name = "Rabbit";

//     run(){
//         console.log(`This ${this.name} is running`);        
//     }
// }
// class Fish extends Animal{
//     name = "Fish";

//     swim(){
//         console.log(`This ${this.name} is swimming`);
//     }
// }
// class Hawk extends Animal{
//     name = "Hawk";

//     fly(){
//         console.log(`This ${this.name} is flying`);
//     }
// }

// const rabbit = new Rabbit();
// const fish = new Fish();
// const hawk = new Hawk();

// fish.eat();
// fish.sleep();
// fish.swim();
// console.log("\n");
// rabbit.eat();
// rabbit.sleep();
// rabbit.run();
// console.log("\n");
// hawk.eat();
// hawk.sleep();
// hawk.fly();


// super keyword is used to call the constructor or access the properties and methods of the parent class(superclass).

//the code below talks about how the super keyword can be used for code reusbality.

// class Animal{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }

//     move(speed){
//         console.log(`This ${this.name} moves at a speed of ${speed}mph`);
//     }
// }

// class Rabbit extends Animal{

//     constructor(name, age, runSpeed){
//         super(name, age);
//         this.runSpeed = runSpeed;
//     }

//     run(){
//         console.log(`This ${this.name} can run`);
//         super.move(this.runSpeed);
//     }
// }
// class Fish extends Animal{

//     constructor(name, age, swimSpeed){
//         super(name, age);
//         this.swimSpeed = swimSpeed;
//     }
  
//     swim(){
//         console.log(`This ${this.name} can swim`);
//         super.move(this.swimSpeed);
//     }
// }
// class Hawk extends Animal{
  
//     constructor(name, age, flySpeed){
//         super(name, age);
//         this.flySpeed = flySpeed;
//     }
  
//     fly(){
//         console.log(`This ${this.name} can fly`);
//         super.move(this.flySpeed);
//     }
// }

// const rabbit = new Rabbit("Rabbit", 2, 10);
// const fish = new Fish("Fish", 1, 5);
// const hawk = new Hawk("Hawk", 1, 7);

// console.log(rabbit.name);
// console.log(rabbit.age);
// console.log(rabbit.runSpeed);
// rabbit.run();
// console.log("\n");
// console.log(fish.name);
// console.log(fish.age);
// console.log(fish.swimSpeed);
// fish.swim();
// console.log("\n");
// console.log(hawk.name);
// console.log(hawk.age);
// console.log(hawk.flySpeed);
// hawk.fly();


// getters & setters are used to access and modify the properties of an object.

// class Rectangle {
//     constructor(width, height){
//         this.width = width;
//         this.height = height;
//     }

//     set width(newWidth){
//         if(newWidth > 0){
//             this._width = newWidth;
//         }
//         else{
//             console.error("Width must be greater than 0");
//         }
//     }

//     set height(newHeight){
//         if(newHeight > 0){
//             this._height = newHeight;
//         }
//         else{
//             console.error("Height must be greater than 0");
//         }
//     }

//     get width (){
//         return this._width;
//     }

//     get height(){
//         return this._height;
//     }

//     get area(){
//         return this._width * this._height;
//     }
// }

// const rectangle = new Rectangle(10, 5);

// rectangle.width = 20;
// rectangle.height = 10;

// console.log(rectangle.width);
// console.log(rectangle.height);
// console.log(rectangle.area);

class Person {
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    set firstName(newFirstName){
        if(typeof newFirstName === "string" && newFirstName.length > 0){
            this._firstName = newFirstName;
        }
        else{
            console.error("First name must be a non-empty string");
        }
    }

    set lastName(newLastName){
        if(typeof newLastName === "string" && newLastName.length > 0){
            this._lastName = newLastName;
        }
        else{
            console.error("Last name must be a non-empty string");
        }
    }

    set age(newAge){
        if (typeof newAge === "number" && newAge > 0){
            this._age = newAge;
        }
        else{
            console.error("Age must be a positive number");
        }
    }

    get firstName(){
        return this._firstName;
    }

    get lastName(){
        return this._lastName;
    }

    get fullName(){
        return this._firstName + " " + this._lastName;
    }

    get age(){
        return this._age;
    }

}

const person = new Person("John", "Doe", 30);

console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
