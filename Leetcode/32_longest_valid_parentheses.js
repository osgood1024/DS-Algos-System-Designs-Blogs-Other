

// #32. Longest Valid Parentheses


/**
 * Stack solution 
 * 
 * Time Complexity:O(N). n is the length of the given string. 
 * Space Complexity:O(N). The size of stack can go up to n.
 * 
 * 
 * For every ‘(’ encountered, we push its index onto the stack.
 * For every ‘)’ encountered, we pop the topmost element and subtract the current element's index from the top element of the stack, 
 * which gives the length of the currently encountered valid string of parentheses. 
 * If while popping the element, the stack becomes empty, we push the current element's index onto the stack.
 * In this way, we keep on calculating the lengths of the valid substrings, and return the length of the longest valid string at the end.
 * 
 * 
 * 
 * 
 * 
 */


const longestValidParentheses=function(s){

    let stack=[-1]
    let max=0

    for(let i =0;i<s.length;i++){
        if(s[i]==='('){
            stack.push(i)
        }
        else{
            stack.pop()
            if(!stack.length){
                stack.push(i)
            }
            max=Math.max(max,i-stack[stack.length-1])
            
        }
    }
    return max

}
