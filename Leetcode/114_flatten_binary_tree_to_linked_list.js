/**
 * leetcode #114 Flatten Binary Tree To Linked List 
 * 
 * 
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    
    //dfs instead of array do it on linkedlist 
    let prev=null
    
    const traverse= (node) =>{
        
        if(node===null) return
        
        if(node.right)traverse(node.right)
        if(node.left)traverse(node.left)
        
        node.left=null 
        node.right=prev
        prev=node
        
    }
    
    traverse(root)

};


//There is bfs version in binarysearch.com (https://binarysearch.com/problems/Level-Order-Binary-Search-Tree-to-Linked-List)

/**
 *     
        let queue = [root]
        let list=new LLNode(0)
        // You will need to make a copy of list (result) and return result.next .
        // If you don't make a copy and return list it will return the last list of the value; since the while loop
        // went through all the list until the end.
        
       let result=list
       
       while (queue.length > 0) {

           let node=queue.shift()
           
           // data.push(node.val)
           list.next=new LLNode(node.val)
           list=list.next
           
           if(node.left)queue.push(node.left)
           if(node.right)queue.push(node.right)
       
       }
      
      return result.next
 * 
 * 
 */