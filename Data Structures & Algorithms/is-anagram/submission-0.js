class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let map1 = new Map()
        let map2 = new Map()
        if(s.length !== t.length) return false
        for(const x of s) {
            map1.set(x, (map1.get(x) || 0) + 1)
        }
        for(const x of t) {
            map2.set(x, (map2.get(x) || 0) + 1)
        }

        for(let i = 0; i< s.length; i++){
           if (map1.get(s[i]) !== map2.get(s[i])) return false
        }
        return true
    }
}
