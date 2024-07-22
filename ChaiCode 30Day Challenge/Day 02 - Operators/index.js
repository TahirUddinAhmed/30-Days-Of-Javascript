// Activites: Arithmmetic Operators
let a = 7;
let b = 5;

let add = a + b; // addition 
let sub = a - b;
let mul = a * b;
let divison = a / b;
let mod = a % b;

// Activity 2: Assignment Operators 
let c = 4;
c += a;
let d = 3;
d -= a;

// Activity 3: Comparison Operators
let n1 = 5, n2 = 5;
let n3 = 7, n4 = '7';

let isGreater = a > b;
let isLesser = a < b;
let result1 = n1 >= n2;
let result2 = n1 <= n2;
let result3 = n3 == n4;
let result4 = n3 === n4;

// Activity 4: Logical Operators 
let marks = 30;
let age = 17;
let gender = 'male';
let isTrue = true;

let pass = marks >= 30 && marks <= 100;
let eligibleForLicense = age >= 18 || gender == 'male';

// Activity 5: Ternary operator 
let number = -2;
let isPositive = (number > 0) ? console.log('positive') : console.log('negative');



// console results 
console.log("Activity 1: Output - ");
console.log(add);
console.log(sub);
console.log(mul);
console.log(divison);
console.log(mod);
console.log(c);
console.log("Activity 2: Output - ");
console.log(c);
console.log(d);
console.log("Activity 3: Output - ");
console.log(isGreater);
console.log(isLesser);
console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log("Activity 4: Output - ");
console.log(pass);
console.log(eligibleForLicense);
console.log(!isTrue);
