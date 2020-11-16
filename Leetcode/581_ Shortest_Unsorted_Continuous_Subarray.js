// #581 Shortest Unsorted Continuous Subarray


/**
 * There are total 4 or 5 ways to approach this problem 
 * However, I found this one is the most  interesting and most efficient solution 
 * 
 */

// Time complexity O(n), Space O(1)
const findUnsortedSubarray = function(nums) {
    let left=0
    let right=nums.length-1
    let nd=-1
    let st=0
    let max=Number.MIN_SAFE_INTEGER
    let min=Number.MAX_SAFE_INTEGER
    
    while(right>=0){
        if (nums[left]>=max){
            max=nums[left]
        }else{
            nd=left
        }
        if(nums[right]<=min){
            min=nums[right]
        }else{
            st=right
        }
        left++
        right--
    }
     
     return nd-st+1
     
 };



//  Using sort approach -Time complexity O(nlogn) Space O(n)

const findUnsortedSubarray = function(nums) {
    let copy=[...nums]
    
    let sorted=nums.sort((a,b)=>a-b)
    
    let l=copy.length,r=0
    
    for(let i=0;i<copy.length;i++){
        if(copy[i]!==sorted[i]){
            l=Math.min(l,i)
            r=Math.max(r,i)
        }
    }
    return r-l+1 < 0 ?  0 : r-l+1
    
};


// Brute Force version -Time complexity O(n^2) Space O(1)
const findUnsortedSubarray = function(nums) {
    
    let l=nums.length,r=0
    for(let i=0;i<nums.length-1;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[j]<nums[i]){
                r=Math.max(r,j)
                l=Math.min(l,i)
            }
        }
    }
    
    return r-l+1 < 0 ?  0 : r-l+1
    
};
