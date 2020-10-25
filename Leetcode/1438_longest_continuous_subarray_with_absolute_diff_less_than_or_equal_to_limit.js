/**
 * #1438  Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit
 * 
 * 
 * 
 * Technically you should use sliding window && Monotonic queue technique 
 * question should consider as a hard problem not medium
 * this question is in the weekly contest 187 question 3 =>FYI
 * 
 * */


// Brute Force Way O(N^2)
var longestSubarray = function(nums, limit) {
    
    let max=0
    
    for(let i =0;i<nums.length;i++){
        let min=nums[i];
        let numMax=nums[i];
        let tempMax=0
        for(let j=i;j<nums.length;j++){
            if(min>nums[j]){
                min=nums[j]
            }
            if(numMax<nums[j]){
                numMax=nums[j]
            }
            
            let diff=Math.abs(numMax-min)
            
            if(diff<=limit){
                max=Math.max(max,++tempMax)
            }else{
                break;
            }
        }
        //this condition prevent TLE on the brute force way 
        //You dont need to check every single array index 
        //if max is larger than nums.length-i means that we find the max 
        // break out of the loop 
        if(max>nums.length-i) break;
        
    }
    return max
    
};


/*STILL NEED TO DO BETTER EFFICIENT WAY WITH Monotonic Queue + Sliding Window =O(N) */ 
