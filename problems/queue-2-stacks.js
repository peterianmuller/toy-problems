// make a queue out of two stacks
  // create a Stack class to use in the Queue
  // QueueTwoStacks class have a oldestAdded proprty that points to a new stack
  // QueueTwoStacks has a newestAdded property that point to another stack.

class Stack {
  constructor(){
  	this.size = 0;
  	this.storage = {};
  }
  push(x) {
  	this.storage[this.size] = x;
  	this.size++;
  }
  pop(x){
  	// if there are items already
  	if (this.size){
      let mostRecentlyAdded = this.storage[this.size -1];
      delete this.storage[this.size -1];
      this.size--;
      return mostRecentlyAdded;
  	} 
  	return null;
  }	
  top(){
  	if (this.size){
  		return this.storage[this.size-1];
  	}
  	return null;
  }
}

class QueueTwoStacks {
  constructor(){
    this.size = 0;
    this.oldestItems = new Stack();
    this.newestItems = new Stack();
  }
  enqueue(x){
  // what happens when we add a new item?
    // if nothing in oldestItems push item there
    if (!this.oldestItems) {
      this.oldestItems.push(x);
    } else {
      // otherwise add to newestItems
      this.newestItems.push(x);
    }  
  }

}   





module.exports = {Stack:Stack, QueueTwoStacks: QueueTwoStacks};

