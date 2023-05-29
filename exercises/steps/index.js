// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(numberOfSteps, currentStep = 1) {
  if (numberOfSteps === 0 || currentStep > numberOfSteps) {
    return;
  } else {
    let string = '';

    for (let i = 1; i <= currentStep; i++) {
      string += '#';
    }

    for (let i = 1; i <= numberOfSteps - currentStep; i++) {
      string += ' ';
    }

    console.log(string);

    steps(numberOfSteps, currentStep + 1);
  }

}

module.exports = steps;
