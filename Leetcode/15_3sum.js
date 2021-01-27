// #15 3Sum

const threeSum = function (nums){
    
    nums.sort((a,b)=>a-b)

    let arr=[]

    for(let i =0;i<nums.length-2;i++){
        // Since the array nums is sorted, if the number is start with postive number 
        // we know that they are not going to add up equal to zero, for that reason we can break the loop 
        if(nums[i]>0)break

        // Avoid duplicate if there is duplicate among the i loop 
        if(i>0 &&nums[i]===nums[i-1])continue

        let left=i+1
        let right =nums.length-1
        while(left<right){
            let sum=nums[i]+nums[left]+nums[right]

            if(sum===0){
                arr.push([nums[i],nums[left],nums[right]])
                // avoid duplicate inside the left and right operating process 
                while( left<right  && nums[left]===nums[left+1]){
                    left++
                }
                left++
                right--
            }
            else if (sum<0){
                left++
            }
            else{
                right--
            }

        }

    }

    return arr


}