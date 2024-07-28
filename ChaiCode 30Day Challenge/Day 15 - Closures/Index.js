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

// Task 5
function memorization() {
    
}

