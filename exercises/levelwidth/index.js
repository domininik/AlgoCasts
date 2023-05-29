// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  const queue = [root, 's'];
  const result = [0];

  while (queue.length > 1) {
    let node = queue.shift();
    
    if (node === 's') {
      result.push(0);
      queue.push('s');
    } else {
      result[result.length - 1] += 1; 
      queue.push(...node.children);
    }
  }

  return result;
}

module.exports = levelWidth;
