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

module.exports = {Stack:Stack};        
