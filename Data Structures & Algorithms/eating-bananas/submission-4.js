class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let left = 0
        let right = Math.max(...piles)
        while(left < right){
            let mid = Math.floor((left + right) / 2)
            let result = 0

            for(const pile of piles){
                result += Math.ceil(pile / mid)
            }

            if(result <= h){
                right = mid
            }else{
                left = mid + 1
            }
        }
        return left
    }
}
