// #561 Array Partitiion 1


/**
 * This is question is pretty easy once you find the pattern, 
 * but optimizing the time complexity we can use bucket sort.
*/

/**
 * 
 * The time complexity is not optimize with sorting method
 * time complexity: O(NlogN), space O(N) / O(logN)
 */

const arrayPairSum=function(nums){

    nums.sort((a,b)=>a-b)
    let final=0
    for(let i =0;i<nums.length;i+=2){
        final+=nums[i]
    }

    return final
}


/**
 * With Bucket sort the time complexity is faster but the space complexity could be slower(not efficient)
 * 
 */

 var arrayPairSum=fucnction(nums){
     
 }






