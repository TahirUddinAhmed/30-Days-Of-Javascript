let counter = 0; 

function fn(counter) {

    // base conditio 
    if(counter == 4) {
        console.log("Stop");
        return;
    }

    console.log(counter);
    counter++;
    fn(counter);
}

// fn(counter);

// Print name 5 times 
let n = 0;
const PrintName = () => {
    if(n == 5) {
        return;
    }

    console.log('Tahir Ahmed');
    n++;
    PrintName();
}

// PrintName();
// Print from 1 to N
const printOneToN = (i, n) => {
    if(i >= n) {
        return;
    }

    console.log(i);
    printOneToN(i + 1, n);
}

// printOneToN(1, 6);


// Print from N to 1 
const printNnmbers = (n) => {
    if(n == 0) {
        return;
    }

    console.log(n);
    
    printNnmbers(n - 1);
}

// printNnmbers(5);

// Q: Print from 1 to N. 
const printNnmbers1 = (i, n) => {
    if(i < 1) {
        return;
    }

    printNnmbers1(i - 1, n);
    console.log(i);
}

// printNnmbers1(4, 4);

// Q: Print from N to 1 (By Breaktrack)

const printReverse = (i, n) => {
    if(i > n) {
        return;
    }

    printReverse(i + 1, n);
    console.log(i);
}

printReverse(1, 5);
