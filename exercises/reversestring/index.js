// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  let result = '';

  for (let index = str.length - 1; index >= 0; index--) {
    result += str[index];
  }

  return result;
}

module.exports = reverse;
