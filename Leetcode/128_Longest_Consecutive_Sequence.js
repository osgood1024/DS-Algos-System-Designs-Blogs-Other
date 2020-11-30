var longestConsecutive = function(nums) {
    
    if(nums === null || nums.length === 0)
           return 0;
       
       let nums_set = new Set(nums);
       let count = 1, maxCount = 1;    
       for(let value of nums_set){
           if(nums_set.has(value - 1)){
               continue;
           }
           count = 1;
           let currentNum = value;
           
           while(nums_set.has(currentNum + 1)){
               count += 1;
               currentNum += 1;
           }
           maxCount = Math.max(count, maxCount);
       }
       
       return maxCount;
             
   };