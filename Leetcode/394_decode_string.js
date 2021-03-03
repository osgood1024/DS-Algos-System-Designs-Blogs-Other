// #394 Decode String


const decodeString=function(s){

    let num=0
    let stack=[]
    let str=''

    for(let i =0;i<s.length;i++){
        // or it could be parseInt(s[i])
        if(!isNaN(s[i]) || s[i]==='0'){
            num=num*10+parseInt(s[i])
        }
        else if(s[i]=== "["){
            stack.push(str)
            stack.push(num)
            str=''
            num=0

        }
        else if(s[i]==="]"){
            let lastNum=stack.pop()
            let prevStr=stack.pop()

            str=prevStr+str.repeat(lastNum)
        }
        else{
            str+=s[i]
        }

    }

    return str

}