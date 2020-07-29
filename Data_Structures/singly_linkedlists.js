class Node{
    constructor(val){
        this.val=val;
        this.next=null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head=null;
        this.tail=null;
        this.length=0
    }
    
    // Implementing push in singly linkedlist (add value to the next tail )
    push(val){
        const newNode= new Node(val)
        if(!this.head){
            this.head=newNode
            this.tail=this.head
        
        }else{
            this.tail.next=newNode;
            this.tail=newNode;
        }
        this.length++ ;
        return this
    }

    // Implementing pop (remove value from the the tail  )
    pop(){
        if(!this.head) return undefined;
        let current= this.head;
        let newTail= current;
        while(current.next){
            newTail=current;
            current=current.next;
        }
        this.tail=newTail;
        this.tail.next=null
        this.length--;
        //Here you want to make sure that head and tail are null if the length is zero or not there are always head and tail 
        if(this.length===0){
            this.head= null;
            this.tail= null
        }
        return current

    }

    shift(){
        if (!this.head)return undefined
        let currentHead=this.head;
        this.head= currentHead.next;
        this.length--;
        if(this.length===0){
            this.tail=null
        }
        return currentHead

    }

    unshift(val){
       
        const newNode= new Node(val)
        if(!this.head){
            this.head=newNode
            this.tail=this.head ;
        }
        else{
            newNode.next=this.head ;
            this.head= newNode ;

        }
        this.length ++;
        return this ;
        

    }



}


let list = new SinglyLinkedList()
list.push("Hello")
list.push("World")
list.push("MR.OG")
// list.pop()
// list.pop()
// list.pop()
// list.pop()
// list.push("WHADUP")
list.shift()
list.shift()
// list.shift()
// list.shift()
list.unshift("welcome!!")
console.log(list)

// console.log(list.head)
// console.log(list.head.next)
// console.log(list.head.next.next)


// let first = new Node("Hi")
// first.next= new Node("there")
// first.next.next=new Node("how")
// console.log(first)
