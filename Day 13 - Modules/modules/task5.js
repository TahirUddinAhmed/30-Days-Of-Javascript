// Task 5: Create a module that exports multiple constants and functions.
// Import the entire module as an object as an object in another script 
// and use its properties. 

export const height = 8;
export const width = 5;

export function area(h = height, w = width) {
    return h * w;
}

export function perimeter(h = height, w = width) {
    return 2 * (h + w);
}
