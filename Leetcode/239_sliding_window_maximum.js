// #239 sliding window maximum

//deque way 
// Time and space complexity O(N)
const maxSlidingWindow=function(nums,k){    
    const queue=[]

    const res=[]

    for(let i =0;i<nums.length;i++){

        while(queue && nums[queue[queue.length-1]]<nums[i]){
            queue.pop()
        }

        queue.push(i)

        if(queue[0]===i-k){
            queue.shift()
        }


        if(i>=k-1){
            res.push(nums[queue[0]])
        }
    }

    return res
}

