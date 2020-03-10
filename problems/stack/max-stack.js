"use strict";

class Stack {
  constructor() {
    this.size = 0;
    this.storage = {};
  }
  push(x) {
    this.storage[this.size] = x;
    this.size++;
  }
  pop() {
    if (this.size) {
      let mostRecentlyAdded = this.storage[this.size - 1];
      delete this.storage[this.size - 1];
      this.size--;
      return mostRecentlyAdded;
    }
    return null;
  }
  top() {
    if (this.size) {
      return this.storage[this.size - 1];
    }
    return null;
  }
}

class MaxStack {
  constructor() {
    this.size = 0;
    this.storage = {};
    this.max = new Stack();
  }
  push(x) {
    this.storage[this.size] = x;
    this.size++;
    if (this.max.top() === undefined) {
      this.max.push(x);
    } else {
      if (this.max.top() < x) {
        this.max.push(x);
      }
    }
  }
  pop() {
    if (this.size) {
      let mostRecentlyAdded = this.storage[this.size - 1];
      delete this.storage[this.size - 1];
      if (mostRecentlyAdded === this.max.top()) {
        this.max.pop();
      }
      return mostRecentlyAdded;
    }
  }
  getMax() {
    if (this.max.top()) {
      return this.max.top();
    }
  }
}

module.exports = { Stack: Stack, MaxStack: MaxStack };
