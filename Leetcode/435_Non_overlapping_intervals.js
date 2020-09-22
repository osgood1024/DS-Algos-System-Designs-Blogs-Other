// #435 Non-overlapping Intervals


// Greedy  Time complexity O(nlog(n)). Sorting takes O(nlog(n)) Space Complexity O(1)
const eraseOverlapIntervals=function(intervals){
    if(intervals.length===0)return 0

    intervals.sort((a,b)=>a[1]-b[1])
    let count=0
    let end=intervals[0][1]

//keep comparing the index of the last index with the next index of first index
    for(let i=1;i<intervals.length;i++){
        if(intervals[i][0]<end){
            count++
        }
        else{
            end=intervals[i][1]
        }
    }

    return count
}


/**
 * Input:[[1,2],[2,3],[3,4],[1,3]]
 * Output: 1
 * Explaination :[1,3] can be removed and the rest of intervals are non-overlapping.
 * 
 * Input: [[1,2],[1,2],[1,2]]
 * Output: 2
 * Explanation: You need to remove two [1,2] to make the rest of intervals non-overlapping.
 * 
 * 
 * Input: [[1,2],[2,3]]
 * Output: 0
 * Explanation: You don't need to remove any of the intervals since they're already non-overlapping.
 * 
 * /

