// #669 Trim a Binary Search Tree

// Both Time and Space Complexity => O(n)

const trimBST=function (root, low ,high){
    // dfs

    if(!root)return root 
    /**
     * Since its binary search tree ,we can check if each node is outside or inside range 
     * with the next two lines of code condition
    */
    if(root.val>high)return trimBST(root.left,low, high)
    if(root.val<low)return trimBST(root.right,low, high)
    

    // Here we just call 
    root.left=trimBST(root.left,low,high)
    root.right=trimBST(root.right,low,high)

    return root 

}
