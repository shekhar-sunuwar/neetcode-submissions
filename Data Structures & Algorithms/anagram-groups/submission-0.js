class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map  = new Map()
        for(let i =0; i< strs.length; i++){
            let  res = strs[i].split('').sort((a,b) => a.charCodeAt() - b.charCodeAt()).join('')
            if(map.has(res)){
                map.set(res, [...map.get(res), strs[i]])
            }else{
                map.set(res, [strs[i]])
            }
        }
        return [...map.values()]
    }
}
