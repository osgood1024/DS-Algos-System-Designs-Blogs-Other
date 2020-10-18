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
 * @return {TreeNode}
 */


var invertTree = function(root) {
    
    if (!root) return null;
    
    let right=null;
    
    let left=null;
    
    
    right=invertTree(root.right);

    left=invertTree(root.left)
    
    root.right=left;
    
    root.left=right;
    
    return root
    

};