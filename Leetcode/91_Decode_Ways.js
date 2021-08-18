//#91 Decode Ways

//Time and Space Complexity: O(N)

var numDecodings = function(s) {
    
    return count(s,0,[])
    
};

const count =function (s,i,memo){
    if(s.charAt(i)=="0")return 0
    
    if(i>=s.length-1)return 1
    
    if(memo[i])return memo[i]
    
    
    let final=count(s,i+1, memo)
  
    if(parseInt(s.charAt(i)+s.charAt(i+1))<=26){
        final+=count(s,i+2,memo)
    }
    
    memo[i]=final
    
    return final
}