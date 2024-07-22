// Day 6 - Arrays
console.log("Activity 1 - ");
// Task 1
const nums = [1, 2, 3, 4, 5];
console.log(nums);
// Task 2
console.log(`First elements of the array is ${nums[0]}`);
console.log(`last elements of the array is ${nums[nums.length - 1]}`);

// Activity 2: Array Methods
// Task 3
nums.push(7);
// Task 4
nums.pop();
// Task 5
nums.shift();
// Task 6
nums.unshift(13);

console.log(nums);

// Activity 3: Array method (intermediate)
console.log("Activity 3");
// Task 1 - map()
console.log("Doubled elemets of an array using map() - ")
function doubled(n) {
    return n * 2;
}
const doubledNums = nums.map(doubled);

console.log(doubledNums);

// Task 2 - filter()
console.log("Create a new array with only even numbers using filter() - ")
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNums = numbers.filter((n) => {
    return n % 2 == 0;
});

console.log(evenNums);

// Task 9: reduce()
console.log('calculate the ssum of all numbers in the array using reduce() - ')
const add = numbers.reduce((accumulator, cuurentValue) => {
    return accumulator + cuurentValue;
}, 0)

console.log(add);

// Activity 4: Array Iteration 
// Task 10
console.log('Iterate over the array using for loop - ')
for(let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
// Task 11 
console.log('Iterate over the array using forEach loop - ');

numbers.forEach((e) => {
    console.log(e);
});

// Activity 5: Multi-dimensional Arrays
// Task 12
console.log("Two-dimensional Array - ");
const twoD = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(twoD);

// Task 13 - access a specific elements 
console.log("Accessing elements in a two-dimensional array")
console.log(twoD[1][2]); // accesssing element 6 in the twoD array
