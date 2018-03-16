// SetOfStacks is a constructor that has a storage property that will add a new stack 
// when current stack exceeds a certain capacity (arbitrary)
// SetOfStacks should have SetOfStacks.push and SetOfStacks.pop as methods

// create stack class

class Stack {
	constructor(){
		this.size = 0;
		this.storage = {};
	}
	push(x){
		this.storage[this.size] = x;
		this.size++;
	}
	pop(x){
		if (this.size){
			let mostRecentlyAdded = this.storage[this.size-1];
			delete this.storage[this.size-1];
			this.size--;
			return mostRecentlyAdded;
		}
		return null;
	}
	top() {
		return this.size ? this.storage[this.size -1] : null;
	}
}

class SetOfStacks {
  constructor(limit){
  	this.limit = limit;
  	this.storageArray = [];
  	this.currentStackIndex = 0;
  }
  push(x){
  	// if first item ever
    if (!this.storageArray[this.currentStackIndex]) {
    	this.storageArray[this.currentStackIndex] = new Stack();
    	this.storageArray[this.currentStackIndex].push(x);
    } else {
    // if already one item
      // check size of stack
      // if current stack has less items than limit add it to current stack
      if (this.storageArray[this.currentStackIndex].size < this.limit) {
        this.storageArray[this.currentStackIndex].push(x);
      } else {
        // increment currentStackIndex by 1
        // create new stack and insert it to this.storageArray at this index
        // push item into stack
        this.currentStackIndex++;
        this.storageArray[this.currentStackIndex] = new Stack();
        this.storageArray[this.currentStackIndex].push(x);
      }  
    }
  }
  getCurrentStackIndex(){
    return this.currentStackIndex;
  }
  pop(){
    // check if storageArray has length
    if (!this.storageArray.length) {
      return null;
    } else {
      // grab most recently added item
      let currentStorageArrayIndex = this.currentStackIndex;
      let currentStack = this.storageArray[currentStorageArrayIndex];
      let mostRecentlyAdded = currentStack.pop();
      
      // check if current stack is empty
        // if so remove it
      if (!currentStack.size) {
        this.storageArray.pop();
        if (this.currentStackIndex) {
          this.currentStackIndex--;
        }
      }  

      return mostRecentlyAdded; 
    }

  }
  popAt(stackNumber){
    
    // TODO - figure out how to use pop method defined on method
    
    if (this.storageArray[stackNumber]) {
      let targetStack = this.storageArray[stackNumber]
      return targetStack.pop();    
    }
    return null;
  }

}

// SetOfStacks
  // constructor should take in a limit parameter
  // this.size initialized to 0
  // this.storage is an array
  // this.currentStackIndex = 0;

  // push method
    // check if current stack index's storage is at limit
      // if so initialize new stack at arrayindex + 1
      // insert item there

  // pop
    // check if stack at current index in array has elements.
      // if so use pop method on that stack.
      // check if stack at currentStackIndex is empty.
        // if so use pop off stack from array

module.exports = {Stack:Stack, SetOfStacks: SetOfStacks};        
