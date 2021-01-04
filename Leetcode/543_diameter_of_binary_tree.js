
//  #543 Diameter Of Binary Tree
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
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    
    let ans = 0;
   if (!root){
        return 0
    }

    
    const helper=function (root){
        
        if (!root){
            return 0
        }
        let l = helper(root.left)
        let r = helper(root.right)
        ans = Math.max(ans, l + r)
        return 1 + Math.max(l,r)
        
    }
    
    helper(root);
    return ans;
    
};