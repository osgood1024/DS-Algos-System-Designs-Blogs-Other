
// Leetcode #5 Longest Palindromic Substring
/*
Run time is not efficient solving with O(n^2) time complexity 
IS CLASSIC DP problem
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