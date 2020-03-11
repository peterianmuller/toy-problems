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
    return this;
  }

  pop() {
    // if list is empty return false
    if (!this.length) return false;
    // if list has length of one reassign head and tail to null
    let oldTail = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      // save temporary variable to tail
      this.tail = this.tail.prev;
      this.tail.next = null;
      oldTail.prev = null;
    }
    // assign tail to current tail's previous property
    this.length--;
    // decement length by 1
    return oldTail;
  }

  shift() {
    // if this.length is 0 return false
    // if this.length is 1 reassign head and tail to null
    // set head.next prev's pointer to null
    // reassign head to head.next
    // decrement length by 1
    // remember to sever bonds of arhcaic nodes
    if (this.length === 0) return false;
    let oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
    }
    oldHead.next = null;
    this.length--;
    return oldHead;
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
    // check if index is closer to tail or head

    // iterate from 0 to index
    // reassign currentNode to currentNode.next
    // return currentNode
    if (index < 0 || index >= this.length) return false;
    if (index === 0) return this.head;
    if (index === this.length - 1) return this.tail;
    let start = index < this.length / 2 ? 0 : this.length - 1;
    let currentNode = start ? this.tail : this.head;

    if (start) {
      for (let i = start; i > index; i--) {
        currentNode = currentNode.prev;
      }
    } else {
      for (let i = start; i < index; i++) {
        currentNode = currentNode.next;
      }
    }

    return currentNode;
  }
  set(index, val) {
    // don't need to do checking for bad indexes here b/c we do that in get
    // get node at index using get
    // assign val at that node to passed in val
    // return new node
    let nodeToUpdate = this.get(index);
    if (nodeToUpdate) {
      nodeToUpdate.val = val;
      return true;
    }
    return false;
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
  remove(index) {
    // if index is less than 0 or equal to or greater than length return false
    // if index is 0 invoke shift
    // if index is last index invoke pop
    // save reference to nodeBefore's next as removedNode
    // get nodeBefore using get
    // set nodeBefore's next next to nodeBefore
    // return removedNode
    if (index < 0 || index >= this.length) return false;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    let nodeToDelete = this.get(index);
    nodeToDelete.next.prev = nodeToDelete.prev;
    nodeToDelete.prev.next = nodeToDelete.next;
    nodeToDelete.prev = null;
    nodeToDelete.next = null;
    this.length--;
    return nodeToDelete;
  }

  reverse() {
    // if length is 0 return undefined
    if (this.length === 0) return undefined;
    // set reference to oldHead
    let oldHead = this.head;
    // swap head and tail
    this.head = this.tail;
    // start at oldHead
    this.tail = oldHead;
    // set prev to null
    // declare next
    let prev = null;
    let next;
    // iterate from 0 to this.length - 1
    for (let i = 0; i < this.length; i++) {
      next = oldHead.next;
      oldHead.next = prev;
      oldHead.prev = next;
      prev = oldHead;
      oldHead = next;
    }
    // set next to oldHead.next
    // set next prop on oldHead to prev
    // set prev prop on holdHead to next
    // reassign prev to oldHead
    // reassign oldHead to next
    // decrement length
    // return this
    return this;
  }
}

module.exports = {
  Node: Node,
  DoublyLinkedList: DoublyLinkedList
};
