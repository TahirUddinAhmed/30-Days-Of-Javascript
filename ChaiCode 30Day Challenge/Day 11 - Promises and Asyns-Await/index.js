// Day 11: Promises, async/await
// Activity 1: Understanding promises 
// Task 1
const promiseOne = new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log('Activity started');
        resolve();
    }, 2000);
})

promiseOne.then(function() {
    console.log('Task 1 completed');
}).catch(function() {
    console.log('Failed to complete task 1');
})


// Task 2
const promiseTwo = new Promise((resolve, reject) => {
    setTimeout(function() {
        let success = false;

        if(!success) {
            reject();
        } else {
            resolve();
        }
    }, 2000);
})

promiseTwo
.then(() => console.log('Task 2 Completed'))
.catch(() => console.log('Failed! there might be some error'));


// Activity 2: Chaining promises 
// Task 3
fetch('https://api.github.com/users/TahirUddinAhmed')
.then((response) => {
    if(!response.ok) {
        throw new Error(`HTTP ERROR: error status ${response.status}`);
    }

    return response.json();
})
.then(data => {
    console.log(data);
}) 
.catch(error => {
    console.log('Error: ', error);
})

// Activity 3
const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Activity 3 starts');
        resolve('hello there');
    }, 2000);
}) 

async function executePromise() {
    const response = await promiseThree;

    console.log(response);
}

// call the async function 
executePromise();

// Task 5
const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Task 5 starts');

        let success = false;

        if(!success) {
            reject('failed');
        } else {
            resolve('success');
        }
        
    }, 2000);
}) 

async function executePromise2() {

    try {
        const response = await promiseFour;
    
        console.log(response);

    } catch(error) {
        console.log("Error: ", error);
    }
}

// call the async function 
executePromise2();

// Activity 4: Fetching data from an API
// Task 6
fetch('https://api.github.com/users/TahirUddinAhmed')
.then((response) => {
    if(!response.ok) {
        throw new Error(`HTTP ERROR: error status ${response.status}`);
    }

    return response.json();
})
.then(data => {
    console.log(data);
}) 
.catch(error => {
    console.log('Error: ', error);
})

// Task 7
async function getGithubUser() {
    const url = 'https://api.github.com/users';

    try {
       const response =  await fetch(url);

       if(!response.ok) {
        throw new Error(`ERROR: status code ${response.status}`);
       }

       const data = await response.json();

       console.log(data);
    } catch(err) {
        console.log("Err: ", err);
    }
}

getGithubUser();


// Activity 5: Concurrent Promises 
// Task 8 
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Activity 5 starts');
        resolve('Promise 1 Completed');
    }, 2000);
});
const promse2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 2 Completed');
    }, 1000);
});
const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 3 Completed');
    }, 3000);
});

Promise.all([promise1, promse2, promise3]) 
    .then(result => console.log(result))
    .catch(error => console.log(error))

// Task 9
const promise4 = new Promise((resolve, reject) => setTimeout(resolve, 6000, 'primise 4 completed'));
const promise5 = new Promise((resolve, reject) => setTimeout(resolve, 3000, 'primise 5 completed'));
const promise6 = new Promise((resolve, reject) => setTimeout(resolve, 5000, 'primise 6 completed'));

Promise.race([promise4, promise5, promise6])
    .then(result => console.log(result))
    .catch(error => console.log(error))

