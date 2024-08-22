// Activity 1:
//  Task 1
function outerFn() {
    let myVar = 'Tahir';
    function innerFn() {
        console.log(myVar);
    }

    return innerFn;
}

const clousre1 = outerFn();
clousre1();

// Task 2: 
function counter() {
    let value = 0; 

    function increment() {
        value += 1;
        console.log(value);
    }

    return increment;
}

const counter1 = counter();

counter1();
counter1();
counter1();

// Task 3
function generateUniqueId() {
   let n = Math.floor(Math.random() * 100);

    function generate() {
        n += 1;
        return 'User_' + n;
    }

    return generate;

}
const uniqueId1 = generateUniqueId();

const id1 = uniqueId1();
const id2 = uniqueId1();
const id3 = uniqueId1();
  
console.log(id1);  
console.log(id2); 
console.log(id3); 
  

// Task 4

function HelloUser(username = '') {

    function greet() {
        console.log(`Hello ${username}, How are you?`);
    }

    return greet;
}

const user = HelloUser('Tahir');


console.log(user());

// Task 5
const functionArray = [];

for (let i = 0; i < 10; i++) {
  functionArray.push((function(index) {
    return function() {
      return index;
    };
  })(i));
}

console.log(functionArray[0]());  
console.log(functionArray[1]());  
console.log(functionArray[2]());  

// Task 4
import { itemManager } from "./module/Task6.js";

const item = itemManager();

item.addItem('Apple');
item.addItem('Mango');
item.addItem('Banana');
item.removeItem();
item.listItems();

// Task 7
const add = (n) => {
    return n + 5;
}

const memoizeAdd = (fn) => {
    let cache = {};

    return function(n) {
        if(n in cache) {
            console.log('From Cache -');
            return cache[n];
        } else {
            console.log('Calculating');
            let result = fn(n);
            cache[n] = result;

            return result;
        }
    }
}

const add1 = memoizeAdd(add);

console.log(add1(3));
console.log(add1(3));


// Task 8
const fact = (n) => {
    let result = 1;
    for(let i = 1; i <= n; i++) {
        result *= i;
    }

    return result;
}

const memoizeFact = (fn) => {
    let cache = {};

    return function(number) {
        if(number in cache) {
            console.log('Returning result from cache');
            return cache[number];
        } else {
            console.log('Calculating- ');
            let result = fn(number);
            cache[number] = result;

            return result;
        }
    }
}

const fact1 = memoizeFact(fact);

console.log(fact1(4));
console.log(fact1(5));
console.log(fact1(5));

