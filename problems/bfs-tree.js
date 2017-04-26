var Tree = function(val){
  this.val = val;
  this.children = [];
}

Tree.prototype.addChild = function(val) {
  var node = new Tree(val);
  this.children.push(node);
}

Tree.prototype.BFS = function(cb) {

  // create queue
  var queue = [];

  //add first node to queue
  queue.push(this);
  

  while (queue.length > 0) {
    // shift off element from queue
    var current = queue.shift();
    cb(current);
    queue = queue.concat(current.children);
  }
};  

module.exports = Tree;
