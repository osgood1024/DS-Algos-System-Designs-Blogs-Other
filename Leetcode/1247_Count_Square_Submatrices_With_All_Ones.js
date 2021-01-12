// #1247 Count Square Submatrices with All Ones


// DP solution with O(n^2) Time complexity 
const countSquares=function (matrix){
    let count=0

    let row=matrix.length
    let col=matrix[0].length
    for(let i =0;i<row;i++){
        for(let j=0;j<col;j++){
            if(i>0 && j>0 && matrix[i][j]===1){
                matrix[i][j]=Math.min(matrix[i-1][j],matrix[i-1][j-1],matrix[i][j-1])+1
            }
            count+=matrix[i][j]
        }
    }
    return count 
}