/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxPathSum(root) {
        let max = -Infinity
        const recurrFn = (node) => {
            if(!node) return null
            let left = recurrFn(node.left)
            let right = recurrFn(node.right)

            let leftMax = Math.max(left, 0)
            let rightMax = Math.max(right, 0)

            max = Math.max(max, node.val + leftMax + rightMax)
            return (node.val + Math.max(leftMax, rightMax))
        }
        recurrFn(root)
        return max
    }
}
