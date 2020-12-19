// Rocketship Rescue

class Solution{
    solve(weights,limit){
        let ships=0
        weights.sort((a,b)=>a-b)
        let start=0,
            end=weights.length-1

        while(start<=end){
            if(weights[start]+weights[end]<=limit){
                start++
            }
            ships++
            end--
        }

        return ships
    }
}