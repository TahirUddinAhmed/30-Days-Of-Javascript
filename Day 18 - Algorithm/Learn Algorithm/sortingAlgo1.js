// Selection sort 
function swap(a, b, arr) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

function selectionSort(arr) {
    for(let i = 0; i <= arr.length - 2; i++) {
        let min = i;
        for(let j = i; j <= arr.length -1; j++) {
            // find the minimum 
            if(arr[j] < arr[min]) {
                min = j;
            }
            
        }
        swap(i, min, arr);
    }

    // return arr;
}

const arr1 = [13, 45, 8, 55, 3, 9];
selectionSort(arr1);

console.log(arr1);


