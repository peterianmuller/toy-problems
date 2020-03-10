class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    // create new node
    // if length is zero set head and tail to current node
    // otherwise set current tail's next property to new node
    // set new node's previous property to old tail
    // set tail to new node
    // increment length
    let newTail = new Node(val);
    if (this.length === 0) {
      this.head = newTail;
      this.tail = newTail;
    } else {
      this.tail.next = newTail;
      newTail.prev = this.tail;
      this.tail = newTail;
    }
    this.length++;
    return newTail;
  }
}

module.exports = {
  Node: Node,
  DoublyLinkedList: DoublyLinkedList
};
