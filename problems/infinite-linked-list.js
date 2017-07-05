'use strict'

class Node {
  constructor(val){
    this.value = val;
    this.next = null;
  }
}

const infiniteLinkedList = list => {

  // create two variables that make references to the original list
  let fast = list;
  let slow = list;

  //create a pause variable that will allow us to update the slow reference half the frequency that we update
  // the fast reference
  let pause = false;

  //recurse helper function that tells us if cycle exists
  const hasCycle = (fast,slow,pause) => {
    fast = fast.next;
    if (!fast) {
      return false;
    }
    if (fast === slow) {
      return true;
    }
    if (pause) {
      slow = slow.next;  
    }
    paul = !pause;
    return hasCycle(fast,slow,pause);
  }

  return hasCycle(fast,slow,pause);
}

module.exports.node = Node;
module.exports.infiniteLinkedList = infiniteLinkedList;