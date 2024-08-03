function arrLog(arr) {
    // O(1)
    console.log(arr[0]);
    console.log(arr[1]);
}

// Big O n
function arrLog2(arr, str) {
    // Runtime complexity of this algo. is 
    // O(n)
    for(let i = 0; i < arr.length; i++) { 
        console.log(arr[i]);
    }

    for(let i = 0; i < str.length; i++) { 
        console.log(str[i]);
    }

}

function TwoDArrLog(arr) {
    // n(n ^ 2)
    for(let i = 0; i < arr.length; i++) { // O(n)
        for(let j = 0; j < arr[i].length; j++) { // O(n)
            console.log(`${arr[i][j]}`);
        }
        console.log(`\n`); // new line
    }
}

const TwoD = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

TwoDArrLog(TwoD);

// Big O Notation 

/*
 CONSTANT     O(1)

 LOGARITHMIC  O(log n)

 LINEAR       O(n)

 QUADRATIC    O(n ^ 2)

 EXPONENTIAL  O(2 ^ n)


*/ 