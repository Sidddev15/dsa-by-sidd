// Given an array of size N, rotate the array to the left by D positions.
// Input: arr = [1, 2, 3, 4, 5], D = 2
// Output: [3, 4, 5, 1, 2]

// Input: arr = [10, 20, 30, 40, 50, 60], D = 3
// Output: [40, 50, 60, 10, 20, 30]

// function leftRotateBruteForce(arr, D) {
//     // Your main logic goes here
//     const N = arr.length;
//     if (N === 0) return [];

//     D = D % N;

//     const rotated = arr.slice(D).concat(arr.slice(0, D));
//     return rotated;
    
// }

// console.log(leftRotateBruteForce([1,2,3,4,5,6], 2));
// console.log(leftRotateBruteForce([1], 2));
// console.log(leftRotateBruteForce([1,1,1,1,1,1], 3));
// console.log(leftRotateBruteForce([10,20,30,40,50,60], 4));


function reverse(arr, start, end) {
    // Your main logic goes here
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
}

function leftRotateOptimal(arr, D) {
    const N = arr.length;
    if(N === 0 || D === 0) return arr;
    D = D % N;

    reverse(arr, 0, D - 1);
    reverse(arr, D, N - 1);
    reverse(arr, 0, N - 1);

    return arr;
}

console.log(leftRotateOptimal([1, 2, 3, 4, 5], 2));
console.log(leftRotateOptimal([10, 20, 30, 40, 50, 60], 3));