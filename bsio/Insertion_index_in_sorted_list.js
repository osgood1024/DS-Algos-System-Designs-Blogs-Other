

//Insertion Index in Sorted List

/* The question is saying we can solve this with O(logn). 
We can use Binary search method for solving this question 
*/


class Solution {
    solve(nums, target) {
        let start_index = 0,
            end_index = nums.length - 1

        while (start_index <= end_index) {
            let mid_index = Math.floor((start_index + end_index) / 2)

            if (nums[mid_index] > target) {
                end_index = mid_index - 1
            } else {
                start_index = mid_index + 1
            }
        }

        return start_index

    }
}