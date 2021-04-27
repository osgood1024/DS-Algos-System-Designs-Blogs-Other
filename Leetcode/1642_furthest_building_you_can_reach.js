// #1642 Furthest Building You Can Reach 


// Min-Heap priority queue 


/**
 * Time Complexity O(NlogN) or O(NlogL) => N length of the heights array. L as the number of ladders available. 
 * The number of ladders impacts the time and space complexity.
 * 
 * Inserting or removing an item form a heap incurs a cost of O(log x), where x is the number of itesm currently in heap.
 * In the worst case, we know that there will be N-1 climbs in the heap, thus giving a time complexity of O(log N) for each insertion and removal,
 * and we're doing up to N of each of these two operations. This gives a total time complexitty of O(NlogN).
 * 
 * In Practice , the heap will never contain more than L+1 climbs at a time=when it gets to this size, we immediately remove a climb from it.
 * So, the heap operations are actually O(log L). We are still performing up to N of each of them, though, so this gives a total time complexity
 * of O(NlogL)
 * 
 * 
 * 
 * Space Complexity:O(N) or O(L)
 * As we determined above, the heap can contain up to O(L) numbers at a time.
 * In the worst case, L = N , so we get O(N)
 *
 */

const furthestBuilding=function(heights,bricks,ladders){


    let pq=new MinPriorityQueue({priority:x =>x})

    for(let i =0;i<heights.length;i++){
        let diff=heights[i+1]-heights[i]

        if(diff>0){
            if(ladders>0){
                pq.enqueue(diff)
                ladders--
            }
            else if(pq.size() && diff >pq.front().element){
                pq.enqueue(diff)
                bricks-=pq.dequeue().element
            }
            else{
                bricks-=diff
            }
        }

        if(bricks<0)return i 
    }

    return heights.length-1

}