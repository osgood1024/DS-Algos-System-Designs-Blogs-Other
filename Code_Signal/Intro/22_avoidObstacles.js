

/*

You are given an array of integers representing coordinates of obstacles situated on a straight line.

Assume that you are jumping from the point with coordinate 0 to the right. You are allowed only to make jumps of the same length represented by some integer.

Find the minimal length of the jump enough to avoid all the obstacles.

Example

For inputArray = [5, 3, 6, 7, 9], the output should be
avoidObstacles(inputArray) = 4.



***Hint: What is the first integer after 1 which none of the elements in the array can be evenly divided by?***

*/

function avoidObstacles(inputArray) {
    
    let min_length=2
    for(let i =0;i<inputArray.length;i++){
        if(inputArray[i]%min_length==0){
            min_length++;
            //This basically just move the i back to zero again since the next iteration is i++ 
            i=-1;
        }
        
    }
    
    return min_length
    
}