
// Leetcode #5 Longest Palindromic Substring
/*
Run time is not efficient solving with O(n^2) time complexity 
This is a classic DP problem
*/
let longestPalindrome = function(s) {
    // console.log(s[-1])
      let res = "";
      let cur = "";
      for(let i = 0; i < s.length; i ++){
          for(let j = i; j < i + 2; j ++){
              let left = i;
              let right = j;
              console.log(left,right,i,j)
              while(s[left] && s[left] === s[right]){
                  cur = s.substring(left, right + 1);
                  if(cur.length > res.length) res = cur;
                  left --;
                  right ++;
                // console.log(cur,res,left,right)
              }
              // console.log(i,j)
          }
      }
      return res;
  };
  
  
  longestPalindrome("babad")


  /*Time complexity O(n^2) space complexity O(1)- better space complexity 
    Expand Around Center idea 
  */

  /*
 var longestPalindrome = function(s) {
    const findLongestPalindrome=(str,i,j)=>{
        while(i>=0 &&j <str.length && str[i]===str[j]){
            i--;
            j++;
        }

        // slice the qualified substring from the second last iteration
        return str.slice(i+1,j)
}

    for(let i =0;i<s.length;i++){
        // palindrome can center around 1 or 2 letters
        const word1=findLongestPalindrome(s,i,i)
        const word2=findLongestPalindrome(s,i,i+1)
        
        const longerWords= word1.length>word2.length? word1 : word2
        
        if(longest.length<longerWords.length) longest=longerWords
        
    }

    return longest.length 

 }

 */
