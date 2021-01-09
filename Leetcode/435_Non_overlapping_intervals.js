// #435 Non-overlapping Intervals


// Greedy Time complexity O(nlog(n)). Sorting takes O(nlog(n)) Space Complexity O(1)
const eraseOverlapIntervals=function(intervals){
    if (intervals.length === 0) return 0

    intervals.sort((a, b) => a[1] - b[1])

    let remove = 0
    let curr_end_index = intervals[0][1]

    //keep comparing the index of the last index with the next index of first index
    for (let i = 1; i < intervals.length; i++) {
        let next_start_index = intervals[i][0]
        let next_end_index = intervals[i][1]

        /**
         * we only need to compare the curr_end_index and the next_start_index.
         * If the curr_end_index > next_start_index, we add remove++ to keep track how many interavls we
         * need to remove.
         * 
         * else we can just update the curr_end_index= next_end_index, we need this or curr_end_index 
         * never gets update. 
         * 
         */
        if (next_start_index < curr_end_index) {
            remove++
        } 
        
        else {
            curr_end_index = next_end_index
        }
    }

    return remove
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
 */
 


// Another way of solving it

var eraseOverlapIntervals = function(intervals) {
    
    intervals.sort((a,b)=>a[0]-b[0])
    let remove=0
    let j=0
    for(let i=1; i<intervals.length;i++){
        
        let next_start_index=intervals[i][0]
        let next_end_index=intervals[i][1]
        let current_end=intervals[j][1]
        
        if(current_end>next_start_index){
            remove++

            if(next_end_index<current_end){
                j=i
            }  
        }else{
            j=i
        }
        
    }
    
    return remove
    
};


// bsio version Remove Interval Overlaps
class Solution {
    solve(intervals) {

        intervals.sort((a, b) => a[0] - b[0])

        let remove = 0
        let j = 0
        for (let i = 1; i < intervals.length; i++) {

            let current_end = intervals[j][1]
            let start_next=intervals[i][0]

            if (start_next < current_end) {
                remove++
                let end_next=intervals[i][1]
                /*one edge case; if the end_next is smaller than the current_end,
                 we need to update the end_next index
                 for example:
                 [[1,100],[1,11],[11,22]]

                 if we know the next array end index is smaller than current end index we want to update j=i
                 and basically removing the current and update the current intervals.  
                */
                if (end_next< current_end) {
                    j = i
                }
            } else {
                j = i
            }

        }
        return remove
    }
}

