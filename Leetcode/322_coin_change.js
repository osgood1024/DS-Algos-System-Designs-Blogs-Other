// Leetcode #322  Coin Change

//Bottom Up Approach-personally this harder idea to come up with 
// This down below codes run faster in term of time complexity than the other two 
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


// Another Bottom up Approach 

const coinChange = function(coins, amount) {
    const map = {0:1}
    function dp (n) {
        if (map.hasOwnProperty(n)) return map[n]
        if (n == 0) return 1
        if (n < 0) return -1
        let min = Infinity
        for(let coin of coins) {
            let res = dp(n - coin)
            if (res == -1) continue
            min = Math.min(min, 1+res)
        }
        map[n] = min
        return min
    }
    for (let i = 1;i<=amount;i++) {
        dp(i)
    }
    return  map[amount] == Infinity ? -1 : map[amount] - 1
};


// From Top to Bottom (DP recurision)
const coinChange = function(coins, amount) {
    const map = {}
    function dp (n) {
        if (map[n]) return map[n]
        if (n == 0) return 1
        if (n < 0) return -1
        let min = Infinity
        for(let coin of coins) {
            let res = dp(n - coin)
            if (res == -1) continue
            min = Math.min(min, 1+res)
        }
        map[n] = min
        return min
    }
    return dp(amount) == Infinity ? -1 : dp(amount)-1
};





