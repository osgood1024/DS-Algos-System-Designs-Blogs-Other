class Node{
    constructor(val){
        this.val=val;
        this.next=null;
        this.prev=null;
    }
}


class DoublyLinkedList{
    constructor(){
        this.head=null;
        this.tail=null;
        this.length=0;
    }

    push(val){
        let newNode=new Node(val) ;

        if(this.length === 0){
            this.head=newNode  ;
            this.tail=newNode ;
        }else{
            this.tail.next=newNode ;
            newNode.prev=this.tail;
            this.tail=newNode

        }
        // console.log(newNode.prev)
        this.length++
        return this

    }
}


let list= new DoublyLinkedList()
list.push(100)
list.push(99)
list.push(90)
console.log(list)