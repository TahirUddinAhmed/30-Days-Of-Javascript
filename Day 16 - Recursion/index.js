// Day 16 
// Task1
function fact(n) {
    if(n == 1) return 1;

    return n * fact(n - 1);
}
console.log("==== Task 1 =====");
console.log("Factorial using recursion");
console.log(fact(5));
console.log(fact(4));

// Fibonacci Series 
// Task 2
console.log("===== Task 2 =====");

function Fibonacci(n) {
    if(n <= 1) {
        return n;
    }

    return Fibonacci(n - 1) + Fibonacci(n - 2);
}

console.log(Fibonacci(5));
console.log(Fibonacci(7));


// Task 3
console.log("===== Task 3 =====");
console.log('Sum of elements in an array');

function ArrSum(s, arr) {
    if(s >= arr.length) {
        return 0;
    }

    // let result = arr[s] + ArrSum(s + 1, arr);

    return arr[s] + ArrSum(s + 1, arr);
}

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 11, 9, 0, 7, 42];
console.log(ArrSum(0, arr1));
console.log(ArrSum(0, arr2));

// Task 4
console.log('===== Task 4 =====');
console.log('Recursive function to find the maximum element in an array -');

function findMax(arr, index = 0) {
    // Base case: when the index reaches the last element
    if (index === arr.length - 1) {
        return arr[index];
    }
    const maxOfRest = findMax(arr, index + 1);

    
    if (arr[index] > maxOfRest) {
        return arr[index];
    } else {
        return maxOfRest;
    }
}


const test1 = [1, 2, 3, 4];

console.log(findMax(test1));

console.log('===== Task 5 =====');
console.log('Function to reverse a string -');

function swap(a, b, str) {
    let arr = str.split('');
    let temp;
    temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;

    return arr.join('');
}

function reverseStr(str, index = 0) {
    if(index > str.length / 2) return str;

    str = swap(index, (str.length - index - 1), str);
    return reverseStr(str, index + 1);
}

const str1 = "Hello";

console.log(reverseStr(str1));

// Task 6
console.log('===== Task 6 ======');
console.log('Check if a string is palindrome');

function isPalindrome(str, index = 0) {
    if(index >= str.length/2) return true;

    if(str[index] != str[str.length - index - 1]) {
        return false;
    }

    return isPalindrome(str, index + 1);
}


const checkStr = 'madam';
const checkStr2 = 'Hello';
console.log(isPalindrome(checkStr)); 
console.log(isPalindrome(checkStr2)); 

// Task 7 
// Binary search 
// const array1 = [3, 5, 7, 9, 11];
// const target = 17;
// let isFound = false;

// // find the element 
// for(let i = 0; i < array1.length; i++) {
//     if(array1[i] === target) {
//         isFound = true;
//     }
// }
// console.log("search");
// console.log(isFound);

// Binary search 
function binarySearch(arr, target, first = 0, last = arr.length - 1) {
    // base condition 
    if(first > last) {
        return -1;
    }
    // find the mid index 
    let mid = Math.floor((first + last) / 2); 

    if(target > arr[mid]) {
        // element lies on the right side
        first = mid + 1;
        return binarySearch(arr,target, first, last);
    } else if(target < arr[mid]) {
        // element lies on the left side
        last = mid - 1;
        return inarySearch(arr, target, first, last);
    } else {
        return mid;
    }

}

const array1 = [3, 5, 7, 9, 11];

const res = binarySearch(array1, 11);
console.log('Binary Search');
console.log(res);


// Task 8
function countOccurrences(arr, target, index = 0) {
    if (index >= arr.length) {
        return 0;
    }

    let count = arr[index] === target ? 1 : 0;
    return count + countOccurrences(arr, target, index + 1);
}

// Test cases
const array2 = [3, 3, 3];
const array3 = [1, 2, 4, 5, 6];

console.log(countOccurrences(array2, 3)); // Output: 3
console.log(countOccurrences(array3, 3)); // Output: 0


