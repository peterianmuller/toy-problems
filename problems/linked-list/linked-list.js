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
      while (nextNode.next) {
        currentNode = nextNode;
        nextNode = nextNode.next;
      }
      currentNode.next = null;
      this.tail = currentNode;
    }
    this.length--;
    return oldTail;
  }

  shift() {
    // if there is no length return false
    // if the length is 1 replace head and tail with null
    // otherwise set this.head to this.head.next
    // decrement length
    if (!this.length) return false;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }
    this.length--;
    return this;
  }

  unshift(val) {
    // create new node
    // if length is zero run push
    // create variable pointing to oldHead
    // set head property to new node
    // set new node's next property to old head
    // increment length
    // return this
    if (!this.length) return this.push(val);
    let newHead = new Node(val);
    let oldHead = this.head;
    newHead.next = oldHead;
    this.head = newHead;
    this.length--;
    return this;
  }
  get(index) {
    // if index is equal to or greater than length return false
    // set currentNode to head
    // while counter doesn't equal index set currentNode to currentNode.next
    // return currentNode
    if (index < 0 || index >= this.length) return false;
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current;
  }
  insert(index, val) {
    // if index is less than zero or greater than length return false
    // create new node with val
    // use get to retrieve nodeBefore
    // save temp reference to nodeBefore's next node
    // set nodeBefore's next to new node
    // set new node's next property to reference nodeBefore's next node
    // increment length
    // return new node
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return this.push(val);
    if (index === 0) return this.unshift(val);
    let nodeToInsert = new Node(val);
    let nodeBefore = this.get(index - 1);
    let tempNext = nodeBefore.next;
    nodeBefore.next = nodeToInsert;
    nodeToInsert.next = tempNext;
    this.length++;
    return nodeToInsert;
  }

  remove(index) {
    // if index is less than 0 or equal to or greater than length return false
    // if index is 0 return shift
    // if index is length - 1 return pop
    // use get to get node before index
    // save reference to deletedNode to return
    // set nodeBefore's next property to be nodeBefore.next.next
    // return deletedNode
    if (index < 0 || index >= this.length) return false;
    if (index === 0) return this.shift();
    if (index === this.length - 1) {
      return this.pop();
    }
  }

  set(index, val) {
    // if index is less than zero or greater than or equal to legnth return false
    // use get to get nodeAtIndex
    // set val property of nodeAtIndex to passed in val
    // return nodeAtIndex
    if (index < 0 || index >= this.length) return false;
    let nodeToUpdate = this.get(index);
    nodeToUpdate.val = val;
    return nodeToUpdate;
  }
  reverse() {
    // if list has no nodes return list
    // swap head and tail
    // declare prev set to null
    // declare next
    // iterate from 0 up until this.length
    // assign node.next to prev
    // assign next to node.next
    // assign prev to node
    if (!this.length) return this;
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let prev = null;
    let next;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}

module.exports = { Node: Node, SinglyLinkedList: SinglyLinkedList };
