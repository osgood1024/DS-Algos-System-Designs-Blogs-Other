// #78 Subsets

/**
 * Nice post about backtracking 
 * https://leetcode.com/problems/permutations/discuss/18239/A-general-approach-to-backtracking-questions-in-Java-(Subsets-Permutations-Combination-Sum-Palindrome-Partioning)
 */

var subsets = function(nums) {
    
    
    let final=[]
    
    nums.sort((a,b)=>a-b)
    
    backtrack(final,[], nums,0)
    
    return final
    
};

function backtrack(final, newArr, nums, start){
        
    final.push([...newArr])
    
    for(let i =start;i<nums.length;i++){
        newArr.push(nums[i]);
        backtrack(final,newArr, nums,  i+1)
        newArr.pop();

    }
        
}

/**
 * In Java 
 * 
 * 
 * class Solution {
    public List<List<Integer>> subsets(int[] nums) {
        
        
        List<List<Integer>> list=  new ArrayList<>();
        
        Arrays.sort(nums);
        
        backtrack(list, new ArrayList<>(), nums, 0);
        
        return list;
        
    }
    
    
    private void backtrack(List<List<Integer>> list, List<Integer> tempList, int[] nums, int start){
        
        list.add(new ArrayList<>(tempList));
        
        for(int i=start;i<nums.length;i++){
          
            tempList.add(nums[i]);       

            backtrack(list, tempList, nums, i+1);
        
            tempList.remove(tempList.size()-1);
            
        }
    }
}
 * 
 * 
 * 
 * 
 * 
 */