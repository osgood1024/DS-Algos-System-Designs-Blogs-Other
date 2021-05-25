// #1143   Longest Common Subsequence


/*
Similar lCS questions in Leetcode 
1092. Shortest Common Supersequence
1062. Longest Repeating Substring 
516. Longest Palindromic Subsequence
1312. Minimum Insertion Steps to Make a String Palindrome
*/

// DP Time and Space Complexity => O(MN)
/**
 * Time Complexity:
 * We're solving M x N subproblems. Solving each subproblem is an O(1) operation.
 * 
 * Space Complexity :
 * we are allocating a 2D array of size M x N to save the answers to subproblems 
 *
 */
const longestCommonSubsequence=function(text1,text2){
    let dp =new Array(text1.length+1).fill(0).map(row=> new Array(text2.length+1).fill(0))
    let m=text1.length
    let n=text2.length

    for(let i =1;i<=m;i++){
        for(let j =1;j<=n;j++){
            if(text1.charAt(i-1)===text2.charAt(j-1)){
                dp[i][j]=1+dp[i-1][j-1]
            }else{
                dp[i][j]=Math.max(dp[i][j-1],dp[i-1][j])
            }
        }
    }

    return dp[m][n]
}