class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let left = 0;
        let right = height.length - 1
        let leftMax = height[left]
        let leftArr = []
        let rightArr = []
        let rightMax = height[right]
        let result = 0
        for(let  i = 0; i< height.length; i++){
            
            leftMax = Math.max(leftMax, height[i])
            leftArr.push(leftMax)
            
        }    

        for(let i = height.length - 1; i >= 0; i--){
            rightMax = Math.max(rightMax, height[i])
            rightArr.unshift(rightMax)
        }   

        for(let i = 0; i< height.length; i++){
            result += (Math.min(leftArr[i], rightArr[i]) - height[i])
        }

        return result
    }
}
