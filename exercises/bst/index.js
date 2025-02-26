// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  insert(data) {
    if (data < this.data) {
      if (this.left) {
        this.left.insert(data)  
      } else {
        this.left = new Node(data);
        return;
      }
    } else {
      if (this.right) {
        this.right.insert(data)
      } else {
        this.right = new Node(data);
        return;
      }
    }


    // const node = new Node(data);

    // let root = this; 

    // while (root) {
    //   if (data > root.data) {
    //     if (root.right) {
    //       root = root.right;
    //     } else {
    //       root.right = node;
    //       break;
    //     }
    //   } else {
    //     if (root.left) {
    //       root = root.left;
    //     } else {
    //       root.left = node;
    //       break;
    //     }
    //   }
    // }
  }

  // 10
  // |  \
  // 5  15
  // |  |  \
  // 0      20
  // |  \
  // -5  3

  contains(data) {
    if (data === this.data) {
      return this;
    }

    if (data < this.data) {
      if (this.left) {
        return this.left.contains(data);
      }
    } else {
      if (this.right) {
        return this.right.contains(data);
      }
    }

    return null;

    // let root = this; 

    // while (root) {
    //   if (data > root.data) {
    //     root = root.right;
    //   } else {
    //     root = root.left;
    //   }

    //   if (root && root.data === data) {
    //     return root;
    //   }
    // }

    // return null;
  }
}

module.exports = Node;
