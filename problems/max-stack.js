class Stack {
  constructor(){
    this.storage = []; 
    this.length = 0; 
  }
  peek(){
    const last = this.storage.length - 1;
    if (last === 0) return undefined;
    return this.storage[last];
  }
  push(val){
    this.storage.push(val);
    this.length++;
  }
  pop(val){
    if (!this.length) return null;
    const lastElement = this.storage.pop();
    this.length--;
    return lastElement;
  }
}

module.exports = {stack:Stack}