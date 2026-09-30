class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
    let left =0
    let data = Array.from(t)
    let need = new Map();
    let wanted = t.length
    let fulfilled = 0;
    let have  = new Map()
    let ans = ''
    let ansLength = Infinity
    for(let i =0; i< t.length; i++){
        need.set(t[i], (need.get(t[i]) || 0) + 1)
    }
    for(let i =0; i< s.length; i++){
            
            have.set(s[i], (have.get(s[i]) || 0) + 1)
            if(data.includes(s[i]) && (have.get(s[i]) <= need.get(s[i]))){
                fulfilled++
            }
            while(fulfilled === wanted){
                if(i-left + 1 < ansLength){
                    ansLength = i-left+1
                    ans = s.slice(left, i + 1)
                }
                have.set(s[left], (have.get(s[left]) || 0) - 1)
                if(data.includes(s[left]) && (have.get(s[left]) < need.get(s[left]))){
                    fulfilled--
                }
                left++
            }
    }
    return ans
    }
}
