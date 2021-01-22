// #1198 Find Smallest Common Element in All Rows

/**
 * We can count all elements, and then pick the smalles one that appears n times. 
 * This approach has a linear time complexity - at the cost of additional memory for storing counts.
 * 
 * Also, we can use a binary search to look elements up directly in the matrix.
 * We won't need any additional memory, though this approach will be a bit slower.
 * 
 */

// Hash table
// Time Complexity -O(nm), where n and m are the number of rows and columns 
// space Complexity - constrained problem: O(10000)=O(1)
//                  - unconstrained problem: O(k), where k is the number of unique elements 
var smallestCommonElement = function(mat) {
    
    let hash={}


    for(let i =0;i<mat.length;i++){
        for(let j =0;j<mat[i].length;j++){


            hash[mat[i][j]]=hash[mat[i][j]]+1||1

            if(mat[i][j]===mat[i][j+1])continue 

            if(hash[mat[i][j]]==mat.length){
                return mat[i][j]
            }
        }
    }

    return -1
    
};



// Binary Search way 
// Time Complexity -O(mnlogm)
// We iterate through m elements in the first row. 
// For each element, we perform the binary search n times over m elements
// Space Complexity - O(1)=> original solution
//                    O(n)=> improve solution, to store search positions for all rows.
const smallestCommonElement =  function(mat){

    // There is edges case if mat=[[0]] or mat=[], for that reason we can use this condition 
    if(mat.length==0||mat[0].length==0)return -1

    let selectRows=mat[0]


    for(let i =0;i<selectRows.length;i++){
        for(let j=0;j<mat.length;j++){
            
            let index= binarySearch(mat[j],selectRows[i])
    
            if(index===-1)break
            if(j === mat.length-1){
                return selectRows[i]
            }
        }

    }
    return -1

}

function binarySearch(arr,target){

    let left=0
    let right =arr.length-1
    while(left<=right){
        let mid=Math.floor((left+right)/2)

        if(arr[mid]==target){
            return mid
        }
        else if(arr[mid]>target) {
            right=mid-1
        }else{
            left=mid+1
        }   
    }

    return -1
}

