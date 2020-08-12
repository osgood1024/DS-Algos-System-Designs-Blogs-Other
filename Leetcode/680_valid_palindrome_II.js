var validPalindrome = function(s) {
  
    //Two pointers way 
    let i = 0, j = s.length-1, letterDeleted = false;
    
    while(i < j) {
        if(s[i] != s[j] && letterDeleted)
            return false;
        else if(s[i] != s[j]) {
            if(s[i+1] != s[j] && s[j-1] != s[i])
                return false;
            if(s[i+1] == s[j] && s[i+2] == s[j-1])
                i++;
            else if(s[j-1] == s[i])
                j--;
            letterDeleted = true;
        }
        
        i++;
        j--;
    }
    
    return true;
   
    
};


/*
recursion way (O(N))

var validPalindrome = function(str, split = false){
  let r = str.length-1;
  for(let i=0; i < str.length / 2; i++, r--){
    if(str[i] !== str[r]){
      if(split) return false
        return validPalindrome(str.slice(i, r), true) ||
        validPalindrome(str.slice(i + 1, r + 1), true)
    }    
  }
  return true;
};


//This might be slowest way 
var validPalindrome = function(s) {
  
    
    for(let start=0;start<s.length/2;start++){
          let last =s.length-1-start
          if(s[start]!==s[last]){
              
              return isPalindrome(cut(s,start)) || isPalindrome(cut(s,last))
          }
        
    }
    return true
    
};

    const cut=(s,start) => s.substring(0,start) +s.substring(start+1)
    const isPalindrome=(s)=>s===s.split('').reverse().join('');


*/
