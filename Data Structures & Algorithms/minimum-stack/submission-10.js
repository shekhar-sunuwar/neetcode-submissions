class MinStack {
    constructor() {
        this.stack = []
        this.minStack = []
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        if(this.stack.length > 0 ){
            let len = this.minStack.length - 1
            if(val < this.minStack[len] ){
                this.minStack.push(val)
                this.stack.push(val)
            }else{
                this.minStack.push(this.minStack[len])
                this.stack.push(val)
            }
        }else{
            this.minStack.push(val)
            this.stack.push(val)
        }
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop()
        this.minStack.pop()
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1]
    }   

    /**
     * @return {number}
     */
    getMin() {
        let len = this.minStack.length - 1
        return this.minStack[len]
    }
}
