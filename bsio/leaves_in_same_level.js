
// Leaves In Same Level
/**
 *
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
        let set= new Set()

        function dfs(root, depth, set){
            if(!root)return
            // Here we cannot have depth++ since we are not doing depth=depth+1
            // we dont want to have the depth from last node 
            dfs(root.left,depth+1,set)
            dfs(root.right,depth+1,set)
            if(!root.left && !root.right){
                set.add(depth)
            }

        }

        dfs(root,0,set)

        return set.size ===1
    }
}