// Activity 1
var number = 13;
let str = "Hello everyone, I am taking the 30 Days of javascript Challenge";
// Activity 2
const isMotivated = true;
// Activity 3
let age = 21; // integer 
let name = "Tahir Uddin Ahmed"; // string
let bloodGroup = 'B';
let isMarried = false;
let programmingLanguages = ["C", "C++", "Java", "PHP", "Javascript"];
class Car {
    name;
    model;
    price;

    constructor(name, model, price) {
        this.name = name;
        this.model = model;
        this.price = price;
    }

    details() {
        console.log(`Car name ${this.name}. Car Model ${this.model}. Car price ${this.price}`);
    }
}

// Activity 4
let n = 5;
n = 6;

// Activity 5
const pi = 3.14;
pi = 3.15;



// create an instance of the Car Class
const myCar = new Car();
myCar.name = "BMW";
myCar.model = "BMW-12";
myCar.price = '12M';
myCar.details();

// log the out 
console.log(number);
console.log(str);
console.log(isMotivated);
console.log(n);
console.log(pi);