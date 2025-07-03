// Template for DSA problems in JS

function removeDuplicateElementFromArray(arr) {
    // Your main logic goes here
    if (arr.length === 0) return 0;
    let i = 0;
    for(let j = 1; j < arr.length; j++) {
        if(arr[j] !== arr[i]) {
            i++;
            arr[i] = arr[j];
        }
    }
    return arr.slice(0, i+1);
}

console.log(removeDuplicateElementFromArray([1,2,2,2,3,4,5]));
console.log(removeDuplicateElementFromArray([1,2,3,3,5,7]));
console.log(removeDuplicateElementFromArray([1,1,1,1,1,1]));
console.log(removeDuplicateElementFromArray([2]));

// 🚀 Test Cases
const testCases = [
    [3, 5, 1, 8, 2],         // Expected: 8
    [-10, -5, -3],            // Expected: -1
    [42],                   // Expected: 42
];

for (let i = 0; i < testCases.length; i++) {
    console.log(`Test Case ${i + 1}:`);
    removeDuplicateElementFromArray(testCases[i]);
    console.log('----------------------');
}
