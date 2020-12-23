
// Leftmost Deepest Tree Node

/**
 * class Tree {
 *   constructor(val, left=null, right=null) {
 *     this.val = val
 *     this.left = left
 *     this.right = right
 *   }
 * }
 */
class Solution {
    solve(root) {

      if(!root)return null
      let queue=[root]
      
      let left_max=0 //=> or we can do  left_max=root.val
      while(queue.length){
          let size=queue.length
          for(let i =0;i<size;i++){
              let temp=queue.shift()
              if(i===0){
                left_max=temp.val
              }

              if(temp.left)queue.push(temp.left)

              if(temp.right)queue.push(temp.right)
          }

      }

      return left_max

    }
}