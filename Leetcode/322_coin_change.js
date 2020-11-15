// Leetcode #322  Coin Change

//Bottom Up Approach-personally this harder idea to come up with 
const coinChange=function(coins, amount){

    // or below line can switch to new Array(amount+1).fill(Number.MAX_VALUE)
    let dp=new Array(amount+1).fill(amount+1)

    dp[0]=0

    for(let i=1;i<dp.length;i++){
        for(let j=0;j<coins.length;j++){
            if(i-coins[j]>=0){
                dp[i]=Math.min(dp[i-coins[j]]+1,dp[i])
            }
        }
    }

    return dp[amount]===amount+1 ? -1 :dp [amount]
}




