var chai = require('chai');
var expect = chai.expect;

var fibonacci = require('../problems/fibonacci');
var palindromePermutation = require('../problems/palindrome-permutation');
var palindrome = require('../problems/is-palindrome');
var bubbleSort = require('../problems/bubble-sort');
var wordPattern = require('../problems/word-pattern');

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
      expect(wordPattern('cat cat', 'aa')).to.be.true;
    });


  });

});

