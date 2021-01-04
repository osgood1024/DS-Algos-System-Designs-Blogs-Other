//  #139 Word break 

const wordBreak=function(s,wordDict){
    if(wordDict.length==0||!wordDict)return false
    let dp=new Array(s.length+1).fill(false)
    dp[0]=true
    let set=new Set(wordDict)

    for(let i =1;i<=s.length;i++){
        for(let j=0;j<i;j++){
            if(dp[j]&& set.has(s.slice(j,i))){
                dp[i]=true
            }
        }
    }

    return dp[s.length]
}