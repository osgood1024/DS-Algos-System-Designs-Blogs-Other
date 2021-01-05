// All Sublists Sum

// Not an optimal way, O(n^2) time complexity, however this will run TLE  
class Solution {
    solve(nums){
        let result =0

        for(let i =0;i<nums.length;i++){
            let temp=0
            for(let j=1;j<nums.length;j++){
                temp+=nums[j]
                result+=temp
            }
        }
    
        return result%(10**9+7)
    }
}

// Optimal solution with O(n)- Time Complexity
class Solution {
    solve(nums){

        let result =0
        //There is this pattern that we can count how many times does each integer appear in the the final sum
        // This pattern is more like a Math Equation 
        for(let i =0;i<nums.length;i++){
            result+=nums[i]*(i+1)*(nums.length-i)
        }

        /**
         * We can also do something like this (is similar)
         * 
         *  for (let i = 0; i < nums.length; i++) {
         *      result += nums[i] * (i + 1) * (nums.length - i)
         *      result %= (10 ** 9 + 7)
         *    }
         *  return result
         * 
         * 
        */
    
        return result%(10**9+7)
    }
}