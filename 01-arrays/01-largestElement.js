// Given an array of N integers, return the largest element in the array.
// Template for DSA problems in JS

function findLargest(array) {
    if (array.length === 0) return null;

    let max = array[0];

    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }

    return max;
}

console.log(findLargest([3, 5, 1, 8, 2])); // 8
console.log(findLargest([-10, -5, -3]));   // -3
console.log(findLargest([42]));           // 42


// 🚀 Test Cases
const testCases = [
    [3, 5, 1, 8, 2],         // Expected: 8
    [-10, -5, -3],            // Expected: -1
    [42],                   // Expected: 42
    [5, 5, 5, 5, 5]            // Expected 5
];

for (let i = 0; i < testCases.length; i++) {
    console.log(`Test Case ${i + 1}:`);
    findLargest(testCases[i]);
    console.log('----------------------');
}

