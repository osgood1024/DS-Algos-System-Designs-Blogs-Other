// #42 Trapping the Rain Water



/**
 * Brute Force 
 * Time Complexity:O(n^2) 
 * Space Complexity:O(1)
 */


const trap =  function(height){

    let ans=0
    for(let i =0;i<height.length;i++){
        let left_max=0,right_max=0
        
        for(let j=0;j<i;j++){
            left_max=Math.max(left_max,height[j])
        }
        for(let m=i+1;m<height.length;m++){
            right_max=Math.max(right_max, height[m])
        }

        const water =Math.min(left_max,right_max)-height[i]

        if(water>0)ans+=water

    }

    return ans 

}

/**
 * Dynammic Programming 
 * Time :O(n)
 * Space:O(n)
 * 
 */
 const trap = function(height) {

    let ans =0

    // we can use hash instead of array (either way works, I just notice you can do with hash too)
    let left_max={}
    left_max[0]=height[0]
    for(let i =1;i<height.length;i++){
        left_max[i]=Math.max(height[i],left_max[i-1])
    }

    let right_max={}

    right_max[height.length-1]=height[height.length-1]

    for(let j=height.length-2;j>=0;j--){
        right_max[j]=Math.max(height[j],right_max[j+1])
    }

    for(let i =0;i<height.length;i++){
        ans+=Math.min(left_max[i],right_max[i])-height[i]
    }

    return ans
    
};


/**
 * Stack
 * Time:O(n)
 * Space:O(n)
 */

 const trap = function(height) {

    let ans =0

    let i =0
    const arr=[]

    while(i<height.length){
        while(arr.length!==0 && height[i]>height[arr[arr.length-1]]){
            const top=arr[arr.length-1]
            arr.pop()

            if(arr.length===0)break;
            const dist=i-arr[arr.length-1]-1;
            const h=Math.min(height[i], height[arr[arr.length-1]])-height[top];
            ans+=dist*h

        }
        arr.push(i)
        i++
    }

    return ans
    
};




/**
 * Two pointers
 * Time:O(n)
 * Space:O(1)
 */


 const trap = function(height) {

    let ans =0

    let l=0
    let r=height.length-1
    let left_max=height[l]
    let right_max=height[r]

    while(l<r){

        // Keep track of the max from left and right 
        left_max=Math.max(left_max,height[l])
        right_max=Math.max(right_max,height[r])

        // we want to maintain the taller side and reduce the smaller side
        // if left is taller we want to reduce the right side, vice versa 
        
        if(height[l]>height[r]){
            ans+=Math.min(left_max,right_max)-height[r]
            r--
        }
        else{
            ans+=Math.min(left_max,right_max)-height[l]
            l++
        }

    }

    return ans
    
};

