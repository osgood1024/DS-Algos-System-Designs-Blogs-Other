// Unobstructed Buildings 

/*
01/02/2021
Weekly Contest 40 (easy)

This problem is similar with Turtle of Wall Street (Weekly Contest 32-easy)
*/


class Solution{
    solve(heights){
        let arr=[]
        let max =Number.MIN_VALUE
        for(let i =heights.length-1;i>=0;i--){
            if(heights[i]>max){
                arr.push(i)
            }
            max=Math.max(max,heights[i])
        }

        return arr.reverse()
    }
}



