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