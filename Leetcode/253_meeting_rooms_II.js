// #253 Meeting rooms II

var minMeetingRooms = function(intervals) {
    
    
    let starts=intervals.sort((a,b)=>a[0]-b[0])
    
    let ends=[...intervals].sort((a,b)=>a[1]-b[1])
    let rooms=0
    let j=0
    
    for(let i =0;i<intervals.length;i++){
        if(starts[i][0]<ends[j][1]){
            rooms++
        }else{
            j++
        }

    }
    
    return rooms
    
};