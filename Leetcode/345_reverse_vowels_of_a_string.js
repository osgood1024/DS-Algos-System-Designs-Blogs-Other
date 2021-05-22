// #345 Reverse vowels of a string

var reverseVowels = function(s) {
    
    if(s === null || s.length === 0) {
         return s;
     }
     let chars = s.split('');
     let low = 0;
     let high = s.length - 1;
     let vowels = "aeiouAEIOU";
     let tmp;
     
     
     while(low < high) {
         //we found the first vowel in s
         while(low < high && vowels.indexOf(chars[low]) === -1) {
             low++;
         }
         
         //we found the last vowel in s
         while(low < high && vowels.indexOf(chars[high]) === -1) {
             high--;
         }
         
         //and we swap them
         tmp = chars[high];
         chars[high] = chars[low];
         chars[low] = tmp;
         
         //increment and keep going to the next one
         low++;
         high--;
     }
     
     return chars.join('');
     
     
     
 };