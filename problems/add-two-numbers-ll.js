//https://leetcode.com/problems/add-two-numbers/description/


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


var addTwoNumbers = function(l1, l2) {
  console.log(l1,l2);  
  var sums = [], counter = 0;;
  // iterate over LL
  while (l1) {
      console.log(l1.val);
      sums.push(l1.val)
      l1 = l1.next;
  }
    
  while (l2) {
      
    if (sums[counter] + l2.val >= 10) {
     // find out how many times 10 goes into current sum
     // add that number to the next place
     console.log('should be 0', (sums[counter] + l2.val) % 10)
     sums[counter] = (sums[counter] + l2.val) % 10;   
     var sum = sums[counter] + l2.val;
     //sum  = sum.toString()   
     //sums[counter + 1] += Number(l2.val.toString().split().slice(l2.val.toString().split().length - 1, 1));   
        
    } else {
    sums[counter] += l2.val;  
    } 
      
    l2 = l2.next;
    counter++;
  }
  
  return sums;
     
    
};