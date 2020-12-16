// 1302 Deepest leaves sum


// There are so many ways to solve this question 


//dfs

const deepestLeavesSum=function(root){
    const arr=[]
    function dfs(root,depth){
        if(!root)return 
        arr[depth]=(arr[depth] || 0) +root.val

        dfs(root.left, depth+1)
        dfs(root.right,depth+1)
    }

    dfs(root,0)

    return arr[arr.length-1]
}