class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(val) {
    // create newLast
    // if size is 0 assign first and last to newLast
    // otherwise save temporary variable to currentLast
    // reassign currentLast's next property to newLast
    // reassign tail proerty of queue to newLast
    // return size incremented

    let newLast = new Node(val);
    if (!this.size) {
      this.first = newLast;
      this.last = newLast;
    } else {
      let oldLast = this.last;
      oldLast.next = newLast;
      this.last = newLast;
    }

    return ++this.size;
  }
  dequeue() {
    // if queue is empty return false
    // save oldFirst to variable
    // set first property of queue to oldFirst's next property
    // set next property of oldFirst to null
    // if length is 1 reassign last property of queue to null
    // return size decremented
    if (!this.size) return false;
    let oldFirst = this.first;
    this.first = oldFirst.next;
    oldFirst.next = null;
    if (this.first === null) this.last = null;
    return --this.size;
  }
}

module.exports = { Node: Node, Queue: Queue };
