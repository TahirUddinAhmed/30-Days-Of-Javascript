// Multiple Recursion Call 
// Q: Print Fibonacci number of n 
function Fibonacci(n) {
    if(n <= 1) {
        return n;
    }

    return Fibonacci(n - 1) + Fibonacci(n - 2);
}

function printFibonacci(n) {
    console.log(`First ${n} Fibonacci numbers are -`);
    for(let i = 0; i < n; i++) {
        console.log(Fibonacci(i));
    }
}

console.log(printFibonacci(7));