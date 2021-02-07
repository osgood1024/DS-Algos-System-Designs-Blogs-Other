// # 1749  Maximum Absolute Sum of Any Subarray 


// Kandane's Algorithm
// Space complexity O(1) and Time complexity should be O(n)

var maxAbsoluteSum = function(nums) {
    
    let box1=0,box2=0,max=0 
    
    for(let i =0;i<nums.length;i++){
        
        box1+=nums[i]
        
        box2+=nums[i]
        max=Math.max(max,box1,Math.abs(box2))
        if(box1<0){
            box1=0
        }
        
        if(box2>0){
            box2=0
        }
    }
    
    return max
    
};



// Another way of solving it 

// Here is a good explaination from someone in leetcode : https://www.notion.so/Leetcode-1749-56f6c5e455104d4f85975d1fce12e539
var maxAbsoluteSum = function(nums) {
    
    let sum=0
    let min=0
    let max=0

    for(let i of nums){
        sum+=i
        max=Math.max(max,sum)
        min=Math.min(min,sum)

    }

    return max-min
    
};
