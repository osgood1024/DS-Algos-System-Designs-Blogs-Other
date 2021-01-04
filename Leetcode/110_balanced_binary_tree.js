// #110 Balanced Binary Tree

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    
    function dfs(root){
        if(!root)return 0
        
        let left=dfs(root.left)
        let right=dfs(root.right)

        if(Math.abs(left-right)>1 || right===-1 || left===-1){
           return -1
        }
        
        return Math.max(left,right)+1
        
    }
    return dfs(root)!==-1
    
};


