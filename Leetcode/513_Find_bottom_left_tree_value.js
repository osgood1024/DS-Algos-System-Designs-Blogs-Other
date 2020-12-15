/**
 * Leetcode #513 Find Bottom Left Tree Value
 * 
 * this one is similar with leetcode #199, but instead of pre-order we do in post-order traversal 
 */



 const findBottomLeftValue=function(root){

    let max_level=0
    let ans

    function dfs_post_order(root,level){
        
        if(!root)return

        dfs_post_order(root.left,level+1)
        dfs_post_order(root.right,level+1)

        if(max_level<level){
            max_level=level
            ans=root.val
        }

    }

    dfs_post_order(root,1)

    return val

 }