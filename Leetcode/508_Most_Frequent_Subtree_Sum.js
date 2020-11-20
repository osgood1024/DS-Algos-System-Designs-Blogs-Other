// Leetcode #508 Most Frequent Subtree Sum


// this question is good indication of how well you know tree data strucure with hash table together


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

const findFrequentTreeSum = function(root) {
    if(!root)return[]
    let map={}
    const dfs=(root)=>{
        if(root){
            const left=dfs(root.left);
            const right=dfs(root.right);
            const sum=root.val+left+right
            map[sum]=map[sum]+1 ||1 
            return sum
        }
        
        return 0
    }
    dfs(root)
    let final=[]
    let min=Number.MIN_VALUE
    
    for(let i in map){
        if(map[i]>min){
            min=map[i]
            final=[i]
        }
        else if(map[i]===min){
            final.push(i)
        }
    }
    
    return final
    
};