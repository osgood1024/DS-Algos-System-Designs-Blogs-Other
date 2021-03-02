
// #227 Basic Calculator II


const calculate=function(s){

    // remove the spaces on both sides
    s=s.trim()

    let num=''

    //add an operator before the first number
    let arr=['+']

    // Get an array formatted with operators and numbers
    for(let i =0;i<s.length;i++){
        if(s[i]===" "){
            continue
        }
        // if s[i] is a number
        else if(!isNaN(s[i])){
            num+=s[i]
        }
        else{
            // if s[i] is an operator 
            arr.push(Number(num))

            // reset num
            num=''
            arr.push(s[i])
        }
        // add the least number to the array 
        if(i===s.length-1){
            arr.push(Number(num))

        }
    }


    let final=[]


    for(let i =0;i<arr.length;i++){
        // if it is addition or subtraction, push this positive or negative number into the array final 
        if(arr[i]==="+"){
            final.push(arr[i+1])
        }
        if(arr[i]==='-'){
            final.push(-arr[i+1])
        }
        // If it is multiplication  or division, calculate the last number in the array final and the number after the operator
        if(arr[i]==='*'){
            let lastNum=final.pop()
            final.push(lastNum*arr[i+1])
        }
        if(arr[i]==='/'){
            let lastNum=final.pop()
            final.push(Math.trunc(lastNum/arr[i+1]))
        }
    }

    // reduce the array adding positive and negative numbers
    return final.reduce((a,b)=>a+b)

} 