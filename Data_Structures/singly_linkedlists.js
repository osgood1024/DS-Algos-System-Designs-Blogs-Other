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
}


let list = new SinglyLinkedList()
list.push("Hello")
list.push("World")
list.push("MR.OG")
console.log(list.head)
console.log(list.head.next)
console.log(list.head.next.next)


// let first = new Node("Hi")
// first.next= new Node("there")
// first.next.next=new Node("how")
// console.log(first)
