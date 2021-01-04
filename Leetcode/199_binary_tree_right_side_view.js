// #199 Binary tree right side view 



const rightSideView=function (root){
    let max_level=0
    let array=[]

    function dfs(root,level){
        if(!root)return
        if(max_level<level){
            max_level=level
            array.push(root.val)
        }

        dfs(root.right, level+1)    
        dfs(root.left, level+1)

    }

    dfs(root,1)

    return array
}


/*
For the left side view, check this one (https://binarysearch.com/problems/Left-Side-View-of-a-Tree)
*/

// Is essentially the same as right side just switch the left and right order 
const leftSideView=function (root){
    let max_level=0
    let array=[]

    function dfs(root,level){
        if(!root)return
        if(max_level<level){
            max_level=level
            array.push(root.val)
        }

        dfs(root.left, level+1)
        dfs(root.right, level+1)    

    }

    dfs(root,1)

    return array
}