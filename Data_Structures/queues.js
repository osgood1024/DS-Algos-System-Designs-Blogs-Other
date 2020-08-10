
//Implementing Queue in Array
class Queue{
    constructor(...items){
        this.queue=[]
        if(items.length>0){
            items.forEach(item => this.queue.push(item))
        }
        
    }

    //Add an item to the queue
    enqueue(item){
        this.queue.push(item)
    }

    //remove the first item from the queue
    dequeue(){
        if(this.isEmpty()) return "No item in queue"
        return this.queue.shift()
    }

    //check the first item of the queue
    peek(){
        if(this.isEmpty()) return "No item in queue"
        return this.queue[0]
    }

    //check the size of the queue
    size(){
        return this.queue.length
    }
    
    //check if queue is empty 
    isEmpty(){
        return this.queue.length===0
    }

}



let line=new Queue(1,2)
line.enqueue(24)
line.dequeue()
line.dequeue()
line.dequeue()
// line.size()


console.log(line.dequeue())
console.log(line.peek())
console.log(line.isEmpty())