// #17 Letter Combinations of a Phone Number

//Recursion method
const letterCombinations=function (digits){
    if(!digits.length)return []
    let map={
        2:['a','b','c'],
        3:['d','e','f'],
        4:['g','h','i'],
        5:['j','k','l'],
        6:['m','n','o'],
        7:['p','q','r','s'],
        8:['t','u','v'],
        9:['w','x','y','z'],
    }

    let final=[]
    function permute(string, index){
        if(digits.length===index){
            final.push(string)
            return;
        }

        for(let letter of map[digits[index]]){
            permute(string+letter,index+1)
        }

    }

    permute('',0)
    return final
}


// let digits="23"
// let digits=""
let digits="2"

console.log(letterCombinations(digits))