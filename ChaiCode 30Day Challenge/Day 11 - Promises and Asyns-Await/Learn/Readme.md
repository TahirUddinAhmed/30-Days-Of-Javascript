# Asynchronous javascript 
Asynchronous programming is a technique that enables your program to start a potentially long-running task and still be able to be responsive to other events while that task runs, rather than having to wait until that task has finished. Once that task has finished, Your program is presented with the result. 
 
Many functions provided by broweser, especially the most interesting ones, can potentially take a long time, and therefore, are asynchronous. For example 
 - Making HTTP requests using `fetch()`.
 - Accessing a user's camera or microphone using `getUserMedia()`.
 - Asking a user to select files usign `showOpenFilePicker()`.

So even though you may not have to implement your own asynchronous functions very ofter you are very likely to need to used them correctly. 

## Synchronous VS Asynchronous 
 - <b>Synchronous Code</b>: Executes one line at a time, in order. Each line waits for the previous one to finsh. 

 - <b>Asynchronous Code</b>: Can move on to other task while waiting for certain operations to complete. This helps avoid blocking the main thread and improves performance. 

## Promises 
In javascript, a promise is an object that represents the eventual completion (or failure) of an asynchrous operation and its resulting value. Think of a promise as a placeholder for a value that you're expecting but dont have yet because the operation that produces that value is still in progress. 

 1. Promises are for asynchronous operation: Asynchronous operations are tasks that take some time to complete, such as fetching data drom a server, reading a file, or waiting for a timer. Promises allow you to handle these operations without blocking the rest of your code. 

 2. States of a Promise: 
  - Pending: The initial state, meaning the operation is still ongoing. 
  - Fullfilled: The operation completed successfully, and the promise has a value. 
  - Rejected: The operation failed. and the promise has a reason for the failure (an error). 

  3. Creating a Promise: 
```js
let myPromise = new Promise((resolve, reject) => {
    // asynchronous operation goes here 
    let success - true; // this is just an example 

    if(success) {
        resolve("Operation was successfull"); // Operation succeeded
    } else {
        reject("Operation failed"); // Operation failed
    }
});

```

 4. Using a Promise: 
  - You handle the result of promise using the `.then()` method for a successful outcome and `.catch()` for a failure. 

  ```js
  myPromise.then(result => {
    console.log(result); 
  }).catch(error => {
    console.log(error);
  })

  ```

  5. Async/Await: Promise can also be used with `async` and `await` for a more readable, synchronous like syntax: 

  ```js
    async function doSomething() {
        try {
            let result = await myPromise;
            console.log(result);
        } catch(error) {
            console.log(error);
        }
    }

    doSomething();
  ```

Async/Await is Javascript is a modern way to hanndle asynchronous operations, making the code look and behave more like synchronous code. which can be easier to read and understand, It builds on top of Promises, Providing a cleaner and more intuitive syntax. 

 1. Async Function: 
  - An `async` function is a function tht returns a Promise. 
  - You declare an `async` function using the `async` keyword before the function definition. 

 2. Await Keyword: 
  - The `await` keyword is used inside `async` functions to pause the execution of the function until a promise is resolved or rejected. 
  - It makes your asynchronous code look like its running synchronously. 
  - when the `await` keyword is used, the function pauses execution until the Promise is resolved. 
  - The resolved value of the Promise is then assigned to the variable. 
  - You can handle errors in an `async` function using `try...catch` blocks. 