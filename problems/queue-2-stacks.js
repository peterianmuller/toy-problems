// Queue is a data structure that adds items and returns the oldestAdded item.
// We could use a stack to keep track of the oldest added item

// Stack class

class Stack {
	constructor(){
		this.size = 0;
		this.storage = {};
	}
	top(){
		return this.size ? this.storage[this.size - 1] : null;
	}
	push(x){
		this.storage[this.size] = x;
		this.size++;
	}
	pop(){
	  if (this.size){
	  	let mostRecentlyAdded = this.storage[this.size-1];
	  	delete this.storage[this.size-1];
	  	this.size--;
	  	return mostRecentlyAdded;
	  }	
	}
}

class QueueTwoStacks {
	constructor(){
		this.oldest = new Stack();
		this.newest = new Stack();
		this.size = 0;
	}
	dequeue(){

	  if(this.oldest.size){

      let oldestAdded = this.oldest.pop();

      // if nothing left in oldestAdded and items still in newestAdded
      if (!this.oldest.size && this.newest.size) {
      	// add all elements from this.newest to this.oldest
      	while(this.newest.size){
      		this.oldest.push(this.newest.pop());
      	}

      	// flip them back other than first element
      	// while(this.oldest.size > 0) {
      	// 	this.newest.push(this.oldest.pop());
      	// }
      }
	  	
	  	//what if nothing left in this.oldest and we want to add the
	  	return oldestAdded;
	  }	
		
	}
	enqueue(x) {
	  // if nothing in this.oldest push item to this.oldest;
	  if (!this.oldest.size) {
      this.oldest.push(x);
      this.size++;
	  } else {
	  // if something already in this.oldest push to this.newest; 	
	  	this.newest.push(x);
	  } 
	
	}
} 

module.export = {Stack:Stack, QueueTwoStacks: QueueTwoStacks};

