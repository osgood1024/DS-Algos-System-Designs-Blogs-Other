/*
Leetcode #75 sort colors 

The question told on do not return anything , modify nums in place instead

*/


var sortColors=function(nums){

    function swap(i,left){
        let temp=nums[left]
        nums[left]=nums[i]
        nums[i]=temp
    }
    
    let right=nums.length-1
    for(let i =0,left=0;i<=right;){
        if(nums[i]==0){
            swap(i,left)
            i++
            left++
        }else if (nums[i]===2){
            swap(i,right)
            right--
        }else{
            i++
        }
    }


}


