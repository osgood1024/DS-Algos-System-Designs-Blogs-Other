// Leetcode #11  Container with Most Water

/**
 * O(n) time complexity space complexity O(1)
 * Two pointers approach 
*/
const maxArea=function(height){
    let maxArea=0
    let left=0
    let right=height.length-1

    while(left<right){
        maxArea=Math.max(maxArea,Math.min(height[left],height[right])*(right-left))
        height[left]<height[right]? left++ : right--
    }

    return maxArea
}


/**
 * Time Complexity O(n^2)
 * Space Complexity O(1)


var maxArea = function(height) {
    
    let max=Number.MIN_SAFE_INTEGER
    
    for(let i =height.length-1;i>0;i--){
        for(let j=0;j<i;j++){
            let length= height[i] > height[j] ? height[j] : height[i]
            let area=(i-j)*length
            max=Math.max(max,area)
        }
    }
    
    return max
    
};
*/

let height=[1,8,6,2,5,4,8,3,7]
console.log(maxArea(height))