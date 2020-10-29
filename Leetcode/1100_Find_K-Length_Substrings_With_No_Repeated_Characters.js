/**
 * Leetcode #1100 Find K-length Substrings With No Repeated Characters
 * 
 */


const numKLenSubstrNoRepeats = function(S, K) {
    

    //Utilizing Sliding Windows technique 
    let arr=S.substring(0,K).split('')
    
    let count=0
    let j=0
    for(let i =K;i<=S.length;i++){
        let set=new Set(arr)
        if(set.size===K){
            count++
        }
        
        arr[j]=S[i]
        j++
        if(j===K){
            j=0
        }
    }
    return count
};
