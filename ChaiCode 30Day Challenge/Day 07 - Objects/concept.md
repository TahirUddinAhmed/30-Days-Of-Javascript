# Objects in Js

## Defination
In Javascript, an object is a standalone entity, with properties and type. It's similar to real-life object like car, a pen, a book, which have properties(attributes) and behaviorss (methods).

## Importance and Usage in JS
Objects are one of the fundamental builiding block in javascript. They are used to store collections of data and more complex entities. Almost everything in Javascript is an object, including array, functions, and even other objects. Understanding objects is crucial because they allow you to group related data and functions, making your code more modular and easier to manaege. 

## Creating Objects 
In Javascript, there are several ways to create objects, each with its own use cases and advantages - 
 1. Object Literals: This is the simplest and most commonly used way to create objects in Javascript. 

 ```js
    const Person = {
        name: 'Tahir uddin Ahmed',
        age: 21,
        greet: function() {
            console.log('Hello' + this.name);
        }
    };
 ```

 2. Using the `new Object()` Syntax: This method creates a object using built-in `object` constructor. while less commonly used than object literals, It can be useful in certain situations. 

 ```js
    const Car = new Object();
    Car.make = 'Toyota';
    Car.model = 'Corolla';
    Car.year = 2021;
    Car.start = function() {
        console.log("Car started");
    }
 ```

 3. Creating Objects With Constructors
 Constructor functions are a powerful way to create objects that share the same properties and methods. The `this` keyword inside a constructor function ferer to the new object being created.

 ```js
 function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.start = function() {
        console.log(`The ${this.make} ${this.model} is starting.`);
    }
 }

 const MyCar = new Car('Honda', 'Civic', 2020);
 myCar.start();

 ```

## Object Properties 
1. Adding / Accessing Properties: You can add or access properties using dot notation or bracket notation. 

example: 
```js
const Person = {};

// adding properties 
Person.name = "Tahir Udiin Ahmed";
Person.age = 21;
Person.["email id"] = "01tahirahmed@gmail.com";

// Accessing Properties 
console.log(Person.name);
console.log(Person['age']);
console.log(Person['email id']);

```

2. <b>Updating Properties</b>: You can update the value of property using the same notation for adding properties. 

```js
// Update property 
Person.age = 22;
```

3. <b>Deleting Properties</b>: You can delete a property from an object using the `delete` operator. 

```js
delete Person["email id"];
console.log(Person["email id"]); // output: undefined
```