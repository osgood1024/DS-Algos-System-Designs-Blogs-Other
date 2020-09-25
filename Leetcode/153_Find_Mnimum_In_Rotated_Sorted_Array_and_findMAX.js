/* 
#153  Find Minimum in Rotated Sorted Array 
This is similar to leetcode #33 but no target in argument just arr yet find the minimum element 

***Topic mainly Binary Search for the file***

Problem Statement:
Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e.,  [0,1,2,4,5,6,7] might become  [4,5,6,7,0,1,2]).

Find the minimum element.

You may assume no duplicate exists in the array.

Example 1:

Input: [3,4,5,1,2] 
Output: 1
Example 2:

Input: [4,5,6,7,0,1,2]
Output: 0

*/

const findMin=function(nums){
    let start=0
    let end=nums.length-1
    
    while(start<end){
        // let mid=start+Math.floor((end-start)/2) => the same code with next following line either one of them works
        let mid=Math.floor((start+end)/2)
        
        if(nums[mid]>nums[end]){
            start=mid+1
        }else {
            end=mid
        }
    }
    return nums[start]

}




/*
Now what if we find the maximum instead of minimum element?

check this questions :https://binarysearch.com/problems/Find-the-Largest-Number-in-a-Rotated-List

*/ 


const findMax=function(arr){
     
    let start=0
    let end =arr.length-1
    let max=Number.MIN_SAFE_INTEGER
    
    while(start<end){
        let mid=Math.floor((start+end)/2)
       
        if(arr[start]<=arr[mid]){
            max=Math.max(max,arr[mid])
            start=mid+1
        }else{
            end=mid
        }
        
    }
   
    return Math.max(max,arr[start])
   }



//Lets test it 
let array=[6,7,8,1,4]

console.log(findMax(array))
console.log(findMin(array))

