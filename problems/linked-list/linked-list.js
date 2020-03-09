class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    // create new node with val
    // if there is no head
    // set head and tail to new node
    // if head exists
    // set variable oldTail to this.tail
    // assign oldTail's next property to new node
    // reassign this.tail to newNode
    // increment length by one
    // return list
    let newTail = new Node(val);
    if (!this.tail) {
      this.head = newTail;
    } else {
      this.tail.next = newTail;
    }
    this.tail = newTail;
    this.length++;
    return this;
  }
}

module.exports = { Node: Node, SinglyLinkedList: SinglyLinkedList };
