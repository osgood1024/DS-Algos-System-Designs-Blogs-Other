// #1062 Longest Repeating Substring

var longestRepeatingSubstring = function(S) {
    let dp= new Array(S.length+1).fill(0).map((row)=>new Array(S.length+1).fill(0));
    let max=0;
    for(let i =0;i<dp.length;i++){
        for(let j =0;j<i;j++){
            if(S[i]==S[j]){
                dp[i+1][j+1]=1+dp[i][j];
                max=Math.max(max, dp[i+1][j+1]);
            }
        }
    }
    return max
};



/**
 * 
 * In Java
 * 
 * class Solution {
    public int longestRepeatingSubstring(String s) {
        
        int dp[][] = new int[s.length() +1][s.length()+ 1];
        int max = 0;
        for(int i =0; i<s.length(); i++) {
            for(int j =0; j<i; j++) {
                if(s.charAt(i) == s.charAt(j)) {
                    dp[i+1][j+1] = 1 + dp[i][j];
                    max = Math.max(max, dp[i+1][j+1]);
                } 
            }  
        }
        return max;
        
    }
}
 * 
 * 
 * 
 * 
 * 
 */
