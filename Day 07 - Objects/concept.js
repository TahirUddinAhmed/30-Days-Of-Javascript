// Learn Objects in js 
// Object Literals 
const sym = Symbol("User Profile");

const User = {
    name: "Tahir Uddin Ahmed",
    [sym]: Symbol("User Profile"),
    email: "01tahirahmed@gmail.com",
    age: 21,
    isLoggedIn: false
}

// console.log(User.name);
// console.log(typeof User[sym]);
// console.log(User[sym]);

// update values 
User.email = "tahiruddinahmed@google.com";
// Object.freeze(User); 
// User.email = "tahiruddinahmed@campuscourse.com";
// console.log(User);

// function 
User.greeting = function() {
    console.log(`Hello, ${this.name}`);
}

// User.greeting();

// combine two objects 
const obj1 = {a: 1, b: 2}
const obj2 = {c: 3, d: 4}
const obj3 = {e: 5, f: 6}

// here 
// {} = target
// source = obj1, obj2, obj3
const newObj = Object.assign({}, obj1, obj2, obj3);


// console.log(newObj);
// console.log(obj1);

// another example 
// here 
// target = obj1
// source = obj2 

const newObj2 = Object.assign(obj1, obj2);

// console.log(newObj2);
// console.log(obj1);
// console.log(newObj2 === obj1); // return true


// another way to combine two or more object is to use the spread operator 
const combineObj = {...obj1, ...obj2, ...obj3};
// console.log(combineObj);


// creating object with constructor
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.start = function() {
        console.log(`The ${this.make} ${this.model} is starting.`);
    }
 }

 const MyCar = new Car('Honda', 'Civic', 2020);
 const HerCar = new Car('Toyota', "Corolla", 2021);
 MyCar.start();
 HerCar.start();




