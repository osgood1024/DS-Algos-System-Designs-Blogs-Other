// #39 Combination Sum

//This is very classic Backtracking problem
var combinationSum=function (candidates, target){
    const final=[]

    const findCombination=(remain, path, start){
        if(remain<0){
            return;
        }

        if(remain===0){
            final.push([...path])
            return;
        }

        for(let i =start;i< candidates.length;i++){
            findCombination(remain-candidates[i],[...path,candidates[i]],i)
        }
    }

    findCombination(target,[],0)

    return final

}





/*

Example 1:

Input: candidates = [2,3,6,7], target = 7
Output: [[2,2,3],[7]]
Explanation:
2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
7 is a candidate, and 7 = 7.
These are the only two combinations.
Example 2:

Input: candidates = [2,3,5], target = 8
Output: [[2,2,2,2],[2,3,3],[3,5]]
Example 3:

Input: candidates = [2], target = 1
Output: []
Example 4:

Input: candidates = [1], target = 1
Output: [[1]]
Example 5:

Input: candidates = [1], target = 2
Output: [[1,1]]


*/