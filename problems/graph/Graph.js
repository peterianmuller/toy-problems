class Graph {
  constructor() {
    this.storage = {};
  }

  addVertex(id) {
    // if id doesn't already exist add vertex
    if (!this.storage.hasOwnProperty(id)) this.storage[id] = [];
  }

  removeVertex(id) {
    // if id doesn't already exist add vertex
    // otherwise iterate over all vertices
    // remove any edge with id
    if (this.storage.hasOwnProperty(id)) {
      for (let vertex in this.storage) {
        let index = this.storage[vertex].indexOf(id);
        this.storage[vertex].splice(index, 1);
      }
      delete this.storage[id];
    }
  }

  addEdge(id1, id2) {
    // if id1 or id2 don't exist return false
    // add id2 to adjacency list of id1
    if (
      !this.storage.hasOwnProperty(id1) ||
      !this.storage.hasOwnProperty(id2)
    ) {
      return false;
    }
    this.storage[id1].push(id2);
  }

  removeEdge(id1, id2) {
    // if both ids exist
    // remove id2 from adjacency list for id1
    if (this.storage.hasOwnProperty(id1) && this.storage.hasOwnProperty(id2)) {
      this.storage[id1].splice(this.storage[id1].indexOf(id2), 1);
    }
  }

  isVertex(id) {
    return this.storage[id] ? true : false;
  }

  getNeighbors(id) {
    return this.storage[id] ? this.storage[id] : null;
  }

  bfs(start, arr = []) {
    // declare queue set to array
    // declare seen set to new set
    // add first elment to queue
    // while queue is not empty
    // dequeue element and add it to seen
    // iterate over neighbors
    // if neghbor exists in seen do nothing
    // otherwise add to seen and add to queue
    // run callback on dequeued element
    let queue = [];
    let seen = new Set();
    queue.push(start);
    while (queue.length) {
      let vertex = queue.shift();
      seen.add(vertex);
      console.log(vertex);
      console.log(this.getNeighbors(vertex));
      let neighbors = this.getNeighbors(vertex);
      console.log("should be array one element", neighbors);
      for (let i = 0; i < neighbors.length; i++) {
        let neighbor = neighbors[i];
        if (!seen.has(neighbor)) {
          queue.push(neighbor);
          seen.add(neighbor);
        }
      }
      arr.push(vertex);
    }
    return arr;
  }
}

module.exports = Graph;
