// Template for DSA problems in JS

function secondLargest(arr) {
    if (arr.length < 2) return -1;

    let first = -Infinity;
    let second = -Infinity;

    for (let num of arr) {
        if (num > first) {
            second = first;
            first = num;
        } else if (num > second && num !== first) {
            second = num;
        }
    }

    return second === -Infinity ? -1 : second;
}

console.log(secondLargest([12, 35, 1, 10, 34, 1])); // 34
console.log(secondLargest([10, 10, 10]));           // -1
console.log(secondLargest([10]));                  // -1
console.log(secondLargest([5, 3, 1]));              // 3
console.log(secondLargest([-1, -2, -3]));


// 🚀 Test Cases
const testCases = [
    [12, 35, 1, 10, 34, 1],         // Expected: 34
    [10, 5, 10],            // Expected: 5
    [10, 10, 10],                   // Expected: -1 (if no second largest exists)
];

for (let i = 0; i < testCases.length; i++) {
    console.log(`Test Case ${i + 1}:`);
    secondLargest(testCases[i]);
    console.log('----------------------');
}
