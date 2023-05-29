// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  let length = arr.length;

  for (let end =  length - 1; end > 0; end--) {
    let swaps = 0;

    for (let index = 0; index < end; index++) {
      let max = arr[index];
      let next = arr[index + 1];
  
      if (next < max) {
        let temp = arr[index];
        arr[index] = next;
        arr[index + 1] = temp;
        swaps++;
      }
    }

    if (swaps === 0) {
      break;
    }
  }

  return arr;
}

function selectionSort(arr) {
  for (let currentMinIndex = 0; currentMinIndex < arr.length - 1; currentMinIndex++) {
    let newMinIndex = currentMinIndex;

    for (let index = currentMinIndex + 1; index < arr.length; index++) {
      if (arr[index] < arr[newMinIndex]) {
        newMinIndex = index;
      }
    }

    if (newMinIndex > currentMinIndex) {
      let temp = arr[currentMinIndex];
      arr[currentMinIndex] = arr[newMinIndex];
      arr[newMinIndex] = temp;
    }
  }

  return arr;
}

function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }

  let left = [];
  let right = [];
  let divideAt = Math.ceil(arr.length / 2) - 1;

  for (let index = 0; index <= divideAt; index++) {
    left.push(arr[index]);
  }

  for (let index = divideAt + 1; index <= arr.length -1; index++) {
    right.push(arr[index]);
  }

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const result = [];

  // while (left.length != 0 && right.length != 0) {
  //   let a = left[0]
  //   let b = right[0];
  
  //   if (a < b) {
  //     result.push(left.shift());
  //   } else {
  //     result.push(right.shift());
  //   }
  // }

  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  while (i < left.length) {
    result.push(left[i]);
    i++;
  }

  while (j < right.length) {
    result.push(right[j]);
    j++;
  }

  return result;
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
