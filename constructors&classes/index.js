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

// // const meth = new MathUtil(); no need for this as static keyword is used.
// console.log(MathUtil.PI); 
// console.log(MathUtil.getDiameter(5.7896).toFixed(2));
// console.log(MathUtil.getCircumference(5.7896).toFixed(2));
// console.log(MathUtil.getArea(9.76).toFixed(2));


class User {
    static userCount = 0;
    
    constructor(username){
        this.username = username;
        User.userCount++;
    }

    sayHello(){
        console.log(`Hello, my username is ${this.username}`);
    }

    static getUserCount(){
        console.log(`There are ${User.userCount} users online`);
        
    }
}
const user1 = new User("Vortex");
const user2 = new User("Asfand");
const user3 = new User("Booster")

user1.sayHello();
user2.sayHello();
user3.sayHello();
User.getUserCount();







