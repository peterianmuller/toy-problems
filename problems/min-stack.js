// min-stack should be a class that has the method getMin that returns the smallest 
// element in the stack

// we can use a regular stack as the minimum property for the MinStack class, which means we 
// have a record of all the smallest items in the main stack

class Stack {
  constructor(){
    this.size = 0;
    this.storage = {};
  }
  top(){
    return this.size ? this.storage[this.size] : null;
  }
  push(x) {
    this.storage[this.size] = x;
    this.size++;
  }
  pop(){
    if (this.size) {
      let mostRecentlyAdded = this.storage[this.size - 1];
      delete this.storage[this.size - 1];
      this.size--;
      return mostRecentlyAdded;  
    }
    return null;
  }
}


module.exports = {Stack: Stack}