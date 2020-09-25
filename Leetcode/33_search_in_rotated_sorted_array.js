/* # 33 Search in Rotated Sorted Array
One of my favorite classic interview problem 
They are two ways of solving this problem, one is use binary search one is just is as simple as for loop
However, this question in intended to usee binary search (Ologn) time complexity

*/

/*

Problem Statement:
You are given an integer array nums sorted in ascending order, and an integer target.

Suppose that nums is rotated at some pivot unknown to you beforehand (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

If target is found in the array return its index, otherwise, return -1.

Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
Example 2:

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
Example 3:

Input: nums = [1], target = 0
Output: -1

*/


//Simple for loop approach -O(n) time complexity worse case
const search=function(nums, target){
    for(let i =0;i<nums.length;i++){
        if(nums[i]===target){
            return i
        }
    }
    return -1
}


// Better with binary search approach (divide and conquer)- O(logN) time complexity worse case
//Note that binary search need to be sorted array, so here we need to moodify some changes with the binary search approach, however is same concept

const search=function(nums, target){
    let start=0
    let end=nums.length-1;

    while(start<=end){
        let mid=start+Math.floor((end-start)/2)

        if(nums[mid]===target) return mid;
        else if(nums[start]<= nums[mid]){
            if(target>=nums[start] && target<nums[mid]){
                end=mid-1
            }else{
                start=mid+1
            }
        }else{
            if(target<=nums[end] && target>nums[mid]){
                start=mid+1
            }else{
                end=mid-1
            }
        }
    }

    return -1
}