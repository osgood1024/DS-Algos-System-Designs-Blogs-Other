

// Complete An Arithmetic Sequence
class Solution {
    solve(nums) {
        // This is very mathy way to find the arithmetic sequence d is the arithmetic suquence
        let d =Math.floor((nums[nums.length - 1] - nums[0]) / nums.length);

        for(let i =0;i<nums.length;i++){
            if(nums[i+1]-nums[i]!=d){
                return nums[i]+d
            }
        }
        return 0
    }
}