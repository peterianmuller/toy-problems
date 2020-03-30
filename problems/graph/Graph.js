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
}

module.exports = Graph;
