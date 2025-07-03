// Template for DSA problems in JS

function isStrictlyIncreasing(arr) {
    // Your main logic goes here
    for(let i = 0; i < arr.length - 1; i++) {
        if (arr[i] >= arr[i + 1]) {
            return false;
        } 
    }
    return true;
}

console.log(isStrictlyIncreasing([1,2,3,4,5,6]));
console.log(isStrictlyIncreasing([6,5,4,3,2,1]));
console.log(isStrictlyIncreasing([1,2,4,5,6]));
console.log(isStrictlyIncreasing([1,2,3,5,6]));
console.log(isStrictlyIncreasing([1]));
console.log(isStrictlyIncreasing([1,1,1,1,1,1]));

// 🚀 Test Cases
const testCases = [
    [3, 5, 1, 8, 2],         // Expected: 8
    [-10, -5, -3],            // Expected: -1
    [42],                   // Expected: 42
];

for (let i = 0; i < testCases.length; i++) {
    console.log(`Test Case ${i + 1}:`);
    isStrictlyIncreasing(testCases[i]);
    console.log('----------------------');
}
