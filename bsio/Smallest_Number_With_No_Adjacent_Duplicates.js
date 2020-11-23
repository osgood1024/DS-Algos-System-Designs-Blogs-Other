
// Smallest Number With No Adjacent Duplicates
// 11/21/2020 easy  question contest

class Solution {
    solve(s) {

        let str = '';
        for (let i = 0; i < s.length; i++) {
            if(s[i]!== "?"){
                str+=s[i]
            }else{
                if(str[str.length-1]!=='1' && s[i+1]!=='1') str+=1
                else if(str[str.length-1]!=='2'&& s[i+1]!=='2')str+=2
                else str+=3
            }
        }
        return str.toString();

    }
}