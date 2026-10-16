class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = new Map()
        let res = []
        for(let i = 0; i< nums.length; i++){
            map.set(nums[i], (map.get(nums[i]) || 0 ) + 1)
        }
        const sorted = [...map].sort((a,b) => b[1] - a[1])
        for (let i = 0; i < k; i++){
            res.push(sorted[i][0])
        }
        return res
    }
}
