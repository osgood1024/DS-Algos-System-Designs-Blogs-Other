// #849 Maximize Distance to Closest Person 

// Greedy Approach => Time Complexity O(N) , Space Complexity O(1)

const maxDistToCloset=function(seats){

    let last_seat=-1

    let maxDist=0

    for(let i=0;i<seats.length;i++){
        if(seats[i]===1){
            if(last_seat=== -1){
                last_seat=i
                maxDist=last_seat //take care of cases [0,0,0,1]
            }
            else{

                maxDist = Math.max(maxDist, Math.floor((i-last_seat)/2))  //take care of [...0,0,1,0,0,0,0,1,..]
                last_seat=i
            }
           
        }
        
    }

    return Math.max(maxDist,seats.length-1-last_seat)  // take care fo cases[1,0,0,0]

}   


// Another version 


/*
class Solution {
    solve(seats) {
        let last_seat = -1

        let maxDist = 1

        for (let i = 0; i < seats.length; i++) {
            if (seats[i] === 1) {
                if (last_seat === -1) {
                    maxDist = Math.max(maxDist, i) //take care of cases [0,0,0,1]
                } else {
                    maxDist = Math.max(maxDist, Math.floor((i - last_seat) /
                        2)) //take care of [...0,0,1,0,0,0,0,1,..]
                }
                last_seat = i
            }
        }

        return Math.max(maxDist, seats.length - 1 - last_seat) //take care fo cases[1,0,0,0]
    }
}

*/