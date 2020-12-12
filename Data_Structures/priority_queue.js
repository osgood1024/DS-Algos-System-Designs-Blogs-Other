
// Priority Queue is similar to Binary heap is just Priority queue is a concept is like any other implementation.


/**
 * 
 * A priority queue can have any implementation, like a array that you search linearly when you pop. 
 * All it means is that when you pop you get the value with either the minimum or the maximum depending. 
 * 
 * A classic heap as it is typically referred to is usually a min heap. 
 * An implementation that has good time complexity (O(log n) on push and pop) and no memory overhead.
 * Search time complexity- O(n) => not good for searching but is good optimal for insert and removal 
 */
class PriorityQueue{
    constructor(){
        this.values=[]
    }

    enqueue(val, priority){
        let newNode=new Node(val,priority)
        this.values.push(newNode)
        this.bubbleUp();
    }

    bubbleUp(){
        let idx=this.values.length-1;
        const element=this.values[idx];
        while(idx>0){
            let parentIdx=Math.floor((idx-1)/2)
            let parent=this.values[parentIdx];
            if(element.priority<=parent.priority)break;
            this.values[parentIdx]=element;
            this.values[idx]=parent
            idx= parentIdx
        }
    }

    dequeue(){
        const max=this.values[0]
        const end=this.values.pop();
        if(this.values.length > 0){
            this.values[0]=end;
            this.sinkDown()
        }
        return max
    }
    sinkDown(){
        let idx=0
        const length=this.values.length;
        const element=this.values[0]
        while(true){
            let leftChildIdx=2*idx+1;
            let rightChildIdx=2*idx+2;
            let leftChild,rightChild
            let swap=null

            if(leftChildIdx<length){
                leftChild=this.values[leftChildIdx]
                if(leftChild.priority>element.priority){
                    swap=leftChildIdx;
                }
            }

            if(rightChildIdx<length){
                rightChild=this.values[rightChildIdx]
                if( (swap === null && rightChild.priority>element.priority ) || (swap!==null && rightChild.priority>leftChild.priority) ){
                    swap=rightChildIdx
                }
            }


            if(swap===null) break;
            this.values[idx]=this.values[swap]
            this.values[swap]=element;
            idx=swap
        }

    }

}

class Node{
    constructor(val, priority){
        this.val=val;
        this.priority=priority
    }
}
const ER =new PriorityQueue();
ER.enqueue('common cold',1)
ER.enqueue('covid',9)
ER.enqueue('High fever',3)
// ER.dequeue()
// ER.dequeue()

console.log(ER)

//the min binary heap (the other way around) just change the comparison logic > to < and all of that.