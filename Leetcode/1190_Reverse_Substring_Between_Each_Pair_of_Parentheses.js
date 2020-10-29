/*
#1190 .Reverse Substrings Between Each Pair of Parentheses

*/

const reverseParentheses=function(s){

    let stack=[]
    for(let str of s){
        if(str!==")"){
            stack.push(str)
            continue;
        }
        
        let c= stack.pop()
        let queue=[]
        
        
        while(c!=="("){
            queue.push(c)
            c=stack.pop()
        }
        
        
        while(queue.length){
              stack.push(queue.shift())
        }
    }
    
    return stack.join('')
    
};

// let s="(abcd)" //"dcba"
// let s="(u(love)i)" //"iloveu"
// let s="(ed(et(oc))el)"  //"leetcode"
let s="a(bcdefghijkl(mno)p)q" //"apmnolkjihgfedcbq"


console.log(reverseParentheses(s))