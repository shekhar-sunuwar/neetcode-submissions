class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let spread = [...matrix] 
    let pos = 0;
    for(let i =0; i < spread.length; i++){
        console.log(spread[i][spread.length],'s')
        if(spread[i][spread.length - 1] < target || spread[i][0] <= target){
            pos = i
        }
    }
    console.log(spread[0], pos)
    for(let j = 0; j< spread[pos].length; j++ ){
        if(spread[pos][j] === target){
            return true
        }
    }
    return false
    }
}
