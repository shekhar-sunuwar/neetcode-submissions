class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let map = new Map()
        for(let i =0; i< position.length; i++){
            map.set(position[i], speed[i])
        }
        let sorted = [...map.entries()].sort((a ,b)=> b[0] - a[0] )
        let stack = []
        for(let i =0; i< sorted.length; i++){
            let val = Math.abs((target - sorted[i][0]) / sorted[i][1])
            if(stack.length > 0 && val <= stack[stack.length - 1]){
                if(!stack.includes(stack[stack.length - 1])){
                    stack.push(stack[stack.length - 1])
                }
            }else{
                stack.push(val)
            }
        }
        return stack.length
    }
}
