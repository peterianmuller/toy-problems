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

  neighbors(id) {
    return this.storage[id] ? this.storage[id] : null;
  }
}

module.exports = Graph;
