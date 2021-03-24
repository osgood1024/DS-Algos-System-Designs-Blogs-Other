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


//  Another way of doing it (it seem faster in term of run time)



const wordBreak=function(s,wordDict){

    const words = new Set(wordDict)
    const wordLen = new Set(wordDict.map(word => word.length))
    const starts = new Set([0])

    for (let start of starts) {
        for (let word of wordLen) {
            if (words.has(s.slice(start, start + word))) {
                starts.add(start + word)
            }
        }
    }

    return starts.has(s.length)
}