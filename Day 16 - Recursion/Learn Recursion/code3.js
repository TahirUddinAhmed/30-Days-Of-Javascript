// Q: Reverse an array 

function swap(arr, a, b) {
    let temp; 
    temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

function reverseArr(l, r, arr) {
    if(l > r) return;

    swap(arr, l, r);
    // array destructuring 
    // [arr[l], arr[r]] = [arr[r], arr[l]];
    reverseArr(l + 1, r - 1, arr);
}

const arr = [1, 2, 3, 4];
let l = 0;
let r = arr.length - 1;
reverseArr(l, r, arr);
console.log(arr);

// another way to 

function reverseArr2(l, n, arr) {
    if(l > n / 2) {
        return;
    }

    swap(arr, l, n-l-1);
    reverseArr2(l + 1, n, arr);
}

const arr2 = [5, 6, 7, 8, 9, 10];
let n = arr2.length;
reverseArr2(0, n, arr2);
console.log(arr2);


// Q: Check if a string is palindrome or not 
function isPalindrome(i, str) {
    if(i >= (str.length) / 2) return true;

    if(str[i] != str[(str.length - i - 1)]) {
        return false;
    }

    return isPalindrome(i + 1, str);
}

const str = "madam";

console.log(isPalindrome(0, str));

// console.log(str.length);


