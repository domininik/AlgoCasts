// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(number) {
  let reversed = number.toString().split('').reverse().join('');
  return parseInt(reversed) * Math.sign(number);

  // let reversed = number.toString().split('').reverse().join('');
  // if (reversed[reversed.length - 1] === '-') {
  //   reversed = '-' + reversed;
  // }
  
  // return parseInt(reversed);
}

module.exports = reverseInt;
