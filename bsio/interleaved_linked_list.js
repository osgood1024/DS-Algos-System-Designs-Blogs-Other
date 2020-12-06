// Interleaved LinkedList 


/**
 * class LLNode {
 *   constructor(val, next=null) {
 *     this.val = val
 *     this.next = next
 *   }
 * }
 */
class Solution {
    solve(l0, l1) {

        let ans = l0

        while (l1) {

            if (ans) {
                if (ans.next !== null) {
                    let newNode = new LLNode(l1.val)
                    newNode.next = ans.next
                    ans.next = newNode
                    ans = newNode.next
                    l1 = l1.next
                } else {
                    ans.next = l1
                    break
                }
            } else {
                return l1
            }

        }

        return l0
    }
}