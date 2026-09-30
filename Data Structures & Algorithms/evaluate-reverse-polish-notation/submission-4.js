class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = []

        for(let i=0; i< tokens.length; i++){
            let operator = ['+','-','*','/']
            let a = 0
            let b = 0
            if(!operator.includes(tokens[i])){
                stack.push(Number(tokens[i]))
            }else{
                switch (tokens[i]){
                    
                    case '+':
                        stack.push(stack.pop() + stack.pop())
                        break;
                    case '-':
                         a = stack.pop()
                         b = stack.pop()
                        stack.push(b - a)
                        break;
                    case '*':
                        stack.push(stack.pop() * stack.pop())
                        break;
                    case '/':
                         a = stack.pop()
                         b = stack.pop()
                        stack.push(Math.trunc(b/a))
                        break;
                }
            }
        }
        return stack[0]
    }
}
