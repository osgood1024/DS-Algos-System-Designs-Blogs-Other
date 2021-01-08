
// #986 Interval List Intersections

/* 
Time Complexity O(M+N), where M,N are the lengths of A and B respectively
Space Complexity O(M+N),the maximum size of the answer 
*/

// Two pointers
var intervalIntersection = function(A, B) {

    let i =0,j=0,arr=[]

    while(i<A.length && j<B.length){
        // Check if A[i] intersects B[j]
        //  low -> the startpoint of the intersection 
        //  high -> the endpoint of the intersection 
        let low=Math.max(A[i][0],B[j][0])
        let high=Math.min(A[i][1],B[j][1])

        if(low<=high){
            arr.push([low,high])
        }

        // Remove the interval with the smallest endpoint 
        if(A[i][1]<B[j][1]){
            i++
        }else{
            j++
        }
    }
    
    return arr
    
};