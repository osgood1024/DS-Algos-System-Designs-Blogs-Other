//#103. Binary Tree Zigzag Level Order Traversal



let zigzagLevelOrder = function(root) {

    let result=[]

    traverse(root,0, result);

    return result
    
};


function traverse(node,level, res){
    if(!node)return 

    if(res[level]==null){
        res.push([])
    }

    if(level%2===0){
        res[level].push(node.val)
    }
    else{
        res[level].unshift(node.val)
    }


    traverse(node.left,level+1,res)

    traverse(node.right,level+1,res)
}