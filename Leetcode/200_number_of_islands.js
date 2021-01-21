// #200 Number of Islands


// DFS Approach 
// Time Complexity:O(M x N) where M is the number of rows and N is the number of columns
// Space Complexity: worse case O(MxN) in case that the grid map is filled with lands where DFS goes by M*N deep
var numIslands = function(grid) {
     
    if(!grid || grid.length==0){
        return 0
    }
    
    let numIslands=0
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[i].length;j++){
            if(grid[i][j]=='1'){
               numIslands+= dfs(grid,i,j)
            }
        }
    }
    
    return numIslands
    
    function dfs(grid,i,j){
        
       
        if(i<0 || i>=grid.length || j<0 || j>=grid[i].length || grid[i][j]=='0'){
            return 0
        }
        
        grid[i][j]= "0"
        
        dfs(grid,i+1,j)
        dfs(grid,i-1,j)
        dfs(grid,i,j+1)
        dfs(grid,i,j-1)
        
        
        return 1
    }
    
};



// BFS Approach
// Time complexity- O(M x N) where M is the number of rows and N is the number of columns 
// Space complexity- O(min(M,N)) because is worst case where the grid is filled with lands, the size of queue can grow up to min(M,N)

var numIslands= function (grid){

    if(!grid || grid.length==0){
        return 0
    }
    let numIsland=0

    for(let i =0;i<grid.length;i++){
        for(let j=0;j<grid[i].length;j++){
            if(grid[i][j]==1){
                numIsland++
                grid[i][j]= -1
                const queue=[[i,j]]

                while(queue.length){
                    const c =queue.shift()
                    
                    // Top
                    if(c[0]>0){
                        if(grid[c[0]-1][c[1]]==1){
                            grid[c[0]-1][c[1]]= -1
                            queue.push([c[0]-1,c[1]])
                        }
                    }

                    // Bottom
                    if(c[0]<grid.length-1){
                        if(grid[c[0]+1][c[1]]==1){
                            grid[c[0]+1][c[1]]= -1
                            queue.push([c[0]+1,c[1]])
                        }
                    }

                    //Left
                    if(c[1]>0){
                        if(grid[c[0]][c[1]-1]==1){
                            grid[c[0]][c[1]-1]=-1
                            queue.push([c[0],c[1]-1])
                        }
                    }
                    
                    //Right 
                    if(c[1]<grid[i].length-1){
                        if(grid[c[0]][c[1]+1]==1){
                            grid[c[0]][c[1]+1]=-1
                            queue.push([c[0],c[1]+1])
                        }
                    }
                }
            }
        }
    }


    return numIsland
}


