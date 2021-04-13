// #516 Longest Palindromic Subsequnce 



const longestPalindromeSubseq=function(s){

    
    // this is like LCS but palindrome so we can just reverse and compare like LCS (Longest Common Subsequence => leetcode#1143)
    let t = s.split('').reverse().join('')
    
    let dp = new Array(s.length + 1).fill(0).map(arr => new Array(s.length + 1).fill(0))
    
    // console.log(dp)
    
    for (let i = 1; i <= s.length; i++) {
        for (let j = 1; j <= s.length; j++) {
            if (s.charAt(i - 1) === t.charAt(j - 1)) {
                dp[i][j] = 1 + dp[i - 1][j - 1]
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
            }
        }
    }
    
    return dp[s.length][s.length]
}


// Faster way to do it 
