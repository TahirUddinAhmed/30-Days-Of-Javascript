// function counter () {
//     let num = 0;

//     return num += 1;
// }

// const counter1 = counter();

// console.log(counter1);
// console.log(counter1);
// console.log(counter1);

function Counter() {
    let num = 0; // initial value 

    function add() {
        num += 1;
        console.log(num);
    }

   return add;
}

const c1 = Counter();

c1();
c1();
c1();
c1();
c1();



// console.log(add(9));

function memoizeAdd() {
    let chache = {};

    return function(n) {
        if(n in chache) {
            console.log('returning value from chache');
            return chache[n];
        } else {
            console.log("Calculation");
            let result = n + 10;
            chache[n] = result;

            return result;
        }
    }
}

const newAdd = memoizeAdd();

console.log(newAdd(9));
console.log(newAdd(9));



const add = (n) => (n + 10);
console.log('Simple call', add(3));
// a simple memoize function that takes in a function
// and returns a memoized function
const memoize = (fn) => {
  let cache = {};
  return (...args) => {
    let n = args[0];  // just taking one argument here
    if (n in cache) {
      console.log('Fetching from cache');
      return cache[n];
    }
    else {
      console.log('Calculating result');
      let result = fn(n);
      cache[n] = result;
      return result;
    }
  }
}
// creating a memoized function for the 'add' pure function
const memoizedAdd = memoize(add);
console.log(memoizedAdd(3));  // calculated
console.log(memoizedAdd(3));  // cached
console.log(memoizedAdd(4));  // calculated
console.log(memoizedAdd(4));  // cached


// Factorial 
