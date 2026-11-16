class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0
        let buy = Infinity
        let profit = 0
        for(let i = 0; i< prices.length; i++) {
            let curr = prices[i]
            if(curr < buy){
                buy = curr
            }else{
               profit = curr - buy 
               maxProfit = Math.max(profit, maxProfit)    
            }
        }
        return maxProfit
    }
}
