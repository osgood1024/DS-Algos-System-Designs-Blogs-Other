/**
 * Leetcode #152 Maximum Proudct Subarray 
 * 
 * 
 */


 //Brute Force way- Naive solution with O(n^2)

 var maxProduct = function(nums) {
    let max=Number.MIN_SAFE_INTEGER
    for(let i =0;i<nums.length;i++){
        let product=1
        for(let j=i;j<nums.length;j++){
            product*=nums[j]
            max=Math.max(max, product)
        }
    }  
    return max 
};


//More efficient -DP O(N)

 var maxProduct = function(nums) {
    
    let max=nums[0]
    let min=nums[0]
    let result=max
 
    for(let i =1;i<nums.length;i++){
        let curr=nums[i]
        
        let tempMax=Math.max(curr,Math.max(max*curr,min*curr))
        
        //keep track to properly handle negative numbers
        min=Math.min(curr,Math.min(max*curr,min*curr))
        
        //keep track of the accumulated product of positive numbers

        /*****
        - we want to update max=tempMax for the next comparison or not max is always the same(it will be always nums[0], if we dont update them). 
        - we can't put it max=tempMax under tempMax, since we want min to compare with the max that is not update yet. We want to get the max and min
        for each sub-promblem of index. We want tempMax and min values comparison the same, we just want to get the max and min for each added index so 
        the values for the comparison should be the same.
        *****/
        max=tempMax
        result=Math.max(result,tempMax)
    }
    
    return result
};
 


//Another way of doing it 
/**
 * 
 * Use a minEnding and maxEnding to keep track of the array while moving with the for loop. 
 * To avoid the cases of negative numbers you simply swap minEnding and maxEnding if nums[i] is negative.
 * 
 */
var maxProduct = function(nums) {
    if (!nums.length) return 0;
   let maxEnding = nums[0];
   let minEnding = nums[0]
   let res = nums[0];
   for (let i = 1; i < nums.length; i++) {
       if (nums[i] < 0) {
           let temp = minEnding;
           minEnding = maxEnding;
           maxEnding = temp;
       }

       
       maxEnding = Math.max(maxEnding * nums[i], nums[i]);
       minEnding = Math.min(minEnding * nums[i], nums[i]);
       res = Math.max(res, maxEnding);
       
   }
   return res;
};