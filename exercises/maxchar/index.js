// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const hash = new Object();
  let result = '';
  let max = 0;

  for (let char of str) {
    if (hash[char]) {
      hash[char] += 1;
    } else {
      hash[char] = 1;
    }
  }

  for (const [key, value] of Object.entries(hash)) {
    if (value > max) {
      max = value;
      result = key;
    }
  }

  return result;
}

module.exports = maxChar;
