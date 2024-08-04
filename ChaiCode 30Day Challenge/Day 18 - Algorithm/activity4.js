// Task 8 
function rotateArray(arr, k) {
    const n = arr.length;
    k = k % n; 

    // Reverse the entire array
    reverse(arr, 0, n - 1);
    // Reverse the first k elements
    reverse(arr, 0, k - 1);
    // Reverse the remaining n - k elements
    reverse(arr, k, n - 1);

    console.log('Rotated array:', arr);
    return arr;
}

function reverse(arr, start, end) {
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
}


const str2 = [1, 2, 3, 4, 5, 6, 7];
const k = 3;
rotateArray(str2, k);


