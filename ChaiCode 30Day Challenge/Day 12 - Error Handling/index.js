// Day 12: Error handling 
// Activity 1: 
function risk() {
    throw new Error('This is a intentional error');
}

try {
   risk();
} catch(err) {
    console.log("ERR:", err.message);
}

// Task 2
function divide(numerator, denominator) {
    if(denominator == 0) {
        throw new Error(`Zero divided by any number is 0`);
    } else {
        return numerator / denominator;
    }
}

try {
    let a = 14; 
    let b = 0;
    const div1 = divide(a, b);

    console.log(div1);
} catch(err) {
    console.log('Error:', err.message);
}

// Activity 2: Finally Block 

try {
    console.log(age);
} catch(err) {
    console.log(`ErrorName: ${err.name} (${err.message})`);
} finally {
    console.log('This line always execute');
}

// Activity 3: Cusstom Error Objects
// Task 4 
class myError extends Error {
    constructor(message) {
        super(message); // call the parent class constructor
        this.name = 'customError';
    }
}

function riskyFunction() {
    throw new myError('Something went wrong in riskyFunction!');
}

try {
    console.log('Task 4');
    riskyFunction();
} catch (err) {
    if (err instanceof myError) {
        console.error('CustomError caught:', err.message);
    } else {
        console.error('An unexpected error occurred:', err);
    }
}



// Activity 4: Error Handling in Promises 
// Task 6: randomly resolves or rejects 

const binaryDigit = Math.floor(Math.random() * 2);

const myPromise = new Promise((resolve, reject) => {
    if(binaryDigit === 1) {
        resolve('Success');  
    } else {
        reject('Failed');
    }
})

myPromise.then(function(response) {
    console.log('Task 6: ', response);
}).catch((err) => {
    console.log('Task 6', err);
})

// Task 7
async function getResult() {
    try {
        const response = await myPromise;

        console.log('Task 7: ', response);
    } catch(err) {
        console.error('Task 7:', err);
    }
}

getResult();

// Activity 5: Graceful error handling in fetch 
// Task 8: 

fetch('https://invalid-url.example.com')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.error('Data cannot be fetched:', err);
    });

// Task 9
async function getApi() {
    const url = 'https://invalid-url.com';
    try {
        const response = await fetch(url);
        
        if(!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }

        const data = await response.json();

        console.log(data);
    } catch(err) {
        console.error(`Data can't be fetched: `, err);
    }

}

getApi();