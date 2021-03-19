// #616 Add Bold Tag in String (same question as #758 bold words in string)


/**
 * 
 * 
 *  
        Time Complexity: O(N\sum w_i) => O(N∑wi), where N is the length of s and wi is the sum of W. Or it might be O(nlogn)

        Space Complexity: O(N)
 *
 */
const addBoldTag=function(s,dict){

    let marked=new Array (s.length).fill(false)

    for(let i =0;i<dict.length;i++){
        let start=s.indexOf(dict[i])
        while(start>-1){
            let end =start+dict[i].length
            for(let j=start;j<end;j++){
                marked[j]=true
            }
            start=s.indexOf(dict[i],start+1)
        }
    }

    let str=""
    for(let i =0;i<s.length;i++){
        if(marked[i] && (i==0  || !marked[i-1])){
            str+="<b>"
        }
        str+=s[i]

        if(marked[i]&&(i===s.length-1 || !marked[i+1])){
            str+="</b>"
        }
    }

    return str


}