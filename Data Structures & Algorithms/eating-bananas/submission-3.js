class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let left = 1
        let right = Math.max(...piles)
        while(left < right){
            let mid = Math.floor((left + right) / 2)
            let result = 0

            for(const pile of piles){
                result += Math.ceil(pile / mid)
            }

            if(result > h){
                left = mid + 1
            }else{
                right = mid
            }
        }
        return left
    }
}
