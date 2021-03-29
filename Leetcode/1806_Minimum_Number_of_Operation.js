// #1806 Minimum Number Of Operation

const reinitializePermutation=function(n){
    let count=0
    let perm=new Array(n).fill(0)
    for(let i =0;i<perm.length;i++){
        perm[i]=count
        count++
    }

    let origin=[...perm]

    let operation=0

    while(1){
        let arr=[...perm]
        for(let i =0;i<arr.length;i++){
            let idx;
            //below line can also be like => if(i&1)
            if(i%2===1){
                // below line can also be like => idx=(n>>1)+(i-1)/2
                idx=((n/2)+(i-1)/2)
            }
            else{
                idx=i/2
            }
            arr[i]=perm[idx]
        }
        perm=arr
        operation++
        if(equalArrays(origin,perm)){
            break;
        }
    }

    return operation
}


const equalArrays=(a,b)=>{
    return  a.every((ele,i)=>ele==b[i])
}

