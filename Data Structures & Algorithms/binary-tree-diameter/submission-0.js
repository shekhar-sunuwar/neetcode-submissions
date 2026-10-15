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
    diameterOfBinaryTree(root) {
        this.res = 0
        this.calculateHeight(root)
        return this.res
    }

    calculateHeight(node){
        if(!node) return 0
        let left = this.calculateHeight(node.left)
        let right = this.calculateHeight(node.right)

        this.res = Math.max(left + right , this.res)
        return 1 + Math.max(left, right)
    }
}
