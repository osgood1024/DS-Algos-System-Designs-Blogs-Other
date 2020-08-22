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
    //Adding node to the tail
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
    //Remove last node from the tail
    pop(){
        if(!this.head)return undefined;
        let poppedNode=this.tail;
        if(this.length===1){
            this.head=null;
            this.tail=null;
        }else{
            this.tail=poppedNode.prev;
            this.tail.next=null;
            poppedNode.prev=null;
        }
        this.length--
        return poppedNode;
    }

    //Remove the first node from the head 
    shift(){
        if(this.length==0) return undefined;
        let oldHead=this.head;
        if(this.length===1){
            this.head=null;
            this.tail=null;
        }else{
            this.head=oldHead.next
            this.head.prev=null;
        }
        this.length--
        return oldHead
    }

    // Adding node to the first node 
    unshift(val){
        let newNode=new Node(val)
        if(this.length===0){
            this.head=newNode;
            this.tail=newNode;
        }else{
            this.head.prev=newNode;
            newNode.next=this.head;
            this.head=newNode;
        }
        this.length++
        return this;

    }

    //get the index or check the node with index

    get(index){
        if(index<0 || index>this.length-1) return null
        let curr, count;
        if(index<=this.length/2){
            count=0 ;
            curr=this.head;
            while(count!==index){
                curr=curr.next
                count++
            }
        }else{
            count=this.length-1 ;
            curr=this.tail ;
            while(count!==index){
                curr=curr.prev
                count--
            }
        }
        return curr;
    }

    //change index node to the value input
    set(index,val){
       let foundNode= this.get(index)
       if(foundNode!==null){
           foundNode.val=val;
           return true;
       }
       return false 
    }

    //insert(add) new node in the index 
    insert(index,val){
        if(index<0 ||index >this.length) return false;
        //the double bang means return true or false
        if(index===0) return !! this.unshift(val);
        if(index===this.length) return !! this.push(val);

        let newNode=new Node(val);
        let beforeNode=this.get(index-1);
        let afterNode=beforeNode.next;

        beforeNode.next=newNode, newNode.prev=beforeNode ;
        newNode.next=afterNode,afterNode.prev=newNode ;
        this.length++

        return true;;
    }


    //remove node in the index
    remove(index){
        if (index<0 || index>=this.length) return undefined;
        if(index===0) return this.shift()
        if (index===this.length-1)return this.pop();
        let removeNode= this.get(index);
        let beforeNode=removeNode.prev;
        let afterNode=removeNode.next;
        beforeNode.next=afterNode ;
        afterNode.prev=beforeNode ;
        removeNode.next=null;
        removeNode.prev=null;
        this.length--
        return removeNode;
    }
}


let list= new DoublyLinkedList()
list.push(100)
list.push(99)
list.push(90)
list.push(24)

// list.unshift('hello')
// list.shift()
// list.pop()
// list.push(10000)
// list.set(0,"GUCCI")
// list.insert(2,10)

list.remove(1)

// console.log(list)

