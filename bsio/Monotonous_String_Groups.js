// Monotonous String Groups 🎃
// Weekly Contest 31 Easy question


class Solution {
    solve(s) {
        let count=0
        for(let i =0;i<s.length;){
            count++
            let j =i+1
            let increasing=true
            let decreasing=true
            
            while(j<s.length){
                if(s[j]>s[j-1]){
                    increasing=false
                } 
                if(s[j]<s[j-1]){
                    decreasing=false
                }
                if(increasing==false && decreasing==false){
                    break;
                }
                j++
            }
            
            i=j
            
        }
        return count
        
    }
}