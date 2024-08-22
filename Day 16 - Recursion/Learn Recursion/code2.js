// Q: Sum of first N numbers. 
// There are two ways to solve this kind of question 
//  1. Parameterize way 
//  2. Functional way

// Solve it using parameterize way 
const sumAll = (i, sum) => {
    if(i < 1) {
        console.log(sum);
        return;
    }

    sumAll(i - 1, sum + i);
}

// sumAll(5, 0);

// Solve it using functional way 
function sumAll2(n) {
    if(n === 0) {
        return 0;
    }

    return n + sumAll2(n - 1);
}

// console.log(sumAll2(5));

// Q: Factorial of N 
function fact(n) {
    if(n === 1) {
        return 1;
    }

    return n * fact(n - 1);
}

console.log(fact(5));