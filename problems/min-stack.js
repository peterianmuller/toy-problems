// create a regular stack to keep track of the minimum value

var Stack = function(){
  this.storage = {};
  this.size = 0;
}

Stack.prototype.push = function(data){
  this.storage[this.size] = data;
  this.size++;
}

Stack.prototype.pop = function() {
  if (this.size){
    let mostRecentlyAdded = this.storage[this.size - 1];
    delete this.storage[this.size - 1];
    this.size--;
    return mostRecentlyAdded;
  }
  return null;
}

Stack.prototype.top = function() {
  if (this.size) {
    return this.storage[this.size - 1];
  }
}





var MinStack = function() {
  // create sotrage and size variables
  this.storage = {};      
  this.size = 0;   
    
  // can I do a min property?
  //this.min = Infinity;  
  
  // create a min stack  
  this.min = new Stack();  
};


// when we add items to MinStack we need to also add them to out min stack
MinStack.prototype.push = function(x) {
  this.storage[this.size] = x;
  this.size++;
  
  // check if current item is smaller than current min
  // at first min Stack won't have any items

  if (this.min.top() === undefined) {
    this.min.push(x);
  } else if (x <= this.min.top()) {
      this.min.push(x);
  }

    
};

MinStack.prototype.pop = function() {
  if (this.size) {  
    let mostRecentlyAdded = this.storage[this.size - 1];
    
    if (mostRecentlyAdded === this.min.top()) {
      this.min.pop();
    }

    delete this.storage[this.size - 1];
    
    this.size--;
    return mostRecentlyAdded  
  }
  return null; 
};


MinStack.prototype.top = function() {
  if (this.size) {
    return this.storage[this.size - 1];    
  }
  return null;
};


MinStack.prototype.getMin = function() {  
  return this.min.top();
};

