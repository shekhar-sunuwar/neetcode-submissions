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
     * @return {boolean}
     */
    isValidBST(root) {
        if(!root) return true
        const dfs = (node, left , right) => {
            if(!node) return true
            if(left >= node.val || right <= node.val) {
                return false
            }
            // let a = dfs(node.left, left, node.val)
            // let b = dfs(node.right, node.val, right)
            // return a && b
            return dfs(node.left, left, node.val) && dfs(node.right, node.val, right)
        }
        return dfs(root, -Infinity, Infinity)

    }
}
