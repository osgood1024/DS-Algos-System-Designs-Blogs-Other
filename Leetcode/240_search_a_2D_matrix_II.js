// #240 search a 2D matrix II

const searchMatrix = function(matrix, target){

    let w=matrix[0].length
    let h=matrix.length

    let start=0
    let end=w-1


    while(end>=0 && start<h){
        // let start from the the last index of the first row 
        let curr=matrix[start][end]

        if(curr===target){
            return true
        }
        else if (curr>target){
            end--
        }
        else{
            start++
        }
    }

    return false 

}