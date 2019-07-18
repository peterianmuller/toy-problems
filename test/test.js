// 'use strict';

let chai = require('chai');
let expect = chai.expect;

let fibonacci = require('../problems/recursion/fibonacci');
let palindromePermutation = require('../problems/string/palindrome-permutation');
let palindrome = require('../problems/string/is-palindrome');
let bubbleSort = require('../problems/sorting/bubble-sort');
let wordPattern = require('../problems/string/word-pattern');
let balancedBrackets = require('../problems/string/balanced-brackets');
let fisherYates = require('../problems/algorithms/fisher-yates');
let rotateArray = require('../problems/array/rotate-array');
let twoSum = require('../problems/algorithms/two-sum');
let infiniteLinkedList = require('../problems/linked-list/infinite-linked-list');
let longestPalindromeFuncs = require('../problems/string/longest-palindrome');
let maxStackFunctions = require('../problems/stack/max-stack');
let minStackFunctions = require('../problems/stack/min-stack');
let QueueTwoStacksFunctions = require('../problems/stack/queue-2-stacks');
let SetOfStacksFunctions = require('../problems/stack/set-of-stacks');
let reachCoords = require('../problems/algorithms/reach-coordinates');
let areThereDuplicateArgs = require('../problems/algorithms/duplicate-args');
let reverseInteger = require('../problems/integer/reverse-integer');
let sameDigits = require('../problems/integer/same-digits');
let subset = require('../problems/array/subset');
let permutations = require('../problems/string/permutations');
let longestSubstringWithoutRepeatingCharacters = require('../problems/string/longest-substring-wo-repeat-chars');
let makeArrayConsecutive = require('../problems/array/make-array-consecutive');
let almostIncreasingSequence = require('../problems/array/almost-increasing-sequence');
let matrixElementSum = require('../problems/array/matrix-elements-sum');
let commonCharCount = require('../problems/string/common-char-count');
let sortKMessedArray = require('../problems/array/sort-kmessed-arr');
let toOneDimensionalArray = require('../problems/array/to-one-dimentional-arr');
let possibleWinners = require('../problems/logic-word-problems/possible-winners-world-cup');
let alternatingSums = require('../problems/array/alternating-sums');
let isIPv4Address = require('../problems/string/is-IPv4-address');
let avoidObstacles = require('../problems/array/avoid-obstacles');
let maxSubarraySum = require('../problems/array/max-subarray-sum');
let isIsogram = require('../problems/string/isogram');
let getShortestUniqueSubstring = require('../problems/array/get-shortest-unique-substring');
let compareArrayOfNumsAndArrayOfSquares = require('../problems/array/compare-array-of-nums-and-array-of-squares.js');
let minSubArrLength = require('../problems/array/min-subarray-length.js');
describe('toy problems', () => {
  describe('fibonacci', () => {
    it('should be a function', () => {
      expect(fibonacci).to.be.a('function');
    });
    it('should return 0 when passed 0', () => {
      expect(fibonacci(0)).to.equal(0);
    });
    it('should return 1 when passed 1 and 2', () => {
      expect(fibonacci(1)).to.equal(1);
      expect(fibonacci(2)).to.equal(1);
    });
    it('should return 2 when passed 3', () => {
      expect(fibonacci(3)).to.equal(2);
    });
    it('should return 3 when passed 4', () => {
      expect(fibonacci(4)).to.equal(3);
    });
    it('should return 5 when passed 5', () => {
      expect(fibonacci(5)).to.equal(5);
    });
    it('should return null when passed a non-number input', () => {
      expect(fibonacci([1, 2, 3])).to.eql(null);
    });
  });

  describe('palindrome permutation', () => {
    it('should be a function', () => {
      expect(palindromePermutation).to.be.a('function');
    });
    it('should return a Boolean', () => {
      expect(palindromePermutation('bigoldcat')).to.be.a('Boolean');
    });
    it('should false when argument is not a permutation of a string', () => {
      expect(palindromePermutation('bigoldcat')).to.be.false;
    });
    it('should true when argument is not a permutation of a string', () => {
      expect(palindromePermutation('kaak')).to.be.true;
    });
  });

  describe('palindrome', () => {
    it('should be a function', () => {
      expect(palindrome).to.be.a('function');
    });
    it('should return a Boolean', () => {
      expect(palindrome('bigoldcat')).to.be.a('Boolean');
    });
    it('should false when argument is not a permutation of a string', () => {
      expect(palindrome('bigoldcat')).to.be.false;
    });
    it('should true when argument is not a permutation of a string', () => {
      expect(palindrome('kayak')).to.be.true;
      expect(palindrome('taco cat')).to.be.true;
    });
    it('should true when argument is not a permutation of a string', () => {
      expect(palindrome('kaysasasaak')).to.be.false;
      expect(palindrome('straw warts')).to.be.true;
    });
  });

  describe('bubbleSort', () => {
    it('should be a function', () => {
      expect(bubbleSort).to.be.a('function');
    });
    it('should return an array', () => {
      expect(bubbleSort([])).to.eql([]);
    });
    it('should return null when passed argument that is not an array', () => {
      expect(bubbleSort('not an array')).to.eql(null);
    });
  });

  describe('wordPattern', () => {
    it('should be a function', () => {
      expect(bubbleSort).to.be.a('function');
    });
    it("should return false when the number of words doesn't match the number of pattern characters", () => {
      expect(wordPattern('cat dog', 'a')).to.be.false;
    });
    it('should return false when the words don\t match the pattern', () => {
      expect(wordPattern('cat dog', 'aa')).to.be.false;
    });
    it('should return true when the words match the pattern', () => {
      expect(wordPattern('horse horse', 'aa')).to.be.true;
    });
    it("should return false when the repeat words but don't match the pattern", () => {
      expect(wordPattern('horse horse', 'ba')).to.be.false;
    });
  });

  describe('balancedBrackets', () => {
    it('should be a function', () => {
      expect(balancedBrackets).to.be.a('function');
    });
    it('should return a Boolean', () => {
      expect(balancedBrackets()).to.be.a('Boolean');
    });
    it('should return true when there are balanced brackets', () => {
      expect(balancedBrackets('()[]{}')).to.be.true;
    });
    it('should return false when there are unbalanced brackets', () => {
      expect(balancedBrackets('((((')).to.be.false;
    });
  });

  describe('fisherYates', () => {
    it('should be a function', () => {
      expect(fisherYates).to.be.a('function');
    });
    it('should return an array', () => {
      expect(fisherYates([1])).to.eql([1]);
    });
    it('should return a shuffled version of the original array', () => {
      expect(fisherYates([1, 2, 3, 4, 5, 6, 7])).to.not.eql([1, 2, 3, 4, 5, 6, 7]);
    });
    it('should have the same elements as original input array', () => {
      let shuffled = fisherYates([1, 2, 3, 4]);
      let duplicateFree = [];
      duplicateFree = shuffled.map(item => {
        return duplicateFree.indexOf(item) === -1;
      });
      expect(shuffled.length).to.eql(duplicateFree.length);
    });
    it('should return null if no array is passed', () => {
      expect(fisherYates(undefined)).to.eql(null);
    });
  });

  describe('rotateArray', () => {
    it('should be a function', () => {
      expect(rotateArray).to.be.a('function');
    });
    it('should return an array', () => {
      expect(rotateArray([])).to.be.a('array');
    });
    it('should rotate a 2 x 2 matrix', () => {
      expect(rotateArray([[1, 2], [3, 4]])).to.be.a('array');
      expect(rotateArray([[1, 2], [3, 4]])).to.eql([[3, 1], [4, 2]]);
    });
    it('should contain a helper function switchCorners that switches corner elements', () => {
      expect(rotateArray([[1, 2, 3], [4, 5, 6], [7, 8, 9]])).to.be.a('array');
      expect(rotateArray([[1, 2, 3], [4, 5, 6], [7, 8, 9]])).to.eql([[7, 4, 1], [8, 5, 2], [9, 6, 3]]);
    });
  });

  describe('twoSumQuadratic', () => {
    let twoSumQuadratic = twoSum.twoSumQuadratic;
    it('should be a function', () => {
      expect(twoSumQuadratic).to.be.a('function');
    });
    it('should return null if there are no elements add up to match the target', () => {
      expect(twoSumQuadratic([1, 2, 3], -5)).to.eql(null);
    });
    it('should return an array of indexes of the elements that match the target', () => {
      expect(twoSumQuadratic([-1, -5, 7, 10], 5)).to.eql([1, 3]);
    });
    it('should return the indexes of the first match found', () => {
      expect(twoSumQuadratic([1, 2, 1, 2, 1, 2], 3)).to.eql([0, 1]);
    });
  });

  describe('twoSumLinear', () => {
    let twoSumLinear = twoSum.twoSumLinear;
    it('should be a function', () => {
      expect(twoSumLinear).to.be.a('function');
    });
    it('should return the indexes of the elements that when added up equal to the target', () => {
      expect(twoSumLinear([1, 2, 3], 3)).to.eql([0, 1]);
    });
  });

  describe('infiniteLinkedList', () => {
    let Node = infiniteLinkedList.node;
    let hasCycle = infiniteLinkedList.infiniteLinkedList;
    let peteNode = new Node(8);

    it('should have a class Node that insantiates a new node object', () => {
      expect(Node).to.be.a('function');
      expect(peteNode.value).to.eql(8);
    });

    it('should have a function infiniteLinkedList', () => {
      peteNode.next = new Node(10);
      peteNode.next.next = new Node(11);
      expect(hasCycle(peteNode)).to.eql(false);
      peteNode.next.next.next = peteNode;
    });
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
  });

  describe('MinStack', () => {
    const Stack = minStackFunctions.Stack;
    const MinStack = minStackFunctions.MinStack;
    it('should come with a regular Stack constructor that will be used as the min porperty of MinStack', () => {
      let peteStack = new Stack();
      expect(Stack).to.be.a('function');
      expect(peteStack.size).to.eql(0);
      expect(peteStack.storage).to.eql({});
      peteStack.push(10);
      peteStack.push(20);
      expect(peteStack.size).to.eql(2);
      expect(peteStack.storage).to.eql({ '0': 10, '1': 20 });
      expect(peteStack.pop()).to.eql(20);
      expect(peteStack.top()).eql(10);
      expect(peteStack.pop()).eql(10);
      expect(peteStack.pop()).to.eql(null);
    });

    it('should come with a MinStack constructor that contains the same methods/functions as a Stack constructor, but also has a min property and a getMin method', () => {
      let peteMinStack = new MinStack();
      expect(peteMinStack.size).to.eql(0);
      expect(peteMinStack.storage).eql({});
      expect(peteMinStack.min.storage).to.eql({});
      expect(peteMinStack.min.size).to.eql(0);
    });

    it("MinStack should come with a pop method that add an item to it's storage property and also add an item to the min property if the current item is less than the current top item in the stack referenced by the min property", () => {
      let peteMinStack = new MinStack();
      peteMinStack.push(0);
      expect(peteMinStack.min.top()).to.eql(0);
      peteMinStack.push(1);
      peteMinStack.push(-1);
      peteMinStack.push(-1);
      expect(peteMinStack.min.top()).to.eql(-1);
      peteMinStack.pop();
      expect(peteMinStack.min.top()).to.eql(-1);
    });
  });

  describe('longestPalindrome', () => {
    const expand = longestPalindromeFuncs.expand;
    const longestPalindrome = longestPalindromeFuncs.longestPalindrome;

    it('should have expand helper function that returns a reversed string', () => {
      expect(expand).to.be.a('function');
    });

    it('should return the longest palindrome in the input string', () => {
      expect(longestPalindrome('saassasaa racecar a')).to.eql('a racecar a');
      expect(longestPalindrome('ddda racecar adddsaa53534435435ssasa')).to.eql('ddda racecar addd');
      expect(longestPalindrome('cbbd')).to.eql('bb');
    });
  });

  describe('QueueTwoStacks', () => {
    let Stack = QueueTwoStacksFunctions.Stack;
    let Queue = QueueTwoStacksFunctions.QueueTwoStacks;
    it('should have a Stack class that has push, pop, and top methods', () => {
      let peteStack = new Stack();
      expect(peteStack.size).to.eql(0);
      expect(peteStack.storage).to.eql({});
      peteStack.push(0);
      peteStack.push(1);
      expect(peteStack.size).to.eql(2);
      expect(peteStack.storage).to.eql({ '0': 0, '1': 1 });
      expect(peteStack.top()).to.eql(1);
    });
    it('should have a Queue class that has a size, oldestItems, and newestItems properties', () => {
      let peteQueue = new Queue();
      expect(peteQueue.size).to.eql(0);
      expect(peteQueue.oldestItems).to.eql(new Stack());
      expect(peteQueue.newestItems).to.eql(new Stack());
    });
    it('should have a enqueue method that adds the first item to this.oldestItems and then subsequent items to this.newestItems', () => {
      let peteQueue = new Queue();
      peteQueue.enqueue(0);
      expect(peteQueue.oldestItems.top()).to.eql(0);
      peteQueue.enqueue(1);
      expect(peteQueue.oldestItems.top()).to.eql(0);
      expect(peteQueue.newestItems.top()).to.eql(1);
    });
    it('should have a dequeue method that grabs the oldest item and returns it', () => {
      let peteQueue = new Queue();
      peteQueue.enqueue(0);
      peteQueue.enqueue(1);
      expect(peteQueue.dequeue()).to.eql(0);
      expect(peteQueue.oldestItems.top()).to.eql(1);
      peteQueue.enqueue(2);
      peteQueue.enqueue(3);
      expect(peteQueue.oldestItems.top()).to.eql(1);
      expect(peteQueue.newestItems.top()).to.eql(3);
      expect(peteQueue.dequeue()).to.eql(1);
      expect(peteQueue.newestItems.top()).to.eql(null);
      expect(peteQueue.dequeue()).to.eql(2);
    });
  });
  describe('SetOfStacks', () => {
    let Stack = SetOfStacksFunctions.Stack;
    let SetOfStacks = SetOfStacksFunctions.SetOfStacks;
    it('should have access to a Stack class', () => {
      let peteStack = new Stack();
      peteStack.push(10);
      peteStack.push(11);
      expect(peteStack.top()).to.eql(11);
      expect(peteStack.size).to.eql(2);
    });
    it('should have a SetOfStacks constructor that has storageArray, limit, and currentStackIndex properties', () => {
      let PeteSetOfStacks = new SetOfStacks(5);
      expect(PeteSetOfStacks.storageArray).to.eql([]);
      expect(PeteSetOfStacks.limit).to.eql(5);
      expect(PeteSetOfStacks.currentStackIndex).to.eql(0);
    });
    it('should have a push method that pushes data to stacks located at indexes in the storageArray property', () => {
      let PeteSetOfStacks = new SetOfStacks(5);
      PeteSetOfStacks.push(0);
      expect(PeteSetOfStacks.storageArray.length).to.eql(1);

      //access currentStackIndex
      let currentStackIndex = PeteSetOfStacks.currentStackIndex;
    });
    it('push method should create a new Stack when the current stack in the storageArray has a size property equal to the limit', () => {
      let PeteSetOfStacks = new SetOfStacks(5);

      PeteSetOfStacks.push(0);
      PeteSetOfStacks.push(1);
      PeteSetOfStacks.push(2);
      PeteSetOfStacks.push(3);
      PeteSetOfStacks.push(4);

      expect(PeteSetOfStacks.currentStackIndex).to.eql(0);
      expect(PeteSetOfStacks.storageArray[PeteSetOfStacks.currentStackIndex].storage[4]).to.eql(4);

      PeteSetOfStacks.push(5);

      expect(PeteSetOfStacks.currentStackIndex).to.eql(1);
      expect(PeteSetOfStacks.storageArray[PeteSetOfStacks.currentStackIndex].top()).to.eql(5);

      PeteSetOfStacks.push(6);
      PeteSetOfStacks.push(7);
      PeteSetOfStacks.push(8);
      PeteSetOfStacks.push(9);
      PeteSetOfStacks.push(10);

      expect(PeteSetOfStacks.currentStackIndex).to.eql(2);
      expect(PeteSetOfStacks.storageArray[PeteSetOfStacks.currentStackIndex].top()).to.eql(10);
    });
    it('should have a pop method that returns the most recently added item. When the current stack is empty after removing item, it should delete the stack', () => {
      let PeteSetOfStacks = new SetOfStacks(5);
      expect(PeteSetOfStacks.pop()).to.eql(null);
      PeteSetOfStacks.push(0);
      PeteSetOfStacks.push(1);
      PeteSetOfStacks.push(2);
      PeteSetOfStacks.push(3);
      PeteSetOfStacks.push(4);
      PeteSetOfStacks.push(5);
      expect(PeteSetOfStacks.storageArray[PeteSetOfStacks.currentStackIndex].top()).to.eql(5);
      expect(PeteSetOfStacks.storageArray.length).to.eql(2);
      expect(PeteSetOfStacks.storageArray[PeteSetOfStacks.currentStackIndex].size).to.eql(1);
      expect(PeteSetOfStacks.pop()).to.eql(5);
      expect(PeteSetOfStacks.currentStackIndex).to.eql(0);
      expect(PeteSetOfStacks.storageArray[PeteSetOfStacks.currentStackIndex].top()).to.eql(4);
    });
    it('should have a popAt method that runs the pop method at a certain stack', () => {
      let PeteSetOfStacks = new SetOfStacks(5);
      PeteSetOfStacks.push(0);
      PeteSetOfStacks.push(1);
      PeteSetOfStacks.push(2);
      PeteSetOfStacks.push(3);
      PeteSetOfStacks.push(4);
      PeteSetOfStacks.push(5);
      expect(PeteSetOfStacks.popAt(0)).to.eql(4);
      expect(PeteSetOfStacks.storageArray[PeteSetOfStacks.currentStackIndex].top()).to.eql(5);
      expect(PeteSetOfStacks.storageArray[PeteSetOfStacks.currentStackIndex - 1].top()).to.eql(3);
    });
  });

  describe('reachCoords', () => {
    it('should be a function', () => {
      expect(reachCoords).to.be.a('function');
    });
    it('should return false if current coordinates are greater than target coordinates', () => {
      expect(reachCoords(10, 10, 1, 1)).to.eql(false);
    });
    it('should return true if current coordinates are the same as target coordinates', () => {
      expect(reachCoords(1, 1, 1, 1)).to.eql(true);
    });
    it('should return false if recurse case leads to current coordinates that are beyond the taret coordinates', () => {
      expect(reachCoords(1, 2, 5, 6)).to.eql(false);
      expect(reachCoords(3, 1, 7, 4)).to.eql(true);
    });
  });

  describe('reverseInteger', () => {
    it('should be a function', () => {
      expect(reverseInteger).to.be.a('function');
    });
    it('should return null when a non-number is passed in', () => {
      expect(reverseInteger()).to.eql(null);
    });
    it('should return reverse a positive integer', () => {
      expect(reverseInteger(321)).to.eql(123);
    });
    it('should return reverse a negative integer', () => {
      expect(reverseInteger(-321)).to.eql(-123);
    });
    it('should return 0 for numbers that are outside of 32-bit range', () => {
      expect(reverseInteger(61923326162378867)).to.eql(0);
    });
  });

  describe('sameDigits', () => {
    it('should be a function', () => {
      expect(sameDigits).to.be.a('function');
    });
    it('should return a boolean', () => {
      expect(sameDigits()).to.be.a('boolean');
    });
    it('should return false if second integer contains digits not found first integer ', () => {
      expect(sameDigits(321, 3214)).to.eql(false);
    });
    it('should return false if second integer contains the ame digits but a dfferent frequency from the first integer', () => {
      expect(sameDigits(321, 3221)).to.eql(false);
    });
  });

  describe('subset', () => {
    it('should be a function', () => {
      expect(subset).to.be.a('function');
    });
    it('should a boolean', () => {
      expect(subset()).to.be.a('boolean');
    });
    it("should return true if subArr's elements are found within mainArr", () => {
      expect(subset([1, 2, 3], [1])).to.eql(true);
    });
    it('should return false when all the elements in the subarray are not in the main array', () => {
      expect(subset([1, 2, 3], [1, 5])).to.eql(false);
    });
    it('should return null when the 2nd argument is longer than he first argument', () => {
      expect(subset([1, 2, 3], [1, 5, 6, 7, 8, 9, 0])).to.eql(null);
    });
  });

  describe('longestSubstringWithoutRepeatingCharacters', () => {
    it('should be a function', () => {
      expect(longestSubstringWithoutRepeatingCharacters).to.be.a('function');
    });

    it('should return the length of the longest substring without repeat characters', () => {
      expect(longestSubstringWithoutRepeatingCharacters('abc')).to.eql(3);
    });

    it('should return the length of the longest substring without repeat characters', () => {
      expect(longestSubstringWithoutRepeatingCharacters('b')).to.eql(1);
    });

    it('should handle edge cases of empty string and non-string args', () => {
      expect(longestSubstringWithoutRepeatingCharacters('')).to.eql(0);
      expect(longestSubstringWithoutRepeatingCharacters()).to.eql(null);
    });
  });
  describe('makeArraySequential', () => {
    it('should be a function', () => {
      expect(makeArrayConsecutive).to.be.a('function');
    });
    it('should indicate how many elements we need to add to make an array consecutive from the minimum element to the maximum element, increasing by 1', () => {
      expect(makeArrayConsecutive([6, 2, 3, 8])).to.eql(3);
    });
    it('should work on arrays of length 1', () => {
      expect(makeArrayConsecutive([8])).to.eql(7);
      expect(makeArrayConsecutive([0])).to.eql(0);
    });
  });
  describe('almostIncreasingSequence', () => {
    it('should be a function', () => {
      expect(almostIncreasingSequence).to.be.a('function');
    });
    it('should return false if we need to remove more than one element to make an increasing sequence', () => {
      expect(almostIncreasingSequence([1, 3, 2, 1])).to.eql(false);
      expect(almostIncreasingSequence([1, 3, 1])).to.eql(true);
      expect(almostIncreasingSequence([1, 3, 1, 3])).to.eql(false);
    });
  });
  describe('matrixElementSum', () => {
    it('should be a function', () => {
      expect(matrixElementSum).to.be.a('function');
    });
    it('should correctly handle non-2d array inputs', () => {
      expect(matrixElementSum('ssdadsa')).to.eql('please enter a valid 2d-array');
    });
    it('should return 0 is there are no available rooms in the building', () => {
      expect(matrixElementSum([[0, 0, 0, 0], [0, 5, 0, 0], [2, 0, 3, 3]])).to.eql(0);
    });
    it('should return the correct number of the prices of empty rooms in the building', () => {
      expect(matrixElementSum([[0, 1, 1, 2], [0, 5, 0, 0], [2, 0, 3, 3]])).to.eql(9);
    });
  });
  describe('commonCharCount', () => {
    it('should be a function', () => {
      expect(commonCharCount).to.be.a('function');
    });
    it('should list how many common characters are shared between the two strings', () => {
      expect(commonCharCount('abc', 'a')).to.eql(1);
    });
    it('should list how many common characters are shared between the two strings', () => {
      expect(commonCharCount('abaac', 'a')).to.eql(1);
    });
  });
  describe('sortKMessedArray', () => {
    it('should be a function', () => {
      expect(sortKMessedArray).to.be.a('function');
    });
    it('should sort the array into ascending order', () => {
      expect(sortKMessedArray([1, 0, 3, 2], 1)).to.eql([0, 1, 2, 3]);
    });
  });
  describe('toOneDimensionalArray', () => {
    it('should be a function', () => {
      expect(toOneDimensionalArray).to.be.a('function');
    });
    it('should not modify input array', () => {
      let input = [[1, 2]];
      toOneDimensionalArray([[1, 2]]);
      expect(input).to.eql([[1, 2]]);
    });
    it('should copy the top row of the matrix from left to right first', () => {
      let matrix = [[4, 2], [5, 7]];
      expect(toOneDimensionalArray(matrix).slice(0, 2)).to.eql([4, 2]);
      let matrix2 = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20]];
      expect(toOneDimensionalArray(matrix2).slice(0, 8)).to.eql([1, 2, 3, 4, 5, 10, 15, 20]);
    });
    it('should copy the right col from top to bottom next', () => {
      let matrix = [[4, 2], [5, 7]];
      expect(toOneDimensionalArray(matrix).slice(1, 3)).to.eql([2, 7]);
      let matrix2 = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20]];
      expect(toOneDimensionalArray(matrix2).slice(4, 8)).to.eql([5, 10, 15, 20]);
    });
    it('should copy the bottom row from left to right next', () => {
      let matrix = [[4, 2], [5, 7]];
      expect(toOneDimensionalArray(matrix).slice(2)).to.eql([7, 5]);
      let matrix2 = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20]];
      expect(toOneDimensionalArray(matrix2).slice(7, 12)).to.eql([20, 19, 18, 17, 16]);
    });
    it('should copy the bottom row from left to right next', () => {
      let matrix = [[4, 2], [5, 7]];
      expect(toOneDimensionalArray(matrix).slice(2)).to.eql([7, 5]);
      let matrix2 = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20]];
      expect(toOneDimensionalArray(matrix2).slice(11, 14)).to.eql([16, 11, 6]);
    });
    it('should return a 1-dimensional copy of the array ith items in the order of: top row, right column, bottom row, left column', () => {
      let matrix = [[4, 2], [5, 7]];
      expect(toOneDimensionalArray(matrix)).to.eql([4, 2, 7, 5]);
      let matrix2 = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20]];
      expect(toOneDimensionalArray(matrix2)).to.eql([
        1,
        2,
        3,
        4,
        5,
        10,
        15,
        20,
        19,
        18,
        17,
        16,
        11,
        6,
        7,
        8,
        9,
        14,
        13,
        12
      ]);
    });
  });
  describe('possibleWinners', () => {
    // b, c, e, f
    it('should be a function', () => {
      expect(possibleWinners).to.be.a('function');
    });
    it('should return an array', () => {
      expect(possibleWinners(1, 3, 4, 5)).to.be.an('array');
    });
    it('should return [] if one of the semifinal games ends in a tie', () => {
      expect(possibleWinners(1, 3, 3, 4)).to.eql([]);
    });
    it('should return [] if the semifinal winners have 0 goals left over', () => {
      expect(possibleWinners(1, 3, 2, 2)).to.eql([]);
    });
    it('should return both teams that make it to finals if both semifinal winners have at least one goal in the finals', () => {
      expect(possibleWinners(2, 2, 4, 0)).to.eql(['Belgium', 'England']);
    });
    it('should return the team with available goals if the other team has no available goals in the finals', () => {
      expect(possibleWinners(1, 1, 10, 2)).to.eql(['England']);
      expect(possibleWinners(4, 2, 1, 1)).to.eql(['Belgium']);
    });
  });
  describe('alternatingSums', () => {
    it('should be a function', () => {
      expect(alternatingSums).to.be.a('function');
    });
    it('should return an array', () => {
      expect(alternatingSums([1, 2, 3])).to.be.an('array');
    });
    it('should return an array of the correct weights for each category', () => {
      expect(alternatingSums([50, 60, 60, 45, 70])).to.eql([180, 105]);
    });
  });
  describe('isIPv4Address', () => {
    it('should be a function', () => {
      expect(isIPv4Address).to.be.a('function');
    });
    it('should return a boolean', () => {
      expect(isIPv4Address('172.16.254.1')).to.be.a('Boolean');
    });
    it('should check whether a valid IPv4 address has ben passed in', () => {
      expect(isIPv4Address('172.16.254.1')).to.eql(true);
      expect(isIPv4Address('1732.16.254.1')).to.eql(false);
    });
  });
  describe('avoidObstacles', () => {
    it('should be a function', () => {
      expect(avoidObstacles).to.be.a('function');
    });
    it("shouldn't mutate the input array", () => {
      let input = [0, 1, 2, 3];
      avoidObstacles(input);
      expect(input).to.eql([0, 1, 2, 3]);
    });
    it("shouldn't mutate the input array", () => {
      let input = [0, 1, 2, 3];
      avoidObstacles(input);
      expect(input).to.eql([0, 1, 2, 3]);
    });
  });
  describe('isogram', () => {
    it('should be a function', () => {
      expect(isogram).to.be.a('function');
    });
    it('should return true for an empty string', () => {
      expect(isogram('')).to.eql(true);
    });
    it('should return true for a string that has only unique characters, regardless of case', () => {
      expect(isogram('asfghjk')).to.eql(true);
      expect(isogram('asfGhjK')).to.eql(true);
      expect(isogram('asfGhjKk')).to.eql(false);
      expect(isogram('aA')).to.eql(false);
    });
  });
  describe('getShortestUniqueSubstring', () => {
    it('should be a function', () => {
      expect(getShortestUniqueSubstring).to.be.a('function');
    });
  });
  describe('maxSubarraySum', () => {
    it('should be a function', () => {
      expect(maxSubarraySum).to.be.a('function');
    });
    it('should return null if length of array is less than range argument', () => {
      expect(maxSubarraySum([1], 5)).to.eql(null);
    });
    it('should return a number is the expected arguments aare passed in', () => {
      expect(maxSubarraySum([1], 1)).to.be.a('number');
    });
    it('should return a number is the expected arguments aare passed in', () => {
      expect(maxSubarraySum([6, 2, 3, 4, 5, 6], 3)).to.eql(15);
    });
  });
  describe('minSubArrLength', () => {
    it('should be a function', () => {
      expect(minSubArrLength).to.be.a('function');
    });
    it('should return 1 or 0 for one element arrays', () => {
      expect(minSubArrLength([1], 1)).to.eql(1);
    });
    it('should return the length of shortest subarray whose elements provide a sum equal to or are greater than the target', () => {
      expect(minSubArrLength([2, 3, 5], 4)).to.eql(1);
      expect(minSubArrLength([2, 2, 4, 3], 7)).to.eql(2);
      expect(minSubArrLength([2, 1, 6, 5, 4], 9)).to.eql(2);
      expect(minSubArrLength([1, 4, 16, 22, 5], 39)).to.eql(3);
    });
  });
  describe('areThereDuplicateArgs', () => {
    it('should be a function', () => {
      expect(areThereDuplicateArgs).to.be.a('function');
    });
    it('should return true if there are duplictaes arguments passed', () => {
      expect(areThereDuplicateArgs(1, 1)).to.eql(true);
    });
  });
  describe('compareArrayOfNumsAndArrayOfSquares', () => {
    it('should be a function', () => {
      expect(compareArrayOfNumsAndArrayOfSquares).to.be.a('function');
    });
    it('should return true if second array has elements of first array squares', () => {
      expect(compareArrayOfNumsAndArrayOfSquares([1, 2], [4, 1])).to.eql(true);
    });
    it("should return false if second array doesn't have elements of first array squares", () => {
      expect(compareArrayOfNumsAndArrayOfSquares([1, 2], [6, 1])).to.eql(false);
    });
    it('should return false if arrays are of unequal length', () => {
      expect(compareArrayOfNumsAndArrayOfSquares([1, 2, 5], [6, 1])).to.eql(false);
    });
  });
});
