// #617 Merge Two Binary Trees


// There are couple ways of solving this problem 
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */


//  DFS PreOrder
var mergeTrees = function(t1, t2) {
    function dfs(node1,node2){
        if(!node1 && !node2)return null
        if(!node1)return node2
        if(!node2)return node1

        const newNode=new TreeNode(node1+node2)
        newNode.left=dfs(node1.left, node2.left)
        newNode.right=dfs(node1.right,node2.right)

        return newNode

    }

    return dfs(t1,t2)

    
};

// Another Way 
// DFS preOrder

var mergeTrees=function(t1,t2){
    
    if(!t1)return t2

    if(!t2)return t1
    
    t1.val+=t2.val
    
    t1.left=mergeTrees(t1.left,t2.left)
    t1.right=mergeTrees(t1.right,t2.right)
    
    return t1
    
}
