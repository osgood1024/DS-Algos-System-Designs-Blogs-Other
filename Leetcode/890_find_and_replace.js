// #890 Find and Replace


/**
 * 
 * 
 * Time Complexity: O(N * K)O(N*K), where N is the number of words, and K is the length of each word.
   Space Complexity: O(N * K)O(N*K), the space used by the answer.
 *
 */
var findAndReplacePattern = function(words, pattern) {
    let result=[]
    
    for(let w of words){
        
        let w2p=new Map()
        let p2w=new Map()
        
        let flag=true
        
        for(let i =0;i<pattern.length;i++){
            const word=w[i];
            const patt=pattern[i];
            
            if( (w2p.has(word) && w2p.get(word)!==patt) || (p2w.has(patt)&&p2w.get(patt)!==word)){
                flag=false;
                break;
            }
            
            w2p.set(word,pattern[i]);
            p2w.set(pattern[i],word);
        }
        
        flag && result.push(w)
    }
    
    return result
    
};