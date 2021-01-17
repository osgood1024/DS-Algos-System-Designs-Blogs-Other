// #994 Rotting Oranges

// BFS - Time and Space Complexity O(n)
const orangesRotting=function(grid){

    let totalfreshOranges=0
    let minute=0
    let rottenOranges=[]

    // Here we are trying to find all the total fresh Oranges and all the rotten Oranges coordinate (x,y) in 2d 
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
                    //Here is acting like queues,
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




