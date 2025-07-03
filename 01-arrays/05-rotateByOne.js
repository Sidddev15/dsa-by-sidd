// Template for DSA problems in JS

function rotateLeftByOne(arr) {
    // Your main logic goes here
    if (arr.length === 0) return [];

    const first = arr[0];

    for (let i = 0; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1];
    }

    arr[arr.length - 1] = first;
    return arr;
}

console.log(rotateLeftByOne([1,2,3,4,5,6]))
console.log(rotateLeftByOne([1,2,3,4]))
console.log(rotateLeftByOne([10]))
console.log(rotateLeftByOne([]))

// 🚀 Test Cases
const testCases = [
    [3, 5, 1, 8, 2],         // Expected: 8
    [-10, -5, -3],            // Expected: -1
    [42],                   // Expected: 42
];

for (let i = 0; i < testCases.length; i++) {
    console.log(`Test Case ${i + 1}:`);
    rotateLeftByOne(testCases[i]);
    console.log('----------------------');
}
