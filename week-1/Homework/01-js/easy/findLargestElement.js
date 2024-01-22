/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    // empty array or undefined input
    if (!numbers || numbers.length === 0) {
        return null;
    }
    let largestNum = numbers[0]
    for (let i = 1; i <= numbers.length; i++) {
        if (numbers[i] > largestNum) {
            largestNum = numbers[i];
        }
    }
    return largestNum
}
arr = [1, 0, 4, 8, 89]
console.log(findLargestElement(arr));

// module.exports = findLargestElement;