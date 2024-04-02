class Solution:
    def evalRPN(self, tokens: List[str]) -> int:
        stack = []
        for token in tokens:
            match token:
                case "+":
                    s,t = stack.pop(),stack.pop()
                    stack.append(t+s)
                case "-":
                    s,t = stack.pop(),stack.pop()
                    stack.append(t-s)
                case "*":
                    s,t = stack.pop(),stack.pop()
                    stack.append(t*s)
                case "/":
                    s,t = stack.pop(),stack.pop()
                    stack.append(int(truediv(t,s)))
                case _:
                    stack.append(int(token))
        return stack[0]