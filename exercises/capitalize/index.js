// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  const result = []

  for (let index = 0; index < str.length; index++) {
    let prev = str[index - 1];
    let current = str[index];

    if (!prev || prev === ' ') {
      result.push(current.toUpperCase());
    } else {
      result.push(current);
    }
  }

  return result.join('');
}

module.exports = capitalize;
