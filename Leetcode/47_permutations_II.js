// #47 Permutation II

var permuteUnique = function(nums) {
    
    let arr=[]
    
    let boolean= new Array(nums.length).fill(false)
    //You need to sort it (crucial step)
    nums.sort((a,b)=>a-b)
    
    backtrack(arr,[],nums,boolean)
    
    return arr
    
};


function backtrack(arr, tempArr,nums, used){
    
    if(tempArr.length==nums.length){
        arr.push([...tempArr])
    }

    for(let i =0;i<nums.length;i++){
        if(used[i]|| i>0 && nums[i]===nums[i-1] && !used[i-1]) continue;
        used[i]=true;
        tempArr.push(nums[i]);
        backtrack(arr,tempArr,nums,used)
        used[i]=false
        tempArr.pop()


    }
    
}


/**
 * 
 * Java Version 

 class Solution {
     public List<List<Integer>> permuteUnique(int[] nums){
         List<List<Integer>> list= new ArrayList<>();
         
         Arrays.sort(nums);
         
         backtrack(list, new ArrayList<>(), nums, new boolean[nums.length]);
         
         return list;
         
        }
        
        
        private void backtrack(List<List<Integer>> list, List<Integer> tempList, int[] nums, boolean[] used){
            
            if(tempList.size()==nums.length){
                list.add(new ArrayList<>(tempList));
            }
            else{
                for(int i=0;i<nums.length;i++){
                    if(used[i]|| i>0 && nums[i]==nums[i-1]&& !used[i-1])continue;
                    used[i]=true;
                    tempList.add(nums[i]);
                    backtrack(list, tempList,nums,used);
                    used[i]=false;
                    tempList.remove(tempList.size()-1);
                }
            }
        }
    }
    */