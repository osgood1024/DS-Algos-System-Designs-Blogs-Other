//  Sum Pairs to Target

//Hash table -O(n)- time and space complexity 
class Solution {
    solve(nums, target) {
        let hash = {}
        let count = 0

        for (let i = 0; i < nums.length; i++) {
            if (hash[target - nums[i]]) {
                count++
                hash[target - nums[i]]--
                if (hash[target - nums[i]] == 0) {
                    delete hash[target - nums[i]]
                }
            } else {
                hash[nums[i]] = hash[nums[i]] + 1 || 1
            }
        }

        return count
    }
}


// Two Pointers- Time Complexity O(nlog(n))=> due to sort the array but the space complexity is O(1)

class Solution {
    solve(nums, target) {
        let start=0, end=nums.length-1, count=0

        nums.sort((a,b)=>a-b)
        while(start<end){
            if(nums[start]+nums[end]===target){
                count++
                start++
                end--
            }
            else if (nums[start]+nums[end]>target){
                end--
            }else{
                start++
            }
        }
        return count
    }
}