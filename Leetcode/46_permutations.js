// #46 Permutation


var permute = function(nums) {
    let arr=[]
    backtrack(arr,[],nums)
    return arr;
    
};
const backtrack=(arr,tempArr,nums)=>{

    if(tempArr.length==nums.length){
        arr.push([...tempArr])
    }
    for(let i =0;i<nums.length;i++){
        if(tempArr.indexOf(nums[i])!==-1)continue;
        tempArr.push(nums[i])
        backtrack(arr,tempArr, nums);
        tempArr.pop();
    }

}



/**
 * 
 * Java Version 
 * 
 *  
 class Solution {
    public List<List<Integer>> permute(int[] nums) {
        
        List<List<Integer>> list= new ArrayList<>();
        
        backtrack(list, new ArrayList<>(), nums);
        
        return list;
    }
    
    
    private void backtrack(List<List<Integer>> list, List<Integer> tempList, int[] nums){
        
        
        if(tempList.size()==nums.length){
            list.add(new ArrayList<>(tempList));
        }
        
        else{
            for(int i =0;i<nums.length;i++){
                if(tempList.contains(nums[i]))continue;
                tempList.add(nums[i]);
                backtrack(list, tempList, nums);
                tempList.remove(tempList.size()-1);
            }
        }
        
    }
}

*/
