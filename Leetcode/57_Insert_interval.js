
// #57 Insert Interval


// Greedy Approach 

/**
 * 
 * Time complexity : O(N) since it's one pass along the input array.
 * Space complexity : O(N) to keep the output.    
 * 
 */

var insert = function(intervals, newInterval) {
    
    
    let size=intervals.length
    
    let index=0
    
    let ans=[]
    
    while(index<size && intervals[index][1]<newInterval[0]){
        ans.push(intervals[index])
        index++
    }
    
    while(index<size && intervals[index][0]<=newInterval[1]){
        
        newInterval[0]=Math.min(newInterval[0],intervals[index][0])
        newInterval[1]=Math.max(newInterval[1],intervals[index][1])
        index++
    }
    
    ans.push(newInterval)
    
    while(index<size){
        ans.push(intervals[index])
        index++
    }
    
    
    return ans
    
    
};


// another way of doing it

var insert = function(intervals, newInterval) {
    
    if(intervals.length==0)return [newInterval] 

    let ans=[]
    let flag=0
    
    for(let i =0;i<intervals.length;i++){
        
        // const current=intervals[i]
        // const[a,b]=intervals[i]
        // console.log('a:'+a,'b:'+b)
        
        let start=intervals[i][0]
        let end=intervals[i][1]
        
        if(end<newInterval[0]){
            ans.push(intervals[i])
        }
        else if(start>newInterval[1]){
            if(flag===0){
                ans.push(newInterval)
            }
            ans.push(intervals[i])
            flag=1
        }

        else{
          newInterval[0]=Math.min(newInterval[0],start)
          newInterval[1]=Math.max(newInterval[1],end)
    
        }
    }

    if(flag===0){
      ans.push(newInterval)
    }
    
    return ans
    
};


