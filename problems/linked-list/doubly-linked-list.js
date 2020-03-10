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

  unshift(val) {
    // if length of list is 0 return push method with passed in val
    // create variable newHead pointing to a new node with val passed in
    // set the next prop on the newHead to the current head
    // set the prev pointer on current head to newHead
    // set head to newHead
    // increment length
    // return list
    if (!this.length) return this.push(val);
    let newHead = new Node(val);
    newHead.next = this.head;
    this.head.prev = newHead;
    this.head = newHead;
    this.length++;
    return this;
  }
  get(index) {
    // if index is less than 0 or is equal to or greater than this.length return false
    // set currentNode to head
    // iterate from 0 to index
    // reassign currentNode to currentNode.next
    // return currentNode
    if (index < 0 || index >= this.length) return false;
    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }
  set(index, val) {
    // if index is less than zero or equal to or greater than length return false
    // get node at index using get
    // assign val at that node to passed in val
    // return new node
    if (index < 0 || index >= this.length) return false;
    let nodeToUpdate = this.get(index);
    nodeToUpdate.val = val;
    return nodeToUpdate;
  }
  insert(index, val) {
    // if index is less than zero or equal to or greater than length return false
    // if index is 0 invoke unshift
    // if index is this.length invoke push
    // get node at index before using get
    // assign val at that node to passed in val
    // return new node
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return this.push(val);
    if (index === 0) return this.unshift(val);
    let nodeToInsert = new Node(val);
    let nodeBefore = this.get(index - 1);
    nodeBefore.next.prev = nodeToInsert;
    nodeBefore.next = nodeToInsert;
    this.length++;
    return this;
  }
}

module.exports = {
  Node: Node,
  DoublyLinkedList: DoublyLinkedList
};
