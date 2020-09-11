/*
link: https://app.codesignal.com/arcade/intro/level-6/PWLT8GBrv9xXy4Dui/solutions?solutionId=B8RxCnhBLHSMStAHb

Given a string, your task is to replace each of its characters by the next one in the English alphabet; 
i.e. replace a with b, replace b with c, etc (z would be replaced by a).

Example

For inputString = "crazy", the output should be alphabeticShift(inputString) = "dsbaz"

*/



function alphabeticShift(inputString) {
    let str=''
    for(let i =0;i<inputString.length;i++){
        if(inputString[i]!=='z'){
            str+= String.fromCharCode(inputString.charCodeAt(i)+1)
        }else{
            str+='a'
        }
    }
    return str
}