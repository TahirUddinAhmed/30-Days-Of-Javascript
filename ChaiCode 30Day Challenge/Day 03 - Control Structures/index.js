// Acitvity 1: if-else statement 
console.log("Activity 1 - ");
let n = 0;
let res;

if(n > 0) {
    res = "Positive";
} else if(n < 0) {
    res = "Negative";
} else {
    res = "Zero"
}
console.log(res);

let age = 21;

if(age >= 18) {
 console.log("Congrats, you are eligible");
} else {
    console.log("Sorry, your are not eligible");
}

// Activity 2: Nested if-else statements
console.log("Activity 2");
let a = 3, b = 9, c = 4;
let big;

// a = 5, b = 3, c = 6
if(a > b) {
 if(a > c) {
    big = a;
 } else {
    big = c;
 }
} else {
  if(b > c) {
    big = b;
  } else {
    big = c;
  }
}

console.log(`largest of three numbers ${a}, ${b} and ${c} is ${big}`);

// Activity 3: Switch Case 
console.log("Activity 3: Switch Case");
let day = 3;
let result;
switch(day) {
    case 1: 
        result = "Sunday";
        break;
    case 2: 
        result = "Monday";
        break;
    case 3: 
        result = "Tuesday";
        break;
    case 4: 
        result = "Wednessday";
        break;
    case 5: 
        result = "Thrusday";
        break;
    case 6: 
        result = "Friday";
        break;
    case 7: 
        result = "Saturday";
        break;
    default: 
        result = "Invalid";
}

console.log(result);

let marks = 88;
let grade;

switch (true) {
    case (marks >= 90):
        grade = 'A';
        break;
    case (marks >= 80):
        grade = 'B';
        break;
    case (marks >= 70):
        grade = 'C';
        break;
    case (marks >= 60):
        grade = 'D';
        break;
    default:
        grade = 'F';
        break;
}

console.log(grade);

// Activity 4: Conditional (Ternary) Operator
console.log("Acitivity 4 -");
let num = 11;
let result1 = (num % 2 == 0) ? "Even" : "Odd";
console.log(`${num} is a ${result1} Number`);

// Activity 5: Combining Conditions
let year = 2024;
let isLeapYear;
if(year % 4 == 0 || year % 100 == 0 || year % 400 == 0) {
    isLeapYear = `${year} is a leap year`;
} else {
    isLeapYear = `${year} is not a leap year`;
}

console.log(isLeapYear);