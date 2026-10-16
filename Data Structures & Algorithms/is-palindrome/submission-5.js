class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let res = ''
        for(const str of s){
            if(this.isValid(str) && str !== ' '){
               res += str.toLowerCase()
            }            
        }        
        let j = res.length - 1
        for(let i = 0; i< res.length; i++){
            if(i === j) break
            if(res[i] !== res[j]){
                return false
            }
            j--
        }
        return true
    }
    isValid(c) {
        if(c.charCodeAt() > 64 && c.charCodeAt() < 123 || !isNaN(c)){
            return true
        }
        return false
    }
}
