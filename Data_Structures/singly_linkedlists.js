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

    //remove  a node from the front of the linkedlist 
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

    //unshift() add new node to the front of the linked list
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

    //Get the index of the linkedlist  
    get(index){
        if(index<0 || index >=this.length) return null
        let count=0;
        let current=this.head
        while(count!==index){
            current=current.next
            count++
        }

        return current

    }

//Set the index value to whatever the user is input
    set(index,val){
        let foundNode=this.get(index);
        if(foundNode){
            foundNode.val=val
            return true
        }
        return false 

    }


    // Insert

    insert(index,val){
        if(index<0 ||index>this.length) return false ;
        if(index=== this.length) return !!this.push(val);
        if (index===0) return !!this.unshift(val);

        let newNode=new Node(val);
        let prev=this.get(index-1)
        let temp=prev.next ;
        prev.next=newNode;
        newNode.next=temp;
        this.length++
        return true;

        
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
// list.shift()
// list.shift()
// list.shift()
// list.shift()
// list.unshift("welcome!!")
// list.set(2,"Money")
console.log(list.insert(3,"supgurl"))


console.log(list)

// console.log(list.head)
// console.log(list.head.next)
// console.log(list.head.next.next)


// let first = new Node("Hi")
// first.next= new Node("there")
// first.next.next=new Node("how")
// console.log(first)
