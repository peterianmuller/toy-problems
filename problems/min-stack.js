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
    return this.size ? this.storage[this.size-1] : null;
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

class MinStack {
  constructor(){
    this.size = 0;
    this.storage = {};
    this.min = new Stack();
  }
  push(x){
    this.storage[this.size] = x;
    this.size++;
    if (!this.min.size) {
      this.min.push(x);
    } else if (x < this.min.top()) {
      this.min.push(x);   
    }    
  }
  pop(){
    if (this.size) {
      let mostRecentlyAdded = this.storage[this.size - 1];
      delete this.storage[this.size - 1];
      this.size--;
      if (mostRecentlyAdded === this.min.top()) {
        this.min.pop();
      }
      return mostRecentlyAdded;
    }
  } 
}


module.exports = {Stack: Stack, MinStack: MinStack};