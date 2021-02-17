// #179 Largest Number


const largestNumber=function(nums){
    

    nums.sort((a,b)=>`${b}${a}`-`${a}${b}`)

    //the one on top code essentially is the same with below
    // nums.sort((a,b)=> (b.toString()+a.toString())-(a.toString()+b.toString()))

    // Or we can use this 
    // nums.sort((a, b)=> {
    //     const ab = a.toString() + b.toString();
    //     // console.log('ab:'+ab)
    //     const ba = b.toString() + a.toString();
    //     // console.log('ba:'+ba)
    //     return ba - ab;
    // });


    if(nums[0]===0){
        return 0
    }

    return nums.join('')
}

