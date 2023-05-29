// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    const newNode = new Node(data);

    if (this.head) {
      const node = this.head;
      newNode.next = node;
    }
    this.head = newNode;
  }

  insertLast(data) {
    const newNode = new Node(data);
    const lastNode = this.getLast();
    
    if (lastNode) {
      lastNode.next = newNode;
    } else {
      this.head = newNode;
    }
  }

  insertAt(data, index) {
    const newNode = new Node(data);
    const size = this.size()

    if (index >= size) {
      index = size;
    }

    const prevNode = this.getAt(index - 1);
    const currentNode = this.getAt(index);

    if (prevNode) {
      prevNode.next = newNode;
    }

    newNode.next = currentNode;

    if (index === 0) {
      this.head = newNode;
    }
  }

  size() {
    let result = 0;
    let node = this.head;

    while (node) {
      result++;
      node = node.next;
    }

    return result;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let node = this.head;

    while (node && node.next) {
      node = node.next;
    }

    return node;
  }

  getAt(index) {
    let node;

    if (index >= 0 && index < this.size()) {
      node = this.head;

      for (let i = 1; i <= index; i++) {
        node = node.next;
      }
    } else {
      node = null;
    }

    return node;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (this.head) {
      const newHead = this.head.next;
      this.head = newHead;
    }
  }

  removeLast() {
    const size = this.size();

    if (size === 0) {
      return;
    } else if (size === 1) {
      this.clear();
    } else {
      let currentNode = this.head;
      let nextNode = currentNode.next;

      while (nextNode) {
        if (nextNode.next) {
          currentNode = nextNode;
          nextNode = nextNode.next;
        } else {
          break;
        }
      }

      currentNode.next = null;
    }
  }

  removeAt(index) {
    const prevNode = this.getAt(index - 1);
    const nextNode = this.getAt(index + 1);

    if (prevNode) {
      prevNode.next = nextNode;
    } else {
      this.head = nextNode;
    }
  }

  forEach(callback) {
    for (let index = 0; index < this.size(); index++) {
      let node = this.getAt(index);
      callback(node);
    }
  }

  [Symbol.iterator]() {
    let index = 0;
    const size = this.size();
    const self = this;

    return {
      next() {
        if (index < size) {
          return { value: self.getAt(index++), done: false };
        } else {
          return { done: true };
        }
      }
    };
  }
}

module.exports = { Node, LinkedList };
