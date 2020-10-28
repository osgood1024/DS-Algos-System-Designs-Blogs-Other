/**
 * Leetcode #841 Keys and Room
 * 
 */

const canVisitAllRooms= function(rooms){
    //The approach here is BFS
    let queue=[0]
    let lock=new Set()
    while(queue.length){
        let curr=queue.shift()
        if(lock.has(curr))continue;
        lock.add(curr)
        /*
        for(let num of rooms[curr]) queue.push(num)
        this works either way same as the bottom code 
        */
       for(let i=0;i<rooms[curr].length ;i++){
           queue.push(rooms[curr][i])
        }
    }
    return lock.size===rooms.length
}
    
//You can also use DFS way 
var canVisitAllRooms = function(rooms) {
    
    let n = rooms.length;
     let count = 0
     let visited = []
     
     function dfs(room, count){
         visited[room] = true;
         let keys = rooms[room]
         for(let i=0; i<keys.length; i++){
             if(!visited[keys[i]]){
                 count = dfs(keys[i], ++count)
             }
         }
         return count
     }
     
     count = dfs(0, 0)
     
     return count == n-1
 };
    