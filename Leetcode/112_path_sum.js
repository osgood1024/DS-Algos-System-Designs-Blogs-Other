// #112 Path Sum

//this is how you traverse tree and add the total
const hasPathSum= function (root, sum){
    function dfs(root,sum, total){
        if(!root){
            return false
        }

        total+=root.val

        if(root.left===null && root.right===null){
            if(sum===total)return true 
        }

        return dfs(root.left, sum, total) || dfs(root.right, sum, total)
    }

    return dfs(root, sum, 0)
}

//There is another way of doing it more efficient (this should be the fastest)

const hasPathSum = function (root, sum){
    if(!root) return false 

    if(root.left===null && root.right===null){
        if(root.val===sum)return true
    }
    sum-=root.val

    return hasPathSum(root.left, sum) || hasPathSum(root.right, sum)
}

//Another way as well very similar to the top one
const hasPathSum = function (root, sum){
    if(!root) return false 
    sum-=root.val
    if(root.left===null && root.right===null){
        if(sum===0)return true
    }

    return hasPathSum(root.left, sum) || hasPathSum(root.right, sum)
}


// This is a different question but what if you want to sum all the values in the tree 
// (https://binarysearch.com/problems/Tree-sum)

const treeSum= function(root){

    function traverse(node,total){
        if(!node){
            return total
        }
        total+=node.val
        const leftSum = traverse(root.left,total)
        return traverse(root.right,leftSum)

    }

    return traverse(root,0)
}

