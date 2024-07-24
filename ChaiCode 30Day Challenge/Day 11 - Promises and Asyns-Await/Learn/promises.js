// A promise is a javascript object that represents the eventual completion (or failure) 
// of an asynchronous operation and its resulting value.  
const promiseOne = new Promise(function(resolve, reject) {
    // Do an async task 
    // DB calls, cryptography, network
    setTimeout(function() {
        console.log('Async Task is completed');
        resolve();
    }, 1000);
})

promiseOne.then(function() {
    console.log('Promise Consumed');
})

// another example 
new Promise(function(resolve, reject) {
    setTimeout(function(){
        console.log("Async Task 2");
        resolve();
    }, 1000)
}).then(function() {
    console.log('Asyn 2 resolved');
})

// 
const promiseThree = new Promise((resolve, reject) => {
    setTimeout(function() {
        resolve({username: 'Tahir', email: 'tahir@gmail.com'});
    }, 1000);
})

promiseThree.then(function(user) {
    console.log(user);
})

// promise 4
const promiseFour = new Promise((resolve, reject) => {
    setTimeout(function() {
        let error = true;

        if(!error) {
            resolve({username: 'Tahir', password: 'tahir123'});
        } else {
            reject('ERROR: Something went wrong!');
        }
    }, 1000);
})

promiseFour
.then((user) => {
    console.log(user);
    return user.username;
}).then((username) => {
    console.log(username);
}).catch((err) => {
    console.log(err);
}).finally(() => console.log('The promise is either resolved or rejected'));

// Promise 5
const promiseFive = new Promise((resolve, reject) => {
    setTimeout(function() {
        let error = false;

        if(!error) {
            resolve({username: 'javascript', password: 'js123'});
        } else {
            reject('ERROR: js went wrong!');
        }
    }, 1000);
})

async function consumedPromiseFive() {
    
    try {
        const response = await promiseFive;
        console.log(response)

    }catch(err) {
        console.log(err);
    }
}

consumedPromiseFive();

// Fetch github users data 
async function gitHubUsers() {
   try {
    const response = await fetch('https://api.github.com/users/TahirUddinAhmed');
    // convert string to object
    if(!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    } 
    const data = await response.json();
 
    console.log(data);
    // console.log(response);
   } catch (err) {

    console.log(err);
   }
}

gitHubUsers();

// another way to fetch s
// fetch('https://api.github.com/users/TahirUddinAhmed')
// .then((response) => {
//     return response.json();
// })
// .then((data) => {
//     console.log(data);
// })
// .catch((err) => {
//     console.log(err);
// })