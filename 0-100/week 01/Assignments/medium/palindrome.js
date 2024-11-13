/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toLowerCase();

  // Check for palindrome by iterating halfway through the string
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - i - 1]) {
      return false; // If characters don't match, it's not a palindrome
    }
  return true;
}
}
module.exports = isPalindrome;
console.log(isPalindrome('lfhhis')); 
