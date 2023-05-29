// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
  constructor() {
    this.content = [];
  }

  add(element) {
    for (let i = this.content.length; i > 0; i--) {
      this.content[i] = this.content[i - 1];
    }

    this.content[0] = element;
  }

  remove() {
    let element = this.content[this.content.length - 1];
    
    if (this.content.length > 0) {
      this.content.length = this.content.length - 1;
    }

    return element;
  }
}

module.exports = Queue;
