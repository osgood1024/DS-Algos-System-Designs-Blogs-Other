

//  #724 Find Pivot Index 

// Prefix Sum 

var pivotIndex = function(nums) {
    
    let left_sum=0
    
    let sum=nums.reduce((sum,acc)=>sum+acc,0)
    for(let i =0;i<nums.length;i++){
        let right_sum=sum-left_sum
        left_sum+=nums[i]
        if(right_sum===left_sum)return i
    }
    
    return -1

};