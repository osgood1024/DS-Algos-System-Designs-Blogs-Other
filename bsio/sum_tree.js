class Solution {
    solve(root) {

        function isNode(node) {
            if (node) return node.val
            else return 0
        }

        if (!root) return true
        if (!root.left && !root.right) return true

        let l = isNode(root.left)
        let r = isNode(root.right)

        return (root.val == l + r) && this.solve(root.left) && this.solve(root.right)

    }
}