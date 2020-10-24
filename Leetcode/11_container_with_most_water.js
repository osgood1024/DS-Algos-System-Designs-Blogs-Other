// Leetcode #11  Container with Most Water

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

let height=[1,8,6,2,5,4,8,3,7]
console.log(maxArea(height))