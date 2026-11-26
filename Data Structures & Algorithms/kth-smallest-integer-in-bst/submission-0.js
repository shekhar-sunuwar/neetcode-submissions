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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        let counter = 0
        let result = null

        const recurrFn = (root, k) => {
            if(!root || counter >= k ) return
            
            recurrFn(root.left, k)
            
            // if(counter >= k) return 
            counter++

            if(counter === k){
                return result = root.val
            }

            recurrFn(root.right, k)
        }
        recurrFn(root, k)
        return result
    }
}
