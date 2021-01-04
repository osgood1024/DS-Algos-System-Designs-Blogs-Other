/**
 *  #234 Palindrom Linked List 
 */

 /**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

 //O(N) Time complexity however not sure about O(1) Space Complexity 
var isPalindrome = function(head) {
    let arr = [];
    
    while(head !== null){
        arr.push(head.val);
        head = head.next;
    }
    
    const reversed = [...arr].reverse();
    
    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== reversed[i]){
            return false;
        }
    }
    
    return true;
};