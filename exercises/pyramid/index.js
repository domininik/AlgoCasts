// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(numberofLevels, currentLevel = 1) {
  if (numberofLevels === 0 || currentLevel > numberofLevels) {
    return;
  } else {
    const spaces = ' '.repeat(numberofLevels - currentLevel);
    const hashes = '#'.repeat(currentLevel - 1);
    
    console.log(spaces + hashes + '#' + hashes + spaces);

    pyramid(numberofLevels, currentLevel + 1);
  }
}

module.exports = pyramid;
