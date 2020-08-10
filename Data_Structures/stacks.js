
//Implementing Stack in Array 
class Stack{
    constructor(...items){
        this.stack=[]
        if(items.length>0){
            items.forEach(item => this.stack.push(item))
        }

    }

    //add an item to the stack
    push(item){
        this.stack.push(item)
    }

    //remove the top item which is the last item from stack
    pop(){
        if(this.isEmpty()) return "No item in stack!"
       return this.stack.pop()
    }

    //check the last item of the array 
    peek(){
        if(this.isEmpty()) return "No item in stack!"
        return this.stack[this.stack.length-1]
    }


   //check the size of the stack 
    size(){
       return this.stack.length
    } 


    //check if stack is empty
    isEmpty(){
        return this.stack.length===0
    }


}


let book=new Stack(2,10)

book.push(8)
book.pop()
book.pop()
book.pop()
book.peek()
console.log(book.pop())
console.log(book,book.isEmpty())
console.log(book.peek())
console.log(book.size())



