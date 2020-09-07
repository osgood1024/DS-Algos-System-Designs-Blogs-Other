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


    // Insert index and value to a linkedlist

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


    // Remove index of a linkedlist
    remove(index){
        if(index<0 || index>this.length)return undefined;
        if(index===0) return this.shift();
        if(index===this.length-1)return this.pop();
        let previousNode= this.get(index-1);
        let removed=previousNode.next;
        previousNode.next=removed.next;
        this.length--;
        return removed
    }

    //Reverse Linkedlist

    reverse(){
        let node=this.head
        this.head=this.tail
        this.tail=node
        let next;
        let prev=null;

        for(let i =0;i<this.length;i++){
            
            next=node.next
            // this one line is critical one (coudl be confusing)
            node.next=prev
            //Here you just shifting prev and node to the next one
            prev=node;
            node=next;
        }

        return this;

    }


    print(){
        let arr=[]
        let curr=this.head
        while(curr){
            arr.push(curr.val)
            curr=curr.next
        }
        console.log(arr)
    }


}


let list = new SinglyLinkedList()


list.push(1)
list.push(10)
list.push(20)
list.push(24)
list.push(50)

// console.log(list)

// console.log(list.print())
// list.reverse()
// console.log(list.print())



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
// list.insert(3,"supgurl")
// list.remove(2)
// list.get()


// console.log(list.get(2))

// console.log(list.head)
// console.log(list.head.next)
// console.log(list.head.next.next)


// let first = new Node("Hi")
// first.next= new Node("there")
// first.next.next=new Node("how")
// console.log(first)



//we are going to use the class Node from the top 


//Implementing Stack in Linkedlist LIFO 
// (Last In First Out - Last one in from the front of the list is the first one to get out )
class Stack {
    constructor(){
        this.first=null;
        this.last=null;
        this.size=0;
    }
    //should act like .unshift() method in the array , but we call it push here.
    //since taking out the last node in the list take O(n), not O(1) linear time.
    //so to avoid this, we can add node to the beginning of the list instead from the back.
    push(val){
        let newNode=new Node(val);
        if(!this.first){
            this.first=newNode;
            this.last=newNode;
        }else{
            let temp=this.first;
            this.first=newNode;
            this.first.next=temp;

        }
        return ++this.size;
    }
    //Here is acting .shift() in the array - removing the first node in the list 
    pop(){
        if(!this.first) return null;
        let temp=this.first;
        if (this.first === this.last){
            this.last=null;
        }
        this.first=this.first.next;
        this.size --;
        return temp.val;
    }

}

let stack= new Stack()


stack.push(12)
stack.push(23)
stack.push(8)
stack.pop()
stack.pop()

// console.log(stack.pop())


//Implementing Queue FIFO 
//(First In First Out-The first one in is the first node on the list and first one to come out)
class Queue{
    constructor(){
        this.first=null;
        this.last=null;
        this.size=0 ;
    }
    //add to the end of the list (like .push() method in array)
    enqueue(val){
        let newNode= new Node(val);
        if(!this.first){
            this.first=newNode;
            this.last=newNode;
        }else{
            this.last.next=newNode;
            this.last=newNode;
        }

        return ++this.size;
    }

    //remove the first node in the list (like .shift() method in array -similar with stack pop method in linkedlist)
    dequeue(){
        if(!this.first) return null
        const temp=this.first;
        if(this.first===this.last){
            this.last=null;
        }

        this.first=this.first.next;
        
        this.size--;

        return temp.val

    }
}


let queue= new Queue()

queue.enqueue("FIRST")
queue.enqueue(12)
queue.enqueue("LAST")
queue.dequeue()
console.log(queue)



