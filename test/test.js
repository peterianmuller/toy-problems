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

describe('twoSum', ()=>{
  it('should be a function', ()=>{
    expect(twoSum).to.be.a('function');
  })
});

});

