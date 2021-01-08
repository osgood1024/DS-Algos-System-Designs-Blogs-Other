// #647 Palindromic Substrings

/**
 * 
 * They are many  different ways of solving this problem
 * Below is not the DP way, yet we call it 'expand around possible centers', which is same time complexity as DP (O(N^2))
 * but space complexity is more efficient than the DP solution , which is O(1) constant space complexity  
 * 
 * 
 * There are better approaches for solving this problem in sub-quadratic time
 * however those are significantly complex and impractical to implement in most interviews.
 * (Leetcode has list of those solution post , very well written one)
 * 
 * 
 */
const countSubstrings=function(s){

    let count=0
    for(let i =0;i<s.length;i++){

        helper(s,i,i) // Every single character in the string is a center for possible odd-length palindromes

        helper(s,i,i+1) // Every pair of consecutive characters in the string is a center for possible even-length palindromes.
    }

    return count

    function helper(s, low, high){
        while(low>=0 && high<=s.length && s[low]===s[high]){
            count++
            low--
            high++
        }
    }

}
