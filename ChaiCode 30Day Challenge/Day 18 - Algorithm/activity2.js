// Day 18 - Algorithm 
// Task 3 - Linear Search 
function linearSearch(arr, target) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === target) {
            return i;
        }
    }

    return 'target element not found';
}

const arr1 = [3, 7, 11, 14, 21, 88];
console.log(linearSearch(arr1, 21));


// Task 5 - Binary Search 
function binarySearch(arr, target, s = 0, e = arr.length -1) {
    // find the mid 
    let mid = Math.floor((s + e)/2);

    if(arr[mid] > target) {
        // target lies on the left side 
        e = mid - 1;
        return binarySearch(arr, target, s, e);
    } else if(arr[mid] < target) {
        // target lies on the right side 
        s = mid + 1;
        return binarySearch(arr, target, s, e);
    } else {
        return mid;
    }

    return 'element not found';
}

const arr2 = [3, 7, 11, 14, 21, 88];

const res1 = binarySearch(arr2, 21);
console.log(res1);