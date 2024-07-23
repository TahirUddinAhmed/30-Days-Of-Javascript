// setInterval(handler, timeout)
// setInterval(function(){
//     console.log('tahir', Date.now());
// }, 2000)

const start = document.querySelector('#start');
const stop = document.querySelector('#stop');

let intervalID;

// function to execute
const sayHi = function(str) {
    console.log(str, Date.now());
};

const startExecute = function(){
    intervalID = setInterval(sayHi, 2000, "Hello");
 };

 const stopExecute = function() {
    if(intervalID) {
        clearInterval(intervalID);
    }
 }
start.addEventListener('click', startExecute);

stop.addEventListener('click', stopExecute);