// Bubble Sort 
function swap(a, b, arr) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

function bubbleSort(arr) {
    for(let i = arr.length - 1; i >= 1; i--) {
        for(let j = 0; j <= i - 1; j++) {
         if(arr[j] > arr[j+1]) {
             // swap
             swap(j, j+1, arr);
         }
        }
    }
}

const arr = [13, 45, 8, 55, 3, 9];
const arr2 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
bubbleSort(arr);
bubbleSort(arr2);

console.log(arr);
console.log(arr2);