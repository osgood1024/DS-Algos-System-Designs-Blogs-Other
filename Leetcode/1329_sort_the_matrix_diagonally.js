

// #1329 Sort the Matrix Diagonally 


var diagonalSort = function(mat) {
    

    function sortedDiagonal(row,col){
        
        let arr=[]
        //get the diagonal values 
        for(let i =row,j=col;i<mat.length && j<mat[0].length;i++,j++){
            arr.push(mat[i][j])
        }
    
        //sort the array ascendingly
        let sorted= arr.sort((a,b)=>a-b)
        
        //replace them with the sorted array
        
        for(let i=row, j=col,k=0;i<mat.length && j<mat[0].length;i++,j++,k++){
            
            mat[i][j]=sorted[k]
        }

        
    }
    
    //get the diagonal values from the rows and return the sorted ones after calling the function
    // => the index position ([0],[0]) ,([1],[0]),([2],[0])
    for(let i =0;i<mat.length;i++){
        sortedDiagonal(i,0)
    }
    
    //get the diagonal values from the columns and return the sorted ones after calling the function
    //=> the index position ([0],[1]) ,([0],[2]),([0],[3])
    for(let j=1;j<mat[0].length;j++){
        sortedDiagonal(0,j)
    }
    
    
    return mat
   
    
};