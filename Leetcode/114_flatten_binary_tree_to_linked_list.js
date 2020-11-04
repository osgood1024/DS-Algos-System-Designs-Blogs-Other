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