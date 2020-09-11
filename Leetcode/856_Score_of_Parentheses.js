
//Use Stack DS 
/*
Time and Space Complexity :O(N)
*/
var scoreOfParentheses = function(S) {
    let stack=[0]
    
    for(let i =0;i<S.length;i++){
        if(S[i]==='('){
            stack.push(0)
        }else{
            let last=stack.pop()
            let before_last=stack.pop()
            stack.push(before_last+Math.max(2*last,1));
        }
    }
    
    return stack.pop()
};