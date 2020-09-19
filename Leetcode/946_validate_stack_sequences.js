/*
#946 Validate Stack Sequences

*/

//O(n) Space Complexity 
const validateStackSequences=function(pushed,popped){
    const stack=[]
    let j=0
    for(let i =0;i<pushed.length;i++){
        stack.push(pushed[i]);
        while(stack.length>0 && stack[stack.length-1]===popped[j]){
            stack.pop();
            j++;
        }
    }

    return j===pushed.length;
}


//O(1) Space Complexity

var validateStackSequences = function(pushed, popped) {
    let i = 0, j = 0;
    
    for(let num of pushed) {
        pushed[i] = num; // or we can put it as pushed[i++] in one line. Its the same 
        i++
        while(i > 0 && popped[j] === pushed[i-1]) {
             i--; 
             j++; 
            }
        }
    return !i;//here is just checking is i===0
};




