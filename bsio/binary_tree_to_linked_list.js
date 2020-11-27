// Binary Tree To Linked List 


/**
 * class Tree {
 *   constructor(val, left=null, right=null) {
 *     this.val = val
 *     this.left = left
 *     this.right = right
 *   }
 * }
 */

/**
 * class LLNode {
 *   constructor(val, next=null) {
 *     this.val = val
 *     this.next = next
 *   }
 * }
 */
class Solution {
    solve(root) {
        let node;
        let nodeRoot;

        function traverse(root) {
            if (!root) return;
            traverse(root.left)
            if (!node) {
                node = new LLNode(root.val);
                nodeRoot = node;
            } else {
                node.next = new LLNode(root.val);
                node = node.next
            }
            traverse(root.right)

        }
        traverse(root);
        return nodeRoot;

        
    }
}

/*
Another Version

class Solution {
    solve(root) {
        if (!root) return
        let data = []

        function dfs(root) {
            if (!root) return
            if (root.left) dfs(root.left)
            data.push(root.val)
            if (root.right) dfs(root.right)
        }

        dfs(root)

        let currNode = new LLNode(data[0])
        let head = currNode

        for (let i = 1; i < data.length; i++) {
            let newNode = new LLNode(data[i])
            currNode.next = newNode
            currNode = newNode
        }

        return head

    }
}

*/