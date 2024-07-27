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