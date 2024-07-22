// Day 4: Loops 
// Activity 1: for loop 
console.log("Activity 1");
let table = 5;

// task 1: print 1 to 10
console.log("Task 1: Print numbers from 1 to 10 -");
for(let i = 1; i <= 10; i++) {
    console.log(i);
}

// Task 2: print multiplication table of 5
console.log("Print multiplication table of 5 - ");
for(let i = 1; i <= 10; i++) {
    console.log(`${table} X ${i} = ${table * i}`);
}

// Activity 2: While Loop 
console.log("Activity 2: While loop ");
// Task 1: Print the sum of 1 to 10 using while loop 
let sum = 0;
let i = 1;
while(i <= 10) {
    sum += i; 
    i++;
}
console.log(`Task 3: \nSum of 1 to 10 is ${sum}`);

// Task 4: Print numbers from 10 to 1
console.log("Task 4: Print numbers from 10 to 1 using while loop - ");
i = 10;
while(i > 0) {
    console.log(i);
    i--;
}

// Activity 3: do..while loop 
console.log("Activity 3: do..while loop");
console.log("Task 5: print numbers from 1 to 5 using do..while loop - ");
i = 1;
do {
    console.log(i);
    i++;
}while(i <= 5);

let number = 5, fact = 1;
i = 1;

do {
    fact *= i;
    i++;
}while(i <= number);

console.log(`Task 6: \nFactorial of ${number} is ${fact}`);

// Activity 4: Nested loops 
 
console.log("Activity 4: Nested loops - ");
console.log('Task 7: Print a pattern - ');
for(let i = 1; i <= 5; i++) {
    let stars = '';
    // inner loop
    for(let j = 1; j <= i; j++) {
        stars += '* ';
    }
    console.log(stars); 
}

// Activity 5: Loop Control Statements
console.log("Activity 5: loop control statements");
console.log("Task 8: Print 1 to 10, but skip number 5 - ");
for(let i = 1; i <= 10; i++) {
    if(i == 5) {
        continue;
    }
    console.log(i);
}
console.log("Task 9: print numbers from 1 to 10, but stop the loop when the number is 7 - ");
for(let i = 1; i <= 10; i++) {
    if(i == 7) 
        break;

    console.log(i);
}


