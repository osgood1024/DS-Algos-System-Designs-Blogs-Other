

// #1004 Max Consecutive Ones 

const longestOnes=function(A,K){

// Sliding Window
    let left=0
    let right=0

    while(right<A.length){
        if(A[right]==0){
            K--
        }

        if(K<0){
            if(A[left]==0){
                K++
            }
            left++
        }

        right++
    }

    return right-left

}