# Higher Order Function 
A higher order function is a function that takes one or more functions as arguments, or returns a function as its result. 

There are several different types of higher order functions like map and reduce.

```js
// Callback function, passed as a parameter in the higher order function
function callbackFunction() {
    console.log('I am a callback function');
}

// Higer order function 
function higherOrderFunction(func) {
    console.log('I am higher order function');
    func();
}

higherOrderFunction(callbackFunction);

```
in the above code `higherOrderFunction` is an `HOF` because we are passing a callback function as a parameter to it. 

## How Higher Order Function Work 
So, suppose I want you to write a function  that calculates the area and diameter of a cirlce. As a beginner, the first solution that comes to our mind is to write eaach separate function calculate area or diameter. 

```js
const rdius = [1, 2, 4];
```

```js
// Function to calculate area of the circle 
const calculateArea = function (radius) {
    const output = [];

    for(let i = 0; i < radius.length; i++) {
        output.push(Math.PI * radius[i] * radius[i]);
    }

    return output;
}
```

```js
// Function to calculate diameter of the circle 
const calculateDiameter = function (radius) {
    const output = [];

    for(let i = 0; i < radius.length; i++) {
        output.push(2 * radius[i]);
    }

    return output;
}
```

```js

console.log(calculateArea(radius));
console.log(calculateDiameter(radius));

```

But have you noticed the problme with the above code? Aren't we write almost the same function again and agaon with slightly different logic? Also, the functions we have wrriten aren't reusable, are they?

So, let's see how we can write the same using HOFs: 

```js

const radius = [1, 2, 4];

```

```js

// logic to calculate area 
function area = (radius) => {
    return Math.PI * radius * radius;
}

```

```js

// logic to calculate diameter 
function diameter = (radius) => {
    return 2 * radius;
}

```

```js 

// higher order function 
const calculate = (logic, radius) => {
    const output = [];
    for(let i = 0; i < radius.length; i++) {
        output.push(logic(radius[i]));
    }

    return output;
}

```

Now, as you can see in the above code, we have only written a single function `calcualte()` to calculate the area and diameter of the circle. We only need to write the logic and pass it to `calculate()` and the function will do the job.