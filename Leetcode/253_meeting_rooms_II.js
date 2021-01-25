// #253 Meeting rooms II

// Time complexity -O(NlogN)
// Space complexity-O(N)

var minMeetingRooms = function(intervals) {
    
   
        // Sort the intervals by the start time 
        let start = intervals.sort((a, b) => a[0] - b[0])

        // Create a copy array and sort the intervals by the end time
        let end = [...intervals].sort((a, b) => a[1] - b[1])

        // Keep track on how many room(s) is/are needed
        let rooms = 0

        // Two pointers incoming 
        let j = 0

        for (let i = 0; i < intervals.length; i++){
            //whenever there is a start meeting, we need to add one room. 
            // But before adding rooms, we check to see if any previous meeting ends,
            //  which is why we check start with the first end. 
            if (start[i][0] < end[j][1]) {
                rooms++
            } 
            // When the start is bigger than end, it means at this time one of the previous meeting ends, and it can take and reuse that room.
            //  Then the next meeting need to compare with the second end because the first end's room is already taken. 
            else {
                j++
            }
        }

        return rooms

    
};