class Node{
    constructor(val){
        this.val=val;
        this.left=null;
        this.right=null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root=null;
    }
    insert(val){
        let newNode=new Node(val); 
        if(this.root===null){
            this.root=newNode; 
            return this;
        }

        let current =this.root;
        while(true){
            if(val===current.val) return undefined;
            if(val < current.val){
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
    BFS(){
        let data=[], 
            queue=[], 
            node=this.root //node can be undefined intially 
            queue.push(node);

        while(queue.length){
            node=queue.shift()
            data.push(node.val);
            if(node.left)queue.push(node.left);
            if (node.right)queue.push(node.right);
        }
        return data
        /**
         * 
         * Once understanding the BFS concept try to solve this problem: 
         * https://binarysearch.com/problems/Level-Order-Traversal
         * 
         */
    }

    //recursively => traverse on the left first and the right 
    DFSPreorder(){
        let data=[];
        
        function traverse(node){
            data.push(node.val)
            if(node.left)traverse(node.left);
            if(node.right)traverse(node.right);
        }
        traverse(this.root);
        return data 
    }

    DFSPostorder(){
        let data=[]
        function traverse(node){
            if(node.left)traverse(node.left);
            if(node.right)traverse(node.right);
            data.push(node.val)
        }
        traverse(this.root);
        return data
    }

    DFSInorder(){
        let data=[]
        function traverse(node){
            if(node.left)traverse(node.left);
            data.push(node.val)
            if(node.right)traverse(node.right);
        }
        traverse(this.root)
        return data
    }

}


const tree= new BinarySearchTree()

tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3)
tree.insert(8)
tree.insert(20)

//tree.BFS()
//tree.DFSPreorder()
//tree.DFSPostorder()

console.log(tree.DFSInorder())


