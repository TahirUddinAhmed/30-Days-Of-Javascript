// Day 16 
// Task1
function fact(n) {
    if(n == 1) return 1;

    return n * fact(n - 1);
}
console.log("==== Task 1 =====");
console.log("Factorial using recursion");
console.log(fact(5));
console.log(fact(4));

// Fibonacci Series 
// 0, 1, 1, 2, 3, 5, 8, 13

// let first = 0, second = 1;

// let n = 7;
// console.log(`First ${n} Fibonacci Numbers`);
// console.log(first);
// console.log(second);
// for(let i = 0; i < n - 2; i++) {
//     let value = first + second;
//     first = second;
//     second = value;

//     console.log(value);

// }


function Fib(n) {
    if(n < 1) {
        return 1;
    }

    
}

console.log(Fib(7));
