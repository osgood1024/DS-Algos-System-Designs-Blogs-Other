
//#90 Subsets II

/*
n is the number of elements present in the given array

 Time Complexity: O(n2^n)
 Since this approach does not generate any duplicate subsets
 The worse case(array consists of n distinct elements), the total number of recursive function calls will be 2^n. 
 Also at each function call, a deep copy of the subset "newArr" generated so far is created and added to the "ans" list.
 this will incur an additional O(n) time (as the max number of elements in the "newArr" will be n). 
 So overall, the time complexity of this approach will be O(n*2^n)


 Space Complexity: O(n)
 The space complexity of the sorting algorithm depends on the implementation of each programming language.
 For instance, in Java, the Arrays.sort() for primitives is implemented as a variant of quicksort algorithm
 whose space complexity is O(log n). In C++ sort() functioin provided by STL is a hybrid of Quick Sort, Heap sort,
 and Insertion Sort with the worst case space complexity of O(logn). Thus the use of inbuil sort() function adds O(logn) to space complexity.
 
 The recursion call stack occupies at most O(n) space. The output list of subsets is not considered while analyzing space complexity.So, the
 space complexity of this approach is O(n)
 */



const subsetsWithDup=function(nums){
    let ans=[]
    nums.sort((a,b)=>a-b)
    backtrack(ans,[],nums,0)
    return ans
}

const backtrack=function(ans,newArr, nums,start){
    ans.push([...newArr])
    for(let i =start;i<nums.length;i++){
        //skip duplicate
        if(i>start && nums[i]===nums[i-1])continue
        newArr.push(nums[i])
        backtrack(ans,newArr, nums,i+1)
        newArr.pop()
    }
}