// #98 Validate Binary Searcg Tree



const isValidBST=function (root){

    function helper(root,min,max){
        if(!root)return truev

        if((max!==null &&  root.val>=max) || (min!==null && root.val<=min)){
            return false 
        }
        /*
        scan left and right
        left compare with max since left should be min,so we know if bst validate.
        same goes to right, should compare with min since right should be max, so we dont have to worry about the max
        value , in that way we know if bst validate
        */

        return helper(root.left,min,root.val) && helper(root.right,root.val,max)
    }


    helper(root, null,null)

}