// Day 5: Functions 

// Activity 1: Function Declaration 
console.log("Activity 1 - ");
function isEven(number) {
    if(number % 2 == 0) {
        console.log(`${number} is an even number`);
    } else {
        console.log(`${number} is a odd number`);
    }
}

isEven(4);
isEven(7);

function square(number) {
    let result = number * number;
    console.log(`Square of ${number} is ${result}`);
}
square(3);
square(97);

// Activity 2 - Function Expression 
console.log("Activity 2: Function Expression - ");
const MaxOfTwo = function(n1, n2) {
    if(n1 > n2) {
        return n1;
    } else {
        return n2;
    }
}
let n1 = 14, n2 = 7;
console.log(`Maximum of ${n1} and ${n2} is ${MaxOfTwo(n1, n2)}`);

// there is a simple way to solve this problem - (Using the concate() js built-in function)
const TwoString = function(str1, str2) {
    let result = '';

    // add all the characters of str1 to result 
    for(let i = 0; i < str1.length; i++) {
        result += str1[i];
    }

    // add all the characters of str2 to result 
    for(let i = 0; i < str2.length; i++) {
        result += str2[i];
    }

    return result;
}

let str1 = "Hello, ";
let str2 = "I am Tahir Uddin Ahmed";
let concatenate = TwoString(str1, str2);
console.log(concatenate);

// Activity 3: Arrow Functions 
console.log("Activity 3: Arrow Functions - ");

const SumOfTwo = (a, b) => (a+b);

console.log(SumOfTwo(5, 6));

const findChar = (str, target) => {
    for(let i = 0; i < str.length; i++) {
        if(str[i] === target) {
            return true;
        }
    }

    return false;
}

let string = "30 Days Javascript Challenege";
let target = 'J';
console.log(findChar(string, target));

// Activty 4: Function parameters and default values
console.log("Activity 4 - ");
function add(a, b = 4) {
    return a + b;
}
console.log(add(3, 44));
console.log(add(5));

const greetings = (name, age = 18) => {
 console.log(`Have a nice day ${name}.\nYour age is ${age}`);
}

greetings("Tahir Uddin Ahmed", 21);
greetings("Peter Parker");

// Activity 5: higher-order functions 
// callback function 
function callback() {
    console.log("hello");
}

//higher order function 
const printFn = (fun, count) => {
   for(let i = 0; i < count; i++) {
    fun();
   }
}

console.log(printFn(callback, 5));

function firstFn(n) {
    return (n * n);
}

function secondFn(n) {
    return n + 10;
}

function higherOrder(first, second, value) {
    const firstResult = first(value);
    const secondResult = second(firstResult);

    return secondResult;

}

console.log(higherOrder(firstFn, secondFn, 5));
