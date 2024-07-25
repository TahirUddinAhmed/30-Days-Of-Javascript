// Task 3: Create a module that exports multiple functions
// using named exports. 

const sum = (a, b) => {
    return a + b;
}

const sub = (a, b) => {
    return a - b;
}

const mul = (a, b) => {
    return a * b;
}

const div = (a, b) => {
    return a / b;
}

// Named exports 
export { sum, sub, mul, div};