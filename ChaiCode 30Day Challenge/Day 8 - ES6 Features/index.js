// Day 8 - ES6+ Features
// Activity 1: Template Literals
// Task 1
console.log('==== Task 1: Template Literals =====');
const name = 'Tahir Uddin Ahmed';
const age = 21;

const str = `Hello, ${name} your age is ${age}`;
console.log(str);
// Task 2
console.log('==== Task 2: Multi-line Template Literals =====');
const multilineStr = `
Hello, my name is ${name}. 
I took the JavaScript 30 Days Challenge, and it's Day 8. 
I am very happy and feel lucky to have found such a great resource for my JavaScript journey.
`


console.log(multilineStr);

// Activity 2: Desctructuring 
// Task 3
console.log('==== Task 3: Extract array Elements Desctructuring =====');
const arr = [1, 2, 3, 4, 5];
const [a, b] = arr;

console.log(`a: ${a}`);
console.log(`b: ${b}`);

// Task 4
console.log('==== Task 4: Extract Object Desctructuring =====');
const Book = {
    title: 'How to learn anything faster',
    author: 'Peter Parker',
    year: 2015
};

// extract the title and author using desctructuring 
const {title, author} = Book;

console.log(`Book title: ${title}`);
console.log(`author: ${author}`);

// Activity 3: Spread and Rest Operators 
// Task 5: Spread operator 
console.log('==== Task 5: Spread Operator =====');
const numbers = [4, 6, 9, 11, 15, 17];

const newArr = [...numbers, 99, 143, 179];

console.log(newArr);

// Task 6: 
console.log('==== Task 5: Rest Operator =====');
function sum(...nums) {
    let total = 0; 

    for(let number of nums) {
        total += number;
    }

    return total;
}

console.log(sum(1, 2, 3, 4));
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// Activity 4: Default parameters 
console.log('==== Task 6: Default Parameters =====');
function product(a, b = 1) {
    return a * b;
}

console.log(product(7));

// Activity 5: Enhanced object Literals 
// Task 
console.log('==== Task 5: Enhanced Object Literals =====');
const fullName = 'Ayesha Siddika';
const Age = 13;
const isLoggedIn = false;

const User = {
    fullName,
    Age,
    isLoggedIn,
    userDetails() {
        console.log(`Username: ${this.fullName}\nAge: ${this.Age}\nLogin: ${this.isLoggedIn}`);
    }
};

console.log(User);
User.userDetails();