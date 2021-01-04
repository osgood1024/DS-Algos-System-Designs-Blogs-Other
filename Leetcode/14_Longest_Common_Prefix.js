// #14 Longest Common Prefix
// There are different ways of solving this problem

// Vertical Scanning - Time Complexity:O(S), Space Complexity:
const longestCommonPrefix=function(strs){

    if(strs==null ||strs.length==0)return ""

    for(let i =0;i<strs[0].length;i++){
        let char=strs[0].charAt(i)
        for(let j=1;j<strs.length;j++){
            if(strs[j].charAt(i)!==char){
                // strs[0].slice(0,i) => this is also works 
                return strs[0].substring(0,i)
            }
        }
    }

    return strs[0]
}