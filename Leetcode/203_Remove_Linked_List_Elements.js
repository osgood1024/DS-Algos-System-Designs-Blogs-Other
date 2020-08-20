
// # 203. Remove Linked List Elements

var removeElements = function(head, val) {
    
    let prev=null
    
    let curr=head
    
    while(curr!==null){
       if(curr.val===val){
             if(prev===null){
                head=curr.next
            }else{
                prev.next=curr.next
            }
           
       }else{
           prev=curr
       } 
        
      curr=curr.next
    }
    return head
    
};


/*
Another way to solve the problem 

var removeElements = function(head, val) {
    
    
    let curr=head

    if(head === null){
        return null ;
    }
    
    while(curr.next!==null){
       if(curr.next.val===val){
            curr.next=curr.next.next
       }else{
            curr=curr.next
        }
    }


    if(head.val===val){
        head=head.next
    }
    return head
    
};


*/