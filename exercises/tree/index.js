// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  add(data) {
    const node = new Node(data);
    this.children.push(node); 
  }

  remove(data) {
    for (let index = 0; index < this.children.length; index++) {
      let node = this.children[index];

      if (node.data === data) {
        this.children.splice(index, 1);
      }
    }
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  traverseBF(fn) {
    const nodes = [this.root];

    while (nodes.length > 0) {
      const root = nodes.shift();
      fn(root);

      for (let node of root.children) {
        nodes.push(node);
      }
    }
  }

  traverseDF(fn) {
    const nodes = [this.root];

    while (nodes.length > 0) {
      const root = nodes.shift();
      fn(root);

      // nodes.unshift(...root.children);

      let chunk = [];

      for (let node of root.children) {
        chunk.unshift(node);
      }

      for (let node of chunk) {
        nodes.unshift(node);
      }
    }
  }
}

module.exports = { Tree, Node };
