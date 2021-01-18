// #994 Rotting Oranges

// BFS - Time and Space Complexity O(n)
const orangesRotting=function(grid){

    let totalfreshOranges=0
    let minute=0
    let rottenOranges=[]

    // Here we are trying to find all the total fresh oranges and all the rotten oranges coordinate (x,y) in 2d 
    for(let i =0;i<grid.length;i++){
        for(let j=0;j<grid[i].length;j++){
            if(grid[i][j]===1)totalfreshOranges++
            if(grid[i][j]===2)rottenOranges.push([i,j])
        }
    }

    //check 4 directionally adjacent in place -(West, East, North, South)
    const coordinate= [[0,-1],[0,1],[-1,0],[1,0]]

    /*BFS Incoming
        As long as there are fresh Oranges and rotten Oranges that we found from fresh Oranges. 
        We want to keep bfs them 
        example =2, without rottenOranges.length in if condition, it will give TLE.
        On the other hand if the dont have totalFreshOranges in if condition
        we will count the minutes always more than one minute as a result,
        since we are counting the last rotten Orange in (rottenOrange []) 
    */
    while(totalfreshOranges && rottenOranges.length){
        // we want a new array (is like a temp) so we can finish traversing the rotten Oranges surrounding 
        // Fresh oranges that is adjacent to the rotten oranges will be pushed into this and will become rotten oranges
        let rottingOranges=[]

        while(rottenOranges.length){

            let [x,y]=rottenOranges.pop()

            // check 4 directionally adjacent on the rotten orange coordinate (x,y)
            for(let i =0;i<4;i++){

                let[x2,y2]=[x+coordinate[i][0],y+coordinate[i][1]]

                // Intersting observation, it has to be  grid[x2] first and then grid[x2][y2]===1 inside if condition statement
                // if we switch the order of the condition grid[x2][y2]===1 && grid[x2] we will get 'cannot read property '0' of undefined' 
                if(grid[x2]&& grid[x2][y2]===1 ){
                    totalfreshOranges--
                    grid[x2][y2]=2
                    //Here is acting like stack,
                    //Everytime we find fresh oranges near by rotten orange 
                    //we want to get the coordinates of the fresh oranges since the fresh Oranges is becoming rotten. 
                     rottingOranges.push([x2,y2])
                }
            }

        }
        // rotting oranges now became rotten oranges, 
		// it will continue to spread until nothing left!
        rottenOranges=rottingOranges

        minute++
    }

    //if there are any fresh oranges left, return -1, else , return minute
    return totalfreshOranges ? -1: minute

}


// Another version just slightly different (check the return and while condition, but is the same tbh)
var orangesRotting = function(grid) {

    let totalfreshOranges=0
    let minute=0
    let rottenOranges=[]

    for(let i =0;i<grid.length;i++){
        for(let j=0;j<grid[i].length;j++){
            if(grid[i][j]===1)totalfreshOranges++
            if(grid[i][j]===2)rottenOranges.push([i,j])
        }
    }
    // If there is no fresh orange then return 0 minute no need to proceed anymore 
    if(totalfreshOranges==0)return 0

    //check 4 directionally adjacent in that place (West, East, North, South)
    const coordinate= [[0,-1],[0,1],[-1,0],[1,0]]

// we can use rottenOranges.length only no need the totalfreshOranges in the condition but we need min-1 in the return statement
// since it will always more than one minute ,because we count the last one in the minute too for the rotten orange 
    while(rottenOranges.length){
        let rottingOranges=[]
        while(rottenOranges.length){

            let [x,y]=rottenOranges.pop()
            for(let i =0;i<4;i++){
                let[x2,y2]=[x+coordinate[i][0],y+coordinate[i][1]]

                if(grid[x2]&& grid[x2][y2]===1 ){
                    totalfreshOranges--
                    grid[x2][y2]=2
                     rottingOranges.push([x2,y2])
                }
            }

        }

        rottenOranges=rottingOranges

        minute++
    }
//here we want to reduce 1 by the minutes 
    return totalfreshOranges ? -1: minute-1
    
};



/**
 * 
 * 
 * Blog version explaining
 * 
 * 
 * 
 * 
var orangesRotting = function(grid) {

    let totalfreshOranges = 0
    let minute = 0
    let rottenOranges = []

    // Here we are trying to calculate how many fresh oranges we have 
    // and find all the rotten oranges coordinate (where they locate (x,y) in 2d)
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 1) totalfreshOranges++
            if (grid[i][j] === 2) rottenOranges.push([i, j])
        }
    }

    // If there is no fresh oranges at all in the grid then just return 0 
    if (totalfreshOranges == 0) return 0

    //check 4 directionally adjacent of rotten oranges (West, East, North, South)
    const coordinate = [[0, -1],[0, 1],[-1, 0],[1, 0]]

    //  Traverse the 2d matrix, while there are still fresh oranges left and rotten oranges left to be spread 
    while (totalfreshOranges && rottenOranges.length) {
        // fresh oranges that is adjacent to the rotten oranges will be store into this array.
        let rottingOranges = []
        while (rottenOranges.length) {

            let [x, y] = rottenOranges.shift()
            for (let i = 0; i < 4; i++) {
                let [x2, y2] = [x + coordinate[i][0], y + coordinate[i][1]]

                // If the adjacency of rotten orange is fresh orange, make it rotten, 
                // decrease the total fresh oranges, and push the coordination of that fresh orange to rotten orrange 
                // into the rottingOranges array (queue data structure incoming) 
                if (grid[x2] && grid[x2][y2] === 1) {
                    totalfreshOranges--
                    grid[x2][y2] = 2
                    rottingOranges.push([x2, y2])
                }
            }
        }
        // The rotting oranges, which are the one that just got rotten now become rotten oranges 
        // In that way, we can increment the minute(the timestamp of each minute should be decide by 
        // each of rotting oranges that get push into rotten oranges array => rottenOranges.length)
        // It will keep spreading until there is nothing left 
        rottenOranges = rottingOranges
        minute++
    }

    // If there is any fresh oranges left, we want to return -1 else return the minute 
    return totalfreshOranges ? -1 : minute

};
 * 
 * 
 * 
 * 
 * 
 * 
 */