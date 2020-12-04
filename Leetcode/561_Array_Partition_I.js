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

 var arrayPairSum = function(nums){
     
    const buckets = new Uint16Array(20001);
    for (let i = 0; i < nums.length; i++) {
        buckets[nums[i] + 10000]++;
      
    }    
    
    let numIdx = 0;
    for (let i = 0; i < 20001; i++) {
        const v = buckets[i];
        if (v !== 0) {
            
            for (let j = 0; j < v; j++) {
                nums[numIdx++] = i - 10000;
            }
        }
    }
    
    let ans = 0;
    for (let i = 0; i < nums.length; i += 2) {
        ans += nums[i];
    }
    
    return ans;
     
 }

//buckets sort 
 var arrayPairSum = function(nums) {
    
    if (!nums || nums.length == 0) return nums;
        
        const bucket = new Array(20001).fill(0);
        
        for (let i = 0; i < nums.length; i++) {
            bucket[nums[i] + 10000]++;
        }
        
        let res = 0, flag = true;
        
        for (let i = 0; i < bucket.length; i++) {
            while(bucket[i] > 0) {
                if (flag) {
                    res += i - 10000;
                }
                flag = !flag;
                bucket[i]--;
            }
        }
        
        return res;
        
    };



  






