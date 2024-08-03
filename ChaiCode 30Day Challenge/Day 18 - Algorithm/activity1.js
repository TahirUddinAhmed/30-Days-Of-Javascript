// Day 18 - Algorithm 
function swap(a, b, arr) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

// Task 1 - bubble sort 
function bubbleSort(arr) {
    for(let i = arr.length - 1; i >= 1; i--) {
        for(let j = 0; j <= i - 1; j++) {
            if(arr[j] > arr[j+1]) {
                // swap
                swap(j, j + 1, arr);
            }
        }
    }
}

const arr1 = [5, 1, 12, 9, 6];
bubbleSort(arr1);
console.log(arr1);


// Task 2 - Selection sort 
function selectionSort(arr) {
    for(let i = 0; i < arr.length - 2; i++) {
        let min = i;
        for(let j = i; j <= arr.length - 1; j++) {
            if(arr[j] < arr[min]) {
                min = j;
            }
        }
        swap(i, min, arr);
    }
}
const arr2 = [13, 45, 8, 55, 3, 9];
selectionSort(arr2);

console.log(arr2);

// Task 3 - quicksort
function quicksort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[Math.floor(arr.length / 2)];
    const left = [];
    const right = [];

    for (let i = 0; i < arr.length; i++) {
        if (i === Math.floor(arr.length / 2)) continue;
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...quicksort(left), pivot, ...quicksort(right)];
}

const array = [3, 6, 8, 10, 1, 2, 1];
const sortedArray = quicksort(array);
console.log(sortedArray);
