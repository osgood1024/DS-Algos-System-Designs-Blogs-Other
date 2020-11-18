// #259 3Sum Smaller


// Time complexity O(n^2) and space O(1)
const threeSumSmaller=function (nums,target){
    let sorted=nums.sort((a,b)=>a-b)
    let result=0
    for(let i =0;i<sorted.length;i++){
        let start=i+1
        let end=sorted.length-1

        while(start<end){
            if(sorted[i]+sorted[start]+sorted[end]<target){
                // line 14 is the most crucial part of this problem. 
                /**
                 * 
                 * 
                 * Since we sort the array, once we find a combination is less than the target. We know that
                 * ALL the numbers between the left(start) and right(end) ARE ALSO less than the target.
                 * Instead of iterating through them again we can just know by subtract left(start) from right(end) =>end-start 
                 * to get the correct count.
                 * 
                 *  
                */
                result+=(end-start)
                start++
            }else{
                end--
            }
        }
    }

    return result
}



// another version

const threeSumSmaller = function(nums, target) {
        
    let sorted = nums.sort((a, b) => a - b)
    let count = 0
    for (let i = 0; i < sorted.length - 2; i++) {
        for (let left = i + 1, right = sorted.length - 1; left < right;) {
            if (sorted[i] + sorted[left] + sorted[right] >= target) {
                right--
            } else {
                count += (right - left)
                left++
            }
        }
    }
    return count

};