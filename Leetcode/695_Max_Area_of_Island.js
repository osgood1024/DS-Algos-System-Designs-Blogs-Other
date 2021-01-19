// #695 Max Area of Island




// Time & Space Complexity both are O(R*C)-where R is the number of rows and the given grid, and C is the number of columns.
//  Time complexity  -  We visit every square once. 
//  Space Complexity - The space used by seen, to keep track of visited squares, and the space used by the call stack during the recursion 
var maxAreaOfIsland = function(grid) {
    
    let max=0
    
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[i].length;j++){
            if(grid[i][j]==1){
                max=Math.max(max,dfs(grid,i,j))
            }
        }
    }
    
    return max
    
    function dfs(grid,i,j){
        
        if(i<0 || i>=grid.length || j<0 || j>=grid[i].length || grid[i][j]==0){
            return 0
        }
        
        grid[i][j]=0
        
        let count=1
        
        count+=dfs(grid,i+1,j)
        count+=dfs(grid,i-1,j)
        count+=dfs(grid,i,j+1)
        count+=dfs(grid,i,j-1)
        
        return count
        
    } 
};

