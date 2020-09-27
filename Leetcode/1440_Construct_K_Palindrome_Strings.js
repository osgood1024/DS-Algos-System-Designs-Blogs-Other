// #1440 Construct K Palindrome Strings 


var canConstruct = function(s, k) {
    if (s.length < k) {
     return false;
 }
 
 let counts = new Array(26).fill(0);
 const aCode = "a".charCodeAt();

 
 for (let i = 0; i < s.length; ++i) {
     counts[s.charCodeAt(i) - aCode]++;
     
 }
 
 let oddCount = 0;
 for (let i = 0; i < 26; ++i) {
     if (counts[i] % 2 === 1) {
         oddCount++;
     }
 }
 
 return oddCount <= k;
 
};