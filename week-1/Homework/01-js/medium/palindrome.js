/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let formattedStr = str.toLowerCase();
  let i = 0;
  let j = formattedStr.length - 1;
  while (i < j) {
    if (formattedStr[i] == formattedStr[j]) {
      i++;
      j--;
    }
    else { return false; }
    return true;
  }
}
let word = "racecar"
console.log(isPalindrome(word))
module.exports = isPalindrome;
