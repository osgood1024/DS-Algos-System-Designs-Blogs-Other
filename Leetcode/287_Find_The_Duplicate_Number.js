// #287 Find the Duplicate Number

// More efficient Solution 
/**
 * This method is similar with Linked List Cycle II Leetcode #142
 * Time : O(N)
 * Space: O(1)
 *  
 */ 
const findDuplicat=function(nums){

    if(nums.length>1){
        let slow=nums[0]
        let fast=nums[nums[0]]

        while(slow !=fast){
            slow=nums[slow]
            fast=nums[nums[slow]]
        }

        slow=0

        while(slow!=fast){
            slow=nums[slow]

            fast=nums[fast]

        }

        return slow

    }

    return -1
}


