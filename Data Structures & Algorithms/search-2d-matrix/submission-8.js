class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
    let cols = matrix[0].length
    let left = 0
    let right = matrix.length * matrix[0].length - 1
    
    while(left <= right){
        let mid = Math.floor((left + right) / 2)
       
        let row = Math.floor(mid / cols)
        let col = mid % cols
        const value = matrix[row][col]
        if(value === target) {
            return true
        }

        if(value < target){
            left = mid + 1
        }else{
            right = mid - 1
        }
    }
    return false
    }
}
