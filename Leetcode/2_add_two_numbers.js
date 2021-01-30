// 2. Add Two Numbers



/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    
    let headl1=l1
    let headl2=l2
    
    let newLink=new ListNode(0)
    
    let curr=newLink
  
    let carry=0
    
    
    while(headl1 || headl2){
        let x= (headl1!=null) ? headl1.val : 0
        let y= (headl2!=null) ? headl2.val : 0
        
        let sum =x+y+carry
        
        carry=Math.floor(sum/10)
    
        
        curr.next=new ListNode(sum%10)
        
        curr=curr.next
        
       if(headl1) headl1=headl1.next
        if(headl2) headl2=headl2.next
    }
    
        if(carry>0){
            curr.next= new ListNode(carry)
        }

    
    return newLink.next
    
};