class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
            let mid = Math.ceil(nums.length / 2) === 1 ? 0 : Math.ceil(nums.length / 2)
            
            if(target < nums[mid]){
                for(let i = 0; i < mid; i++){
                    if(target === nums[i]){
                        return i
                    }
                }
            }else{
                for(let i = mid; i< nums.length; i++){
                    if(target === nums[i]){
                        return i
                    }
                }
            }
            return -1
             
}}
