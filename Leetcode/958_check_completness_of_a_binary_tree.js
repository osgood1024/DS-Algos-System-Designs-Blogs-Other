// #958 Check Completeness of a Binary Tree



const isCompleteTree=function(root){
    if(!root)return true

    let queue=[root]
    
    let flag=false

    while(queue.length){
        let front=queue.shift()
        // if front is null we know that the tree last level is toward right side
        if(front==null){
            flag=true
        }else{
            // so here we return false 
            if(flag)return false 
            queue.push(front.left)
            queue.push(front.right)
        }

    }

    return true 

}