/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  // Your code here
  let formattedStr = str.toLowerCase();
  let vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (let i = 0; i < formattedStr.length; i++) {
    const char = formattedStr[i];
    if (vowels.includes(char)) {
      count++
    }
  }
  return count;

}
let word = ("KEEP SMILING, boo.");
console.log(countVowels(word))
// module.exports = countVowels;