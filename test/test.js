'use strict';

var chai = require('chai');
var expect = chai.expect;

var fibonacci = require('../problems/fibonacci');
var palindromePermutation = require('../problems/palindrome-permutation');
var palindrome = require('../problems/is-palindrome');
var bubbleSort = require('../problems/bubble-sort');
var wordPattern = require('../problems/word-pattern');
var balancedBrackets = require('../problems/balanced-brackets');
var fisherYates = require('../problems/fisher-yates');
var rotateArray = require('../problems/rotate-array');
var Tree = require('../problems/n-ary-tree');
var twoSum = require('../problems/two-sum.js');
var infiniteLinkedList = require('../problems/infinite-linked-list.js');
var longestPalindromeFuncs = require('../problems/longest-palindrome');
var maxStackFunctions = require('../problems/max-stack.js');
var minStackFunctions = require('../problems/min-stack.js');

describe('toy problems', ()=>{
  describe('fibonacci', ()=>{
    it('should be a function', ()=>{  
      expect(fibonacci).to.be.a('function');
    });
    it('should return 0 when passed 0', ()=>{
      expect(fibonacci(0)).to.equal(0);
    });
    it('should return 1 when passed 1 and 2', ()=>{
      expect(fibonacci(1)).to.equal(1); 
      expect(fibonacci(2)).to.equal(1); 
    });
    it('should return 2 when passed 3', ()=>{
      expect(fibonacci(3)).to.equal(2);
    });
    it('should return 3 when passed 4', ()=>{
      expect(fibonacci(4)).to.equal(3);
    });
    it('should return 5 when passed 5', ()=>{
      expect(fibonacci(5)).to.equal(5);
    });
    it('should return null when passed a non-number input', ()=>{
      expect(fibonacci([1,2,3])).to.eql(null);
    });
  });

  describe('palindrome permutation', ()=> {

    it('should be a function', ()=> {
      expect(palindromePermutation).to.be.a('function');
    });
    it('should return a Boolean', ()=> {
      expect(palindromePermutation('bigoldcat')).to.be.a('Boolean');
    });
    it('should false when argument is not a permutation of a string', ()=> {
      expect(palindromePermutation('bigoldcat')).to.be.false;
    });
    it('should true when argument is not a permutation of a string', ()=> {
      expect(palindromePermutation('kaak')).to.be.true;
    });
  });

  describe('palindrome', ()=> {

    it('should be a function', ()=> {
      expect(palindrome).to.be.a('function');
    });
    it('should return a Boolean', ()=> {
      expect(palindrome('bigoldcat')).to.be.a('Boolean');
    });
    it('should false when argument is not a permutation of a string', ()=> {
      expect(palindrome('bigoldcat')).to.be.false;
    });
    it('should true when argument is not a permutation of a string', ()=> {
      expect(palindrome('kayak')).to.be.true;
      expect(palindrome('taco cat')).to.be.true;
    });
    it('should true when argument is not a permutation of a string', ()=> {
      expect(palindrome('kaysasasaak')).to.be.false;
      expect(palindrome('straw warts')).to.be.true;
    });
  });

  describe('bubbleSort', ()=>{
    it('should be a function', ()=> {
      expect(bubbleSort).to.be.a('function');
    });
    it('should return an array', ()=>{
      expect(bubbleSort([])).to.eql([]); 
    });
    it('should return null when passed argument that is not an array', ()=>{
      expect(bubbleSort('not an array')).to.eql(null); 
    });
  });

  describe('wordPattern', ()=>{
    it('should be a function', ()=> {
      expect(bubbleSort).to.be.a('function');
    });
    it('should return false when the number of words doesn\'t match the number of pattern characters', ()=> {
      expect(wordPattern('cat dog', 'a')).to.be.false;
    });
    it('should return false when the words don\t match the pattern', ()=> {
      expect(wordPattern('cat dog', 'aa')).to.be.false;
    });
    it('should return true when the words match the pattern', ()=> {
      expect(wordPattern('horse horse', 'aa')).to.be.true;
    });
    it('should return false when the repeat words but don\'t match the pattern', ()=> {
      expect(wordPattern('horse horse', 'ba')).to.be.false;
    });

  });

  describe('balancedBrackets', ()=>{
    it('should be a function', ()=>{
      expect(balancedBrackets).to.be.a('function');
    });
    it('should return a Boolean', ()=>{
      expect(balancedBrackets()).to.be.a('Boolean');
    });
    it('should return true when there are balanced brackets', ()=>{
      expect(balancedBrackets('()[]{}')).to.be.true;
    });
    it('should return false when there are unbalanced brackets', ()=>{
      expect(balancedBrackets('((((')).to.be.false;
    });
  });

  describe('fisherYates', ()=>{
    it('should be a function', ()=>{
      expect(fisherYates).to.be.a('function');
    });
    it('should return an array', ()=>{
      expect(fisherYates([1])).to.eql([1]); 
    });
    it('should return a shuffled version of the original array', ()=>{
      expect(fisherYates([1,2,3,4,5,6,7])).to.not.eql([1,2,3,4,5,6,7]); 
    });
    it('should have the same elements as original input array', ()=>{
      let shuffled = fisherYates([1,2,3,4]);
      let duplicateFree = [];
      duplicateFree = shuffled.map(item => {
        return duplicateFree.indexOf(item) === -1; 
      });
      expect(shuffled.length).to.eql(duplicateFree.length);
    });
    it('should return null if no array is passed', ()=>{
      expect(fisherYates(undefined)).to.eql(null);
    });

  });

  describe('rotateArray', ()=>{
    it('should be a function', ()=>{
      expect(rotateArray).to.be.a('function');
    });
    it('should return an array', ()=>{
      expect(rotateArray([])).to.be.a('array');
    });
    it('should rotate a 2 x 2 matrix', ()=>{
      expect(rotateArray([[1,2], [3,4]])).to.be.a('array');
      expect(rotateArray([[1,2], [3,4]])).to.eql([[3,1], [4,2]]);
    });
    it('should contain a helper function switchCorners that switches corner elements', ()=>{
      expect(rotateArray([[1,2,3], [4,5,6], [7,8,9]])).to.be.a('array');
      expect(rotateArray([[1,2,3], [4,5,6], [7,8,9]])).to.eql([[7,4,1], [8,5,2], [9,6,3]]);
    });
  });

  describe('N-ary Tree', ()=>{
    it('should be a function', ()=>{
      expect(Tree).to.be.a('function');
    });
    it('should be able to add children', ()=>{
      let tree = new Tree(9);
      expect(tree.children.length).to.eql(0);
      tree.addChild(0);
      expect(tree.children.length).to.eql(1); 
    });
    it('should have a breath first search method', ()=>{
      let storage = [];
      let tree = new Tree(10);
      tree.addChild(0);
      tree.addChild(1);
      tree.children[0].addChild(5);

      expect(tree.BFS(function(node){
        storage.push(node.val);
      }));

      expect(storage).to.eql([10,0,1,5]);

      storage = [];

      tree.addChild(9);
      tree.children[1].addChild(9);

      expect(tree.BFS(function(node){
        storage.push(node.val);
      }));

      expect(storage).to.eql([10,0,1,9,5,9]);


    });

    it('BFS method should be able to invoke a callback function on each node in the list', ()=>{
      let tree = new Tree(0);
      tree.addChild(1);
      tree.addChild(2);
      tree.addChild(3);
      let sum = 0;
      tree.BFS(function(node){
        sum += node.val;  
      });
      expect(sum).to.eql(6);
    });

  })

describe('twoSumQuadratic', ()=>{
  let twoSumQuadratic = twoSum.twoSumQuadratic;
  it('should be a function', ()=>{
    expect(twoSumQuadratic).to.be.a('function');
  });
  it('should return null if there are no elements add up to match the target', ()=>{
    expect(twoSumQuadratic([1,2,3], -5)).to.eql(null);
  }); 
  it('should return an array of indexes of the elements that match the target', ()=>{
    expect(twoSumQuadratic([-1,-5,7,10], 5)).to.eql([1,3]);
  });
  it('should return the indexes of the first match found', ()=>{
    expect(twoSumQuadratic([1,2,1,2,1,2], 3)).to.eql([0,1]);
  });
});

describe('twoSumLinear', ()=>{
  console.log(twoSum);
  let twoSumLinear = twoSum.twoSumLinear;
  it('should be a function', ()=>{
    expect(twoSumLinear).to.be.a('function');
  });
  it('should return the indexes of the elements that when added up equal to the target', ()=>{
    expect(twoSumLinear([1,2,3], 3)).to.eql([0,1]);
  });

});

describe('infiniteLinkedList', ()=> {
  let Node = infiniteLinkedList.node;
  //console.log(infiniteLinkedList);
  let hasCycle = infiniteLinkedList.infiniteLinkedList;
  console.log('hasCycle is:', hasCycle);
  let peteNode = new Node(8);

  it('should have a class Node that insantiates a new node object', ()=>{
    expect(Node).to.be.a('function');
    expect(peteNode.value).to.eql(8); 
  });

  it('should have a function infiniteLinkedList', ()=>{
    peteNode.next = new Node(10);
    peteNode.next.next = new Node(11);
    expect(hasCycle(peteNode)).to.eql(false);
    peteNode.next.next.next = peteNode;  
  })
});

describe('MaxStack', () => {
  const Stack = maxStackFunctions.Stack;
  const MaxStack = maxStackFunctions.MaxStack;
  it('should have a Stack constructor', () => {
    expect(Stack).to.be.a('function');
  });
  it('should have a MaxStack constructor', () => {
    expect(MaxStack).to.be.a('function');
  });
  it('MaxStack should create a new instance of a MaxStack', () => {
    let peteMaxStack = new MaxStack();
    expect(peteMaxStack.storage).to.eql({}); 
    peteMaxStack.push(0);
    peteMaxStack.push(1);
    expect(peteMaxStack.size).to.eql(2);
    peteMaxStack.push(10);
    expect(peteMaxStack.getMax()).to.eql(10);
  });

})

describe('MinStack', () => {
  const Stack = minStackFunctions.Stack;

  it('should come with a regular Stack constructor that will be used as the min porperty of MinStack', () => {
    let peteStack = new Stack();
    expect(Stack).to.be.a('function');  
    expect(peteStack.size).to.eql(0);
    expect(peteStack.storage).to.eql({});
    peteStack.push(10);
    peteStack.push(20);
    expect(peteStack.size).to.eql(2);
    expect(peteStack.storage).to.eql({'0':10, '1':20});
  })
})

describe('longestPalindrome', () => {

  const reverseString = longestPalindromeFuncs.reverseString;
  const isPalindrome = longestPalindromeFuncs.isPalindrome;
  const longestPalindrome = longestPalindromeFuncs.longestPalindrome;

  it('should have reverseString helper function that returns a reversed string', () => {
    const backwards = 'cba'
    expect(reverseString).to.be.a('function');
    expect(reverseString('abc')).to.eql(backwards);
    expect(reverseString(4444)).to.eql(null);
  });
  it('should have isPalindrome helper function that returns Boolean if input is a palindrome' , () => {
    expect(isPalindrome({})).to.eql(null);
    expect(isPalindrome('racecar')).to.eql(true);  
    expect(isPalindrome('racedscar')).to.eql(false);  
  })
  it('should return the longest palindrome in the input string', () => {
    expect(longestPalindrome('saassasaa racecar a')).to.eql('a racecar a'); 
    expect(longestPalindrome('ddda racecar adddsaa53534435435ssasa')).to.eql('ddda racecar addd'); 
  });
})

});

