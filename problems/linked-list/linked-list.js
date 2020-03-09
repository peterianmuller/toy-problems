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

  pop() {
    // remove last item
    // if no tail then return false
    // if length is one reassign head and tail to null
    // otherwise iterate from first node to node before tail
    // set this.tail to penultamte node
    // set penultamte node/s next property to null
    // decrement length
    if (!this.tail) {
      return false;
    }
    let oldTail = this.tail;
    if (this.length === 1) {
      this.tail = null;
      this.head = null;
    } else {
      let currentNode = this.head;
      let nextNode = currentNode.next;
      while (nextNode) {
        currentNode = nextNode;
        nextNode = nextNode.next;
      }
      currentNode.next = null;
      this.tail = currentNode;
    }
    this.length--;
    return oldTail;
  }
}

module.exports = { Node: Node, SinglyLinkedList: SinglyLinkedList };
