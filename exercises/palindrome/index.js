// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  // let reversed = str.split('').reverse().join('');

  // let reversed = '';
  // for (let index = 0; index < str.length; index++) {
  //   reversed = str[index] + reversed;
  // }

  // let reversed = '';
  // for (let index = str.length - 1; index >= 0; index--) {
  //   reversed += str[index];
  // }

  reversed = str.split('').reduce((memo, char) => memo = char + memo);

  return (reversed === str);
}

module.exports = palindrome;
