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

  pop() {
    // if list is empty return false
    if (!this.length) return false;
    // if list has length of one reassign head and tail to null
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      // save temporary variable to tail
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    // assign tail to current tail's previous property
    this.length--;
    // decement length by 1
  }

  shift() {
    // if this.length is 0 return false
    // if this.length is 1 reassign head and tail to null
    // set head.next prev's pointer to null
    // reassign head to head.next
    // decrement length by 1
    if (this.length === 0) return false;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head.next.prev = null;
      this.head = this.head.next;
    }
    this.length--;
    return this;
  }
}

module.exports = {
  Node: Node,
  DoublyLinkedList: DoublyLinkedList
};
