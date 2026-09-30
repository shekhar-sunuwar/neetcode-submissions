class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let map = new Map([[')','('],['}','{'], [']','['] ])
        let record = []

        for(let i = 0; i< s.length; i++){
            if(map.has(s[i])){
                if(record.length > 0 && record[ record.length - 1] === map.get(s[i])){
                    record.pop()
                }else{
                    return false
                }
            }else{
                record.push(s[i])
            }
        }
        return record.length === 0
    }
}
