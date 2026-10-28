class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let sorted = nums.sort((a,b) => a -b)
        let maxConsc = 1
        let currMax = 1
        if(!nums.length) return 0 
        for(let i = 0; i < sorted.length; i++){
            if(sorted[i + 1] === sorted[i]) {
                continue
            }
            if((sorted[i + 1] - sorted[i]) === 1){
                    currMax = currMax + 1
                    maxConsc = Math.max(maxConsc, currMax )
            }else{
                    currMax = 1
            }    
        }
        return maxConsc
    }
}
