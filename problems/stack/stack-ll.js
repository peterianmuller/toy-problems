class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    // create newFirst
    // if list is empty set first and last to newHead
    // otherwise create reference to currentFirst
    // set newFirst's next property to currentFirst
    // return incremented size
    let newFirst = new Node(val);
    if (!this.size) {
      this.first = newFirst;
      this.last = newFirst;
    } else {
      let currentFirst = this.first;
      newFirst.next = currentFirst;
      this.first = newFirst;
    }
    return ++this.size;
  }

  pop() {
    // if list is empty return false
    // save reference to oldFirst
    // reassign first prop of list to next property of oldFirst
    // remove next propery from oldFirst
    // if size is one reassign last property of list to null
    // return size decremented
    if (!this.size) return false;
    let oldFirst = this.first;
    this.first = oldFirst.next;
    oldFirst.next = null;
    if (this.first === null) this.last = null;
    return --this.size;
  }
}

module.exports = { Node: Node, Stack: Stack };
