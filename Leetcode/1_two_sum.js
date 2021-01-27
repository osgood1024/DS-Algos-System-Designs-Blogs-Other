//#1 Two Sum 

// Classic problem for everyone 
// Time complexity : O(n). We traverse the list containing nn elements only once. 
// Each look up in the table costs only O(1)time.

// Space complexity : O(n). 
// The extra space required depends on the number of items stored in the hash table,
// which stores at most n elements.
const twoSum = function (nums, target){

    let hash={}


    for(let i =0;i<nums.length;i++){
        let diff=target-nums[i]
        /**
         * 
         * The reason why we dont want to put if (hash[diff]) only 
         * is because if hash[diff]=0 is not true since zero is falsely
         */
    // Here we can also use : if (hash[diff]!=undefined)
        if(hash[diff]!=null){
            return [hash[nums[i]],i]
        }
        else{
            hash[nums[i]]=i
        }
    }

}
