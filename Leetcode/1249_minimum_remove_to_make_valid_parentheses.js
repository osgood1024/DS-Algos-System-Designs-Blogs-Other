/**
 * Leetcod #1249 Minimum Remove To Make Valid Parentheses
 * 
 * 
 */

//this is classic stack DS problem 
 const minRomoveToMakeValid = function(s){
     let str=s.split('')
     let stack=[]

     for(let i =0;i<str.length;i++){
         if(str[i]==="("){
             stack.push(i)
         }
         else if(str[i]===")"){
            if(stack.length==0){
                str[i]=''
            }
            else{
                stack.pop()
            }
         }
     }
     while(stack.length!==0){
         str[stack.pop()]=''
     }

     return str.join('')
 }
// let s="a)b(c)d"
// let s="lee(t(c)o)de)"
// let s="(a(b(c)d)"

let s="))(("


 console.log(minRomoveToMakeValid(s))