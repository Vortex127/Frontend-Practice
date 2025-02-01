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


class Products {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    displayProducts(){
        console.log(`Product name: ${this.name}, Product price: $${this.price}, Product quantity: ${this.quantity}`);
    }

    calculateTotal(salesTax){
        return this.price + (this.price * salesTax);
    }
}

const salesTax = 0.05;
let total;

const product1 = new Products("Laptop", 1000.56, 5);
product1.displayProducts();
total = product1.calculateTotal(salesTax);
console.log(`Total price of product 1(with tax): $${total.toFixed(2)}`);

console.log("\n");


const product2 = new Products("Phone", 500.07, 10);
product2.displayProducts();
total = product2.calculateTotal(salesTax);
console.log(`Total price of product 2: $${total.toFixed(2)}`);

console.log("\n");


const product3 = new Products("Tablet", 200.45, 3);
product3.displayProducts();
total = product3.calculateTotal(salesTax);
console.log(`Total price of product 3 (with tax): $${total.toFixed(2)}`);




