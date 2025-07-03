// Template for DSA problems in JS

function SortInAscendingOrder(arr) {
    // Your main logic goes here
    for (let i = 0; i < arr.length - 1; i++) {
        if(arr[i] > arr[i+1]) {
            return false;
        }
    }

    return true;
}

console.log(SortInAscendingOrder([1,2,3,5,7,3]));
console.log(SortInAscendingOrder([4,3,3,6,2]));
console.log(SortInAscendingOrder([1,2,3,4,5]));
console.log(SortInAscendingOrder([1]));
console.log(SortInAscendingOrder([1,1,1,1,1]));

// 🚀 Test Cases
const testCases = [
    [1, 2, 2, 4, 5],         // Expected: true
    [5, 4, 3, 2, 1],            // Expected: false
    [10],                          //true
    [3,3,3]                   // Expected: true
];

for (let i = 0; i < testCases.length; i++) {
    console.log(`Test Case ${i + 1}:`);
    SortInAscendingOrder(testCases[i]);
    console.log('----------------------');
}
