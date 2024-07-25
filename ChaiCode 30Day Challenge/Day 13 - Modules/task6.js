// Task 6
// index.js
import Arr from 'lodash';

// Example array
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const array2 = [11, 12, 13, 14];

// Use lodash's chunk function to split the array into chunks of 3
const chunkedArray = Arr.chunk(array, 3);
const concateArray = Arr.concat(array, array2)

console.log(chunkedArray);
console.log(concateArray);

