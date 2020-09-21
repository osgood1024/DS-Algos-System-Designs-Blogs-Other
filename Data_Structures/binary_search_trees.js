class Node{
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root=null
    }

     insert(value){
         let newNode=new Node(value); 
         if(this.root===null){
             this.root=newNode; 
             return this;
         }

         let current =this.root;
         while(true){
             if(value===current.value) return undefined;
             if(value < current.value){
                if(current.left===null){
                    current.left=newNode;
                    return this
                }
                current=current.left;
             }else{
                 if(current.right===null){
                     current.right= newNode;
                     return this;
                 }

                 current =current.right;
             }
         }

     }

     contains (value){
         if(this.root===null)return false;
         let current=this.root, found= false;
         while(current && !found){
             if(value<current.value){
                 current=current.left;
             }else if(value>current.value){
                 current=current.right;
             }else{
                 return true;
             }
         }
        return false 
       
     }

}

//Visually the tree will look something like this
//       10
//    5      13
//  2   7  11   16

let tree=new BinarySearchTree();
tree.insert(10)
tree.insert(5)
tree.insert(13)
tree.insert(7)
tree.insert(2)
tree.insert(11)
tree.insert(16)


console.log(tree.contains(2))