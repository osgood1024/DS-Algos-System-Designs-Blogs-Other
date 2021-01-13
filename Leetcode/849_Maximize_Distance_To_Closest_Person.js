// #849 Maximize Distance to Closest Person 


const maxDistToCloset=function(seats){

    let last_seat=-1

    let maxDist=0

    for(let i=0;i<seats.length;i++){
        if(seats[i]===1 && last_seat==-1){
            last_seat=i
            maxDist=last_seat
        }
        else if(seats[i]===1 && last_seat!==-1){
            maxDist = Math.max(maxDist, Math.floor((i-last_seat)/2))
            last_seat=i
        }
    }

    return Math.max(maxDist,seats.length-1-last_seat)

}   