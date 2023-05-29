// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  // const result = [];
  // let index = 0;

  // while (index < array.length) {
  //   let slice = array.slice(index, index + size);
  //   result.push(slice);
  //   index = index + size;
  // }

  // return result;

  const result = []

  for (let index = 0; index < array.length; index++) {
    const element = array[index];

    let subarray = result[result.length - 1];

    if (!subarray || subarray.length === 0 || subarray.length === size) {
      result.push([element]);
    } else {
      subarray.push(element);
    }
  }

  return result;
}

module.exports = chunk;
