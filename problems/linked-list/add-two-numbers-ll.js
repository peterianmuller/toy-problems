//https://leetcode.com/problems/add-two-numbers/description/

function ListNode(val) {
  this.val = val;
  this.next = null;
};


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

 // I: 2 LL
 // O: LL 

 // declare array where we will place values added up from lists
 // traverse each list
  // add up current values at each node and push sum to array
 // repeat until all nodes of longest list are exhuasted  
 // iterate over array and for each element create new node in list
 // return list

// addTwoNumbers([0], [7,3]) => [7, NaN]
var addTwoNumbers = function(l1, l2) {
    

}


// test case 1

var lpete = { val: 9, next: { val: 9, next: null } }; 

var lpete2 = { val: 9, next: null };

// test case 2

var l1 = { val: 0, next: null }

var l2 = { val: 7, next: 
         	{ val: 3, next: null } }

//console.log(addTwoNumbers(l1,l2));           
//console.log(addTwoNumbers(lpete,lpete2));           
console.log(addTwoNumbers(list1,list2));   // [0,0,0,1]         

