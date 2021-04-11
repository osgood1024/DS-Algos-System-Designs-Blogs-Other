// #329 Longest increasing path in a matrix

// check this youtube https://www.youtube.com/watch?v=uLjO2LUlLN4 for more details. The video explain everything

// DFS + memoization => optimization (or not it wont pass all the test cases -TLE)

/***Time and Space Complexity is O(MN) 
 * 
 *
 * Time complexity: Each vertex/ cell will be calculated once and only once, and each edge will be visited once and only once.
 * 
 * The total time complexity is then O(V+E). V is the total number of vertices and E is the total number of vertices and E is the total number of edges. 
 * In our problem, O(V)=O(MN), O(E)=O(4V)=O(MN)
 * 
 */

var longestIncreasingPath = function(matrix) {
    
    if(matrix.length===0) return 0 
    
    //create 2D arrays based on matrix columns and rows
    // const memo=new Array(matrix.length).fill(-1).map(row => new Array(matrix[0].length).fill(-1))
// memoization is cache all the previous call from the recursion     
    const memo =Array.from({length:matrix.length},() =>Array(matrix[0].length).fill(0))
    
    let max=0
    for(let row=0;row<matrix.length;row++){
        for(let col=0;col<matrix[0].length;col++){
            // console.log('row:',row,'col:',col)
            max=Math.max(max,dfs(matrix,row,col,Number.MIN_SAFE_INTEGER,memo))
        }
    }
    
    return max
    
};

const dfs=(matrix,row,col,parent, memo)=>{
    if(row<0 || row>=matrix.length || col<0 || col>=matrix[0].length || matrix[row][col] <=parent){
        return 0
    }
    
    if(memo[row][col]===0){
        const rowVector=[1,-1,0,0]
        const colVector=[0,0,1,-1]
        
    let maxPath=0
    for(let dir =0;dir<4;dir++){
        const maxForNode=1+dfs(matrix, row+rowVector[dir],col+colVector[dir],matrix[row][col],memo);
      
        maxPath=Math.max(maxPath,maxForNode)
    }
        memo[row][col]=maxPath;
        
        
    }
    return memo[row][col]
}